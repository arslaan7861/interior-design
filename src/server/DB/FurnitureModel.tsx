import mongoose, { Schema, Document } from "mongoose";

export interface IFurniture extends Document {
  name: string;
  category: string;
  price: number;
  description?: string;
  image_url: string; // Cloudinary or other file storage URL
  image_public_id: string;
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
    image_url: {
      type: String,
      required: [true, "image URL is required"],
    },
    image_public_id: {
      type: String,
      required: [true, "image URL is required"],
    },
  },
  { timestamps: true }
);

export const FurnitureModel =
  mongoose.models.Furniture ||
  mongoose.model<IFurniture>("Furniture", FurnitureSchema);
