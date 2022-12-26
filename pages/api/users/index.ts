import { NextApiRequest, NextApiResponse } from "next";

import {
  insertUser,
  getUserWithEmail,
  UserType,
  GetUserByEmailResponse,
} from "../../../database/user";

export type ReqConfigUserLookup = {
  email: string;
};

export type ResDataUserLookup = {
  user: UserType;
};

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
    } else if (req.method === "GET") {
      const email: string | undefined = req.query.email as string;

      if (!email) {
        return res.status(403).send({ message: "Email is missing" });
      }

      //get user with this email, else get all users
      if (email) {
        const user: GetUserByEmailResponse | undefined = await getUserWithEmail(
          email
        );
        return res.status(200).send({
          user: user,
        });
      }
    }
  } catch (error) {
    return res.status(500).send({ message: "Something went wrong" });
  }
}
