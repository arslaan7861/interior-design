"use server";

import { FurnitureFormData } from "@/components/admin/forms/AddFurnitureForm";
import { deleteFromCloudinary, uploadCloudinary } from "@/lib/cloudinary";
import { FurnitureModel } from "../DB/FurnitureModel";
import connectDb from "../DB";
import { revalidatePath } from "next/cache";

export async function newFurnitureAction({
  category,
  file,
  name,
  price,
  description,
}: FurnitureFormData) {
  try {
    console.log({
      category,
      file,
      name,
      price,
      description,
    });

    const { public_id, secure_url } = await uploadCloudinary(file);
    await connectDb();
    await FurnitureModel.insertOne({
      category,
      name,
      price,
      description,
      image_url: secure_url,
      image_public_id: public_id,
    });
    revalidatePath("/");
    return { message: "Added successfully", status: true };
  } catch {
    return { message: "Failed to upload", status: false };
  }
}

export async function deleteFurnitureAction({
  _id,
  publicId,
}: {
  _id: string;
  publicId: string;
}) {
  try {
    await connectDb();
    await deleteFromCloudinary(publicId);

    await FurnitureModel.findByIdAndDelete(_id);
    revalidatePath("/");
    revalidatePath("/item");
    console.log("Deleted furniture");

    return { message: "Deleted successfully", status: true };
  } catch (error) {
    console.log("error while deleting");
    console.log(error);

    return { message: "Failed to delete", status: false };
  }
}
