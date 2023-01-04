import { NextApiRequest, NextApiResponse } from "next";
import { createRoom } from "../../../database/room";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const {
        name,
        users,
      }: { name: string; users: Array<{ email: string; name: string }> } =
        req.body;
      const response = await createRoom({ name: name, users: users });
      if (response) {
        return res.status(200).send({ message: "ok" });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Something went wrong" });
  }
}
