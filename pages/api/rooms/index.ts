import { NextApiRequest, NextApiResponse } from "next";
import { createRoom } from "../../../database/room";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { name }: { name: string } = req.body;
      const response = await createRoom({ name: name });
      if (response) {
        return res.status(200).send({ message: "ok" });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Something went wrong" });
  }
}
