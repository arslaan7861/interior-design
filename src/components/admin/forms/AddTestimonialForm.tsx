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
import { Loader2, Plus } from "lucide-react";
import { AddTestimonial } from "@/server/admin/Testimonial";
import { toast } from "sonner";

const testimonialSchema = z.object({
  name: z.string().min(1, "Client name is required"),
  role: z.string().min(1, "Role is required"),
  content: z.string().min(1, "Testimonial content is required"),
  rating: z.coerce.number().min(1).max(5),
});

export type TestimonialFormData = z.infer<typeof testimonialSchema>;

function AddTestimonialForm() {
  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isLoading },
  } = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
  });
  async function onSubmit(formData: TestimonialFormData) {
    try {
      const { message, status } = await AddTestimonial(formData);
      if (!status) return toast.error(message);
      toast.success(message);
      reset();
      setIsAddingTestimonial(false);
    } catch {
      toast.error("Upload failed please try again");
    }
  }
  return (
    <Dialog
      open={isAddingTestimonial || isLoading}
      onOpenChange={setIsAddingTestimonial}
    >
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Testimonial
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Testimonial</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label className="mb-2" htmlFor="name">
              Client Name
            </Label>
            <Input id="name" {...register("name")} placeholder="Client name" />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label className="mb-2" htmlFor="role">
              Role/Title
            </Label>
            <Input
              id="role"
              {...register("role")}
              placeholder="e.g., Homeowner"
            />
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>

          <div>
            <Label className="mb-2" htmlFor="content">
              Testimonial Content
            </Label>
            <Textarea
              id="content"
              {...register("content")}
              placeholder="Client testimonial"
            />
            {errors.content && (
              <p className="text-sm text-red-500">{errors.content.message}</p>
            )}
          </div>

          <div>
            <Label className="mb-2" htmlFor="rating">
              Rating
            </Label>
            <Select
              onValueChange={(value) => setValue("rating", Number(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
            {errors.rating && (
              <p className="text-sm text-red-500">{errors.rating.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" /> Adding Testimonial
              </>
            ) : (
              <>Add Testimonial</>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddTestimonialForm;
