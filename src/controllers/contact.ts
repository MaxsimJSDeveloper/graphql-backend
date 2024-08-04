import { ContactsCollection } from "../models/contacts.js";
import { Contact, ContactInput } from "../../src/types";

export const createContact = async (input: ContactInput) => {
  const contact = new ContactsCollection(input);
  await contact.save();
  return contact;
};

export const getAllContacts = async (): Promise<Contact[]> => {
  return await ContactsCollection.find();
};

export const getContact = async (id: string): Promise<Contact | null> => {
  return await ContactsCollection.findById(id);
};

export const updateContact = async (
  id: string,
  input: ContactInput
): Promise<Contact | null> => {
  return await ContactsCollection.findByIdAndUpdate(id, input, { new: true });
};

export const deleteContact = async (id: string): Promise<Contact | null> => {
  return await ContactsCollection.findByIdAndRemove(id);
};
