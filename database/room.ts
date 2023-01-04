import { Collection } from "mongodb";
import { client } from "./connection";

type RoomDocumentType = {
  _id: string;
  name: string;
};

const createRoom = async ({
  name,
  users,
}: {
  name: string;
  users: Array<{ email: string; name: string }>;
}) => {
  try {
    const database: string = process.env.DB!;
    await client.connect();
    const collection: Collection = client.db(database).collection("rooms");
    const userCollection: Collection = client.db(database).collection("users");
    const response = { success: true };
    const room: RoomDocumentType = (await collection.findOne({
      name: name,
    })) as unknown as RoomDocumentType;
    if (room?.name) {
      return response;
    }

    let userUpdates: Array<Promise<any>> = [];
    const participants: Array<string> = [];
    users.forEach(({ name: userName }) => participants.push(userName));

    await collection.insertOne({
      name: name,
      thread: [],
    });
    users.forEach(async ({ email }) => {
      userUpdates.push(
        userCollection.updateOne(
          { email: email },
          { $push: { rooms: { name: name, participants: participants } } },
          { upsert: true }
        )
      );
    });

    await Promise.all(userUpdates).then(() => {
      return response;
    });
  } catch (error) {
    return error;
  } finally {
    client.close();
  }
};

export { createRoom };
