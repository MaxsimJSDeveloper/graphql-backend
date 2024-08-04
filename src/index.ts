import express, { Express, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import { initMongoDB } from "./db/initMongoDB";
import { env } from "./utils/env";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import graphqlRouter from "./routes/graphql";

const app: Express = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

initMongoDB();

app.use("/api", graphqlRouter);

app.use("*", notFoundHandler);

const PORT = Number(env("PORT", "3000"));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
