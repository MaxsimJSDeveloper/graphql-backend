import { RequestHandler } from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "../graphql/schema";
import { resolvers } from "../graphql/resolves";

export const graphqlMiddleware: RequestHandler = graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
  customFormatErrorFn: (error) => {
    return new Error("An error occurred");
  },
});
