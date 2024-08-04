export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  email?: string;
  isFavourite?: boolean;
  contactType: string;
  userId: string;
  photo?: string;
  createdAt: string;
  updatedAt: string;
}
