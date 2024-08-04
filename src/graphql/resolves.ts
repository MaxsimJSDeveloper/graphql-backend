import {
  createContact,
  deleteContact,
  getAllContacts,
  getContact,
  updateContact,
} from "../controllers/contact";

export const resolvers = {
  getAllContacts: async (): Promise<any[]> => {
    return await getAllContacts();
  },
  getContact: async (parent: any, { id }: { id: string }): Promise<any> => {
    return await getContact(id);
  },

  createContact: async (
    parent: any,
    { input }: { input: any }
  ): Promise<any> => {
    return await createContact(input);
  },
  updateContact: async (
    parent: any,
    { id, input }: { id: string; input: any }
  ): Promise<any> => {
    return await updateContact(id, input);
  },
  deleteContact: async (parent: any, { id }: { id: string }): Promise<any> => {
    return await deleteContact(id);
  },
};
