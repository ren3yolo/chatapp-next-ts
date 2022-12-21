import { MongoClient } from "mongodb";

const uri: string = process.env.MONGO_URI!;

const client: MongoClient = new MongoClient(uri);

export { client };
