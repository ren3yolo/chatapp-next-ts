import { NextApiRequest, NextApiResponse } from "next";
import { loadConversationList } from "../../../database/messages";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    // @ts-ignore
    const rooms = await loadConversationList({ id });
    return res.status(200).send({ rooms: rooms });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("Something went wrong on our end. Please try again later.");
  }
}
