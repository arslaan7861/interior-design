// models/Project.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  location: string;
  description: string;
  video_url: string; // Cloudinary or other file storage URL
  video_public_id: string;
}

const ProjectSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    video_url: {
      type: String,
      required: [true, "Video URL is required"],
    },
    video_public_id: {
      type: String,
      required: [true, "Video URL is required"],
    },
  },
  { timestamps: true }
);

// Prevent model overwrite in dev
export const ProjectModel =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
