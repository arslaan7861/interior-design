import mongoose, { Schema, Document } from "mongoose";

export interface ITestimonial extends Document {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Client name is required"],
      trim: true,
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Testimonial content is required"],
    },
    rating: {
      type: Number,
      required: true,
      min: [1, "Minimum rating is 1"],
      max: [5, "Maximum rating is 5"],
    },
  },
  { timestamps: true }
);

export const TestimonialModel =
  mongoose.models.Testimonial ||
  mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
