import { Collection } from "mongodb";
import { client } from "./connection";

const createRoom = async ({ name }: { name: string }) => {
  try {
    const database: string = process.env.DB!;
    await client.connect();
    const collection: Collection = client.db(database).collection("rooms");
    const response = await collection.insertOne({
      name: name,
      thread: [],
    });
    return response;
  } catch (error) {
    return error;
  } finally {
    client.close();
  }
};

export { createRoom };
