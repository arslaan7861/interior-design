"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { deleteFurnitureAction } from "@/server/admin/Furniture";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { IFurniture } from "@/server/DB/FurnitureModel";

function DeleteFurnitureButton({ item }: { item: IFurniture }) {
  const deleteFurniture = async (_id: string, publicId: string) => {
    try {
      toast.info("Deleting Furniture");
      await deleteFurnitureAction({ _id, publicId });
      toast.info("Deleted");
    } catch {}
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="destructive">
          <Trash2 className="h-3 w-3" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            {item.name}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant={"destructive"}
              onClick={() => deleteFurniture(item._id, item.image_public_id)}
            >
              Delete
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteFurnitureButton;
