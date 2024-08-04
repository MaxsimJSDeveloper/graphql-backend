import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Contact {
    id: ID!
    name: String!
    phoneNumber: String!
    email: String
    isFavourite: Boolean
    contactType: String
    userId: ID!
    photo: String
    createdAt: String
    updatedAt: String
  }

  input ContactInput {
    name: String!
    phoneNumber: String!
    email: String
    isFavourite: Boolean
    contactType: String!
    userId: ID!
    photo: String
  }

  type Query {
    getContact(id: ID!): Contact
    getAllContacts: [Contact]
  }

  type Mutation {
    createContact(input: ContactInput): Contact
    updateContact(id: ID!, input: ContactInput): Contact
    deleteContact(id: ID!): Contact
  }
`);
