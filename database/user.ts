import { Collection } from "mongodb";
import { client } from "./connection";
import bcrypt from "bcryptjs";

export interface UserType {
  _id: string;
  id: string;
  name: string;
  email: string;
  password: string;
  sso_provider?: string;
}

type UserAuthType = {
  email: string;
  password: string;
  name: string;
  sso_provider?: string;
};

export interface GetUserByEmailResponse {
  email: string;
  name: string;
  _id: string;
}

const insertUser = async ({
  name,
  email,
  password,
  sso_provider = "",
}: UserAuthType) => {
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

async function authorizeUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await client.connect();
    const database: string = process.env.DB!;
    const collection: Collection = client.db(database).collection("users");
    const user = (await collection.findOne({
      email: email,
    })) as unknown as UserType;
    if (user) {
      const isValidPassword: boolean = bcrypt.compareSync(
        password,
        user.password
      );
      if (isValidPassword) {
        user.id = user._id;
        return user;
      }
    }
    return undefined;
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  } finally {
    client.close();
  }
}

async function getUserWithEmail(email: string) {
  try {
    await client.connect();
    const database: string = process.env.DB!;
    const collection: Collection = client.db(database).collection("users");
    const user: UserType = (await collection.findOne({
      email: email,
    })) as unknown as UserType;
    if (user) {
      const response: GetUserByEmailResponse = {
        email: user.email,
        name: user.name,
        _id: user._id,
      };
      return response;
    }
    return undefined;
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  } finally {
    client.close();
  }
}

export { insertUser, authorizeUser, getUserWithEmail };
