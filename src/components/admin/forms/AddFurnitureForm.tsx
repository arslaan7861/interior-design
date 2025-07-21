"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon, Loader2, Plus } from "lucide-react";
import { newFurnitureAction } from "@/server/admin/Furniture";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const furnitureSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.coerce
    .number({
      invalid_type_error: "Price must be a number",
    })
    .positive("Price must be a positive number"),
  description: z.string().optional(),
  file: z
    .custom<File>(
      (val) => {
        return val instanceof File;
      },
      {
        message: "Image is required",
      }
    )
    .refine((val) => val.size <= 20 * 1024 * 1024, {
      message: "Max size exceeded",
    }),
});
export type FurnitureFormData = z.infer<typeof furnitureSchema>;

function AddFurnitureForm() {
  const [isAddingFurniture, setIsAddingFurniture] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("file", file);
      const url = URL.createObjectURL(file);
      setPreview(url);
      // Optional: cleanup old preview
      return () => URL.revokeObjectURL(url);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FurnitureFormData>({
    resolver: zodResolver(furnitureSchema),
    defaultValues: {
      category: "sofas",
      description: "asdasdas",
      name: "asdasdasad",
      price: 123123,
    },
  });
  async function onSubmit(formData: FurnitureFormData) {
    try {
      setIsLoading(true);
      const { message, status } = await newFurnitureAction(formData);
      if (!status) return toast.error(message);
      toast.success(message);
      reset();
      setIsAddingFurniture(false);
      router.refresh();
    } catch {
      toast.error("Upload failed please try again");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isAddingFurniture} onOpenChange={setIsAddingFurniture}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Furniture
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[70%] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Furniture</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full aspect-video md:h-full">
              <Label
                htmlFor="file"
                className="aspect-video w-full md:h-full relative rounded-2xl overflow-clip"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt=""
                    className="object-cover absolute inset-0 h-full"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-4 text-center border-4 border-dashed rounded-2xl absolute inset-0">
                    <div className={`p-4 rounded-full bg-stone-100`}>
                      <ImageIcon className={`h-8 w-8 text-stone-500`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-stone-800">
                        Upload Image
                      </h3>
                      <p className="text-stone-600">Click to browse</p>
                      <p className="text-sm text-stone-500">
                        Supports: Image • Max size: 20MB
                      </p>
                    </div>
                  </div>
                )}
              </Label>
              <Input
                id="file"
                type="file"
                accept="image/*"
                {...register("file")}
                className="hidden"
                onChange={handleFileChange}
              />
              {errors.file && (
                <p className="text-red-500 text-sm p-2">
                  {errors.file.message}
                </p>
              )}
            </div>
            <div className="space-y-4 w-full">
              <div>
                <Label htmlFor="furniture-name">Name</Label>
                <Input
                  id="furniture-name"
                  {...register("name")}
                  placeholder="Furniture name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="furniture-category">Category</Label>
                <Select onValueChange={(value) => setValue("category", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sofas">Sofas</SelectItem>
                    <SelectItem value="Tables">Tables</SelectItem>
                    <SelectItem value="Chairs">Chairs</SelectItem>
                    <SelectItem value="Beds">Beds</SelectItem>
                    <SelectItem value="Storage">Storage</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-red-500 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="furniture-price">Price</Label>
                <Input
                  id="furniture-price"
                  {...register("price")}
                  placeholder="$0.00"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="furniture-description">Description</Label>
                <Textarea
                  id="furniture-description"
                  {...register("description")}
                  rows={4}
                />
              </div>
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" /> Adding Furniture
              </>
            ) : (
              <>Add Furniture</>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddFurnitureForm;
