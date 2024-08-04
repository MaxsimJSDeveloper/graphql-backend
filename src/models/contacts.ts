import { Document, Schema, model } from "mongoose";

export interface IContact extends Document {
  name: string;
  phoneNumber: string;
  email?: string;
  isFavourite: boolean;
  contactType: "home" | "personal";
  userId: Schema.Types.ObjectId;
  photo?: string;
}

export interface ContactDocument extends Document, IContact {
  createdAt: Date;
  updatedAt: Date;
}

const contactsSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "user@gmail.com",
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ["home", "personal"],
      required: true,
      default: "home",
    },
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    photo: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ContactsCollection = model<IContact>("contacts", contactsSchema);
