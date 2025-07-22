"use server";
import { TestimonialFormData } from "@/components/admin/forms/AddTestimonialForm";
import { TestimonialModel } from "../DB/TestimonialModel";
import connectDb from "../DB";
import { revalidatePath } from "next/cache";

export async function AddTestimonial(formData: TestimonialFormData) {
  try {
    const newTestimonial = await TestimonialModel.insertOne(formData);
    revalidatePath("/");
    console.log({ newTestimonial });
    return { message: "Added successfully", status: true };
  } catch {
    return { message: "Failed to upload", status: false };
  }
}
export async function deleteTestimonialAction(id: string) {
  try {
    await connectDb();
    await TestimonialModel.findByIdAndDelete(id);
    revalidatePath("/");
    return { message: "Deleted successfully", status: true };
  } catch {
    console.log("error while deleting");
    return { message: "Failed to delete", status: false };
  }
}
