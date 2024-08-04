import { Resolvers } from "../../src/types";

export const resolvers: Resolvers = {
  Query: {
    getAllContacts: async (_, __, { db }) => {
      return await db.getAllContacts();
    },
    getContact: async (_, { id }, { db }) => {
      return await db.getContact(id);
    },
  },
  Mutation: {
    createContact: async (_, { input }, { db }) => {
      return await db.createContact(input);
    },
    updateContact: async (_, { id, input }, { db }) => {
      return await db.updateContact(id, input);
    },
    deleteContact: async (_, { id }, { db }) => {
      return await db.deleteContact(id);
    },
  },
};
