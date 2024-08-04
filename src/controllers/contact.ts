import { ContactsCollection } from "../models/contacts";

export const createContact = async (input: any): Promise<any> => {
  const contact = new ContactsCollection(input);
  await contact.save();
  console.log("Contacts retrieved:", contact); // Лог для отладки
  return contact;
};

export const getAllContacts = async (): Promise<any[]> => {
  return await ContactsCollection.find();
};

export const getContact = async (id: string): Promise<any> => {
  return await ContactsCollection.findById(id);
};

export const updateContact = async (id: string, input: any): Promise<any> => {
  return await ContactsCollection.findByIdAndUpdate(id, input, { new: true });
};

export const deleteContact = async (id: string): Promise<any> => {
  return await ContactsCollection.findByIdAndRemove(id);
};
