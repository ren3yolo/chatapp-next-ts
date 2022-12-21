import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../database/connection";

async function connect() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to database");
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connect();
  return res.status(200).send({ message: "ok" });
}
