import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";
import SignIn from "../app/(auth)/signIn";

export const config = {
  endpoint: "http://192.168.1.63/v1",
  platform: "com.jsm.cantfind",
  projectId: "667aa8c600297f1b29db",
  databaseId: "667aa9150027c029273f",
  userCollectionId: "667aa9200008687f5f36",
  videoCollectionId: "667aa97e0004d29b0eeb",
  storageId: "667aac41000af0eaea00",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    console.log("Hewlo");

    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username);

    await SignIn(email, password);
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}
