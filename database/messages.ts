import { Collection, ObjectId } from "mongodb";
import { client } from "./connection";

async function loadConversationList({ id }: { id: string }) {
  try {
    await client.connect();
    const database: string = process.env.DB!;
    const collection: Collection = client.db(database).collection("users");
    const rows = collection
      .find({ _id: new ObjectId(id) })
      .project({ rooms: 1 });

    const rooms = [];
    for await (const row of rows) {
      const allRooms = row.rooms;
      for (const r of allRooms) {
        rooms.push(r.participants);
      }
    }
    if (!(await rows.hasNext())) {
      await rows.close();
      return rooms;
    }
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

export { loadConversationList };
