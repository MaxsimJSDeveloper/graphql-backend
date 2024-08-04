// router.ts
import express from "express";
import { errorHandler } from "../middlewares/errorHandler";
import { graphqlMiddleware } from "../middlewares/graphql";

const router = express.Router();

router.use("/graphql", graphqlMiddleware);

router.use(errorHandler);

export default router;
