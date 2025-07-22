"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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
import { toast } from "sonner";
import { newProjectAction } from "@/server/admin/Project";
import { useRouter } from "next/navigation";

export const projectSchema = z.object({
  name: z.string().min(1, "Name is required"),
  location: z.string().min(1, "Location is required"),
  description: z.string().min(1, "Description is required"),
  file: z
    .custom<File>(
      (val) => {
        return val instanceof File;
      },
      {
        message: "Image is required",
      }
    )
    .refine((val) => val.size <= 100 * 1024 * 1024, {
      message: "Max size exceeded",
    }),
});

export type ProjectFormData = z.infer<typeof projectSchema>;

function AddProjectForm() {
  const [isAddingFurniture, setIsAddingFurniture] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("file", file);
      const url = URL.createObjectURL(file);
      setPreview(url);
      console.log(url);
      // Optional: cleanup old preview
      return () => URL.revokeObjectURL(url);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      location: "",
      description: "",
    },
  });
  async function onSubmit(formData: ProjectFormData) {
    try {
      setIsLoading(true);
      const { message, status } = await newProjectAction(formData);
      if (!status) return toast.error(message);
      toast.success(message);
      reset();
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
          Add Project
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[70%] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
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
                    className="object-cover absolute inset-0 h-full w-full"
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
                <Label className="mb-2" htmlFor="project-name">
                  Name
                </Label>
                <Input
                  id="project-name"
                  {...register("name")}
                  placeholder="Project name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label className="mb-2" htmlFor="project-location">
                  Location
                </Label>
                <Input
                  id="project-location"
                  {...register("location")}
                  placeholder="Location"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="mb-2" htmlFor="project-description">
                  Description
                </Label>
                <Textarea
                  id="project-description"
                  {...register("description")}
                  rows={4}
                />
              </div>
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" /> Adding Project
              </>
            ) : (
              <>Add Project</>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddProjectForm;
