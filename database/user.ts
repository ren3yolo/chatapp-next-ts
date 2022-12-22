import { Collection } from "mongodb";
import { client } from "./connection";
import bcrypt from "bcryptjs";

export type UserType = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  sso_provider?: string;
};

const insertUser = async ({
  name,
  email,
  password,
  sso_provider = "",
}: UserType) => {
  try {
    const database: string = process.env.DB!;
    await client.connect();
    const collection: Collection = client.db(database).collection("users");
    const hashedPassword: string = bcrypt.hashSync(password);
    const response = await collection.insertOne({
      name: name,
      email: email,
      password: hashedPassword,
      sso_provider: sso_provider,
    });
    console.log(`Updated ${response.insertedId.toString()}`);
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  } finally {
    client.close();
  }
};

export { insertUser };
