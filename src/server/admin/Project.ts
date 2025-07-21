"use server";

import { ProjectFormData } from "@/components/admin/forms/AddProjectForm";
import { deleteFromCloudinary, uploadCloudinary } from "@/lib/cloudinary";
import connectDb from "../DB";
import { ProjectModel } from "../DB/ProjectModel";
import { revalidatePath } from "next/cache";

export async function newProjectAction({
  description,
  file,
  location,
  name,
}: ProjectFormData) {
  try {
    const uploadRes = await uploadCloudinary(file);
    await connectDb();
    const newProject = await ProjectModel.insertOne({
      description,
      location,
      name,
      video_public_id: uploadRes.public_id,
      video_url: uploadRes.secure_url,
    });
    console.log({ newProject });
    revalidatePath("/");
    return { message: "Added successfully", status: true };
  } catch (error) {
    console.log(error);
    return { message: "Failed to upload", status: false };
  }
}
export async function deleteProject({
  id,
  publicId,
}: {
  id: string;
  publicId: string;
}) {
  try {
    await connectDb();
    await deleteFromCloudinary(publicId);
    await ProjectModel.findByIdAndDelete(id);
    revalidatePath("/");
    console.log("Deleted project successfully");
    return { message: "Deleted successfully", status: true };
  } catch {
    console.log("error while deleting");
    return { message: "Failed to delete", status: false };
  }
}
