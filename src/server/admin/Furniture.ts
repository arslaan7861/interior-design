"use server";

import { FurnitureFormData } from "@/components/admin/forms/AddFurnitureForm";
import { deleteFromCloudinary } from "@/lib/cloudinary";
import { FurnitureModel } from "../DB/FurnitureModel";
import connectDb from "../DB";
import { revalidatePath } from "next/cache";

export async function newFurnitureAction({
  category,
  files,
  name,
  price,
  description,
}: FurnitureFormData) {
  try {
    console.log({
      category,
      files,
      name,
      price,
      description,
    });

    await connectDb();
    await FurnitureModel.insertOne({
      category,
      name,
      price,
      description,
      files,
    });
    revalidatePath("/");
    return { message: "Added successfully", status: true };
  } catch (e) {
    console.log({ e });

    return { message: "Failed to upload", status: false };
  }
}

export async function deleteFurnitureAction({ _id }: { _id: string }) {
  try {
    await connectDb();
    const doc = await FurnitureModel.findById(_id);
    if (!doc) throw new Error("Item not found");

    // Delete images first
    await Promise.all(
      doc.files.map(({ public_id }: { public_id: string }) =>
        deleteFromCloudinary(public_id)
      )
    );

    // Delete DB item only if images were deleted
    await FurnitureModel.findByIdAndDelete(_id);
    return { message: "Deleted successfully", status: true };
  } catch (error) {
    console.log("error while deleting");
    console.log(error);

    return { message: "Failed to delete", status: false };
  }
}
