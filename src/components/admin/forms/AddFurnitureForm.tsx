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
import { ImageIcon, Loader2, Plus, Trash2 } from "lucide-react";
import { newFurnitureAction } from "@/server/admin/Furniture";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { deleteFromCloudinary, uploadCloudinary } from "@/lib/cloudinary";
const cloudinaryUploadResponseSchema = z.object({
  public_id: z.string().min(1, "public_id is required"),
  secure_url: z.string().url("Invalid image URL"),
});
const furnitureSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.coerce
    .number({
      invalid_type_error: "Price must be a number",
    })
    .positive("Price must be a positive number"),
  description: z.string().optional(),
  files: z
    .array(cloudinaryUploadResponseSchema)
    .min(1, { message: "At least one image is required" }),
});
export type FurnitureFormData = z.infer<typeof furnitureSchema>;

export type CloudinaryUploadResponse = z.infer<
  typeof cloudinaryUploadResponseSchema
>;

function AddFurnitureForm() {
  const [isAddingFurniture, setIsAddingFurniture] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [previews, setPreviews] = useState<
    { loading: boolean; preview: string }[]
  >([{ loading: false, preview: "" }]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
  } = useForm<FurnitureFormData>({
    resolver: zodResolver(furnitureSchema),
    defaultValues: {
      category: "sofas",
      description: "asdasdas",
      name: "asdasdasad",
      price: 123123,
    },
  });
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviews((p) => {
        const prevs = [...p];
        prevs[i].loading = true;
        prevs[i].preview = url;
        console.log({ prevs });
        return [...prevs, { loading: false, preview: "" }];
      });
      const { public_id, secure_url } = await uploadCloudinary(file);
      const prevFiles = [...(watch("files") ?? [])];
      if (prevFiles[i]?.public_id)
        await deleteFromCloudinary(prevFiles[i].public_id);
      prevFiles[i] = { public_id, secure_url };
      setPreviews((p) => {
        const prevs = [...p];
        prevs[i].loading = false;
        prevs[i].preview = secure_url;
        console.log({ prevs });
        return [...prevs];
      });
      URL.revokeObjectURL(url);

      setValue("files", prevFiles);
      // Optional: cleanup old preview
    }
  };

  const handleFileDelete = async (i: number) => {
    try {
      const public_id = watch("files")[i]?.public_id;

      if (public_id) {
        await deleteFromCloudinary(public_id);
      }

      // remove file at index i
      setValue(
        "files",
        (watch("files") ?? []).filter((_, idx) => idx !== i)
      );

      setPreviews((p) => p.filter((_, idx) => idx !== i));
      if (previews.length == 0) setPreviews([{ loading: false, preview: "" }]);
      console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  };

  async function onSubmit(formData: FurnitureFormData) {
    try {
      setIsLoading(true);
      const { message, status } = await newFurnitureAction(formData);
      if (!status) return toast.error(message);
      toast.success(message);
      reset();
      setIsAddingFurniture(false);
      setPreviews([{ loading: false, preview: "" }]);
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
          <div className="flex flex-col  gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center w-full h-min gap-4 flex-wrap overflow-auto items-center">
              {previews.map(({ preview, loading }, i) => {
                console.log({ loading, preview });
                return (
                  <Label
                    key={i}
                    htmlFor={`file-${i}`}
                    className="aspect-video h-60 grow-0 relative rounded-2xl overflow-clip"
                  >
                    {preview ? (
                      <>
                        <Button
                          variant={"destructive"}
                          className=" top-2 right-2 absolute z-20"
                          type="button"
                          onClick={() => handleFileDelete(i)}
                        >
                          <Trash2 />
                        </Button>
                        {loading && (
                          <div className="absolute z-100 inset-0 bg-black/40 grid place-items-center">
                            <span className="h-8 rounded-full animate-spin aspect-square border-2 border-primary border-b-transparent"></span>
                          </div>
                        )}
                        <img
                          src={preview}
                          alt=""
                          className="object-cover absolute inset-0 h-full w-full"
                        />
                      </>
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
                            Supports: Images
                          </p>
                        </div>
                      </div>
                    )}
                    <Input
                      id={`file-${i}`}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, i)}
                    />
                  </Label>
                );
              })}

              {errors.files && (
                <p className="text-red-500 text-sm p-2">
                  {errors.files.message}
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
