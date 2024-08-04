import mongoose from "mongoose";
import { env } from "../utils/env";

export const initMongoDB = async (): Promise<void> => {
  try {
    const user: string = env("MONGODB_USER");
    const pwd: string = env("MONGODB_PASSWORD");
    const url: string = env("MONGODB_URL");
    const db: string = env("MONGODB_DB");

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`
    );
    console.log("Mongo connection successfully established!");
  } catch (e) {
    console.error(
      "Error while setting up mongo connection",
      e instanceof Error ? e.message : e
    );
    throw e;
  }
};
