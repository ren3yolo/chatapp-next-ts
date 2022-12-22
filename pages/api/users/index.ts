import { NextApiRequest, NextApiResponse } from "next";

import { insertUser } from "../../../database/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const {
        name,
        email,
        password,
      }: { name: string; email: string; password: string } = req.body;
      await insertUser({ name, email, password });
      return res.status(200).send({ message: "ok" });
    }
  } catch (error) {
    return res.status(500).send({ message: "Something went wrong" });
  }
}
