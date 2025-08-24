import mongoose, { Schema, Document } from "mongoose";

export interface IFurniture extends Document {
  name: string;
  category: string;
  price: number;
  description?: string;
  files: {
    public_id: string;
    secure_url: string;
  }[];
  _id: string;
}

const FurnitureSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    files: [
      {
        _id:false,
        secure_url: {
          type: String,
          required: [true, "image URL is required"],
        },
        public_id: {
          type: String,
          required: [true, "image id is required"],
        },
      },
    ],
  },
  { timestamps: true }
);

export const FurnitureModel =
  mongoose.models.Furniture ||
  mongoose.model<IFurniture>("Furniture", FurnitureSchema);
