import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

import { Star } from "lucide-react";
import AddTestimonialForm from "../forms/AddTestimonialForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ITestimonial, TestimonialModel } from "@/server/DB/TestimonialModel";
import { ObjectId } from "mongoose";
import DeleteTestimonialButton from "../buttons/TestimonialDeleteButton";

async function TestimonialPanel() {
  const dBtestimonials = await TestimonialModel.find().lean();
  const testimonials = dBtestimonials.map(
    ({ _id, createdAt, updatedAt, __v, ...rest }) => {
      return {
        ...rest,
        _id: (_id as ObjectId).toString(),
      };
      console.log(createdAt, updatedAt, __v);
    }
  ) as ITestimonial[];

  return (
    <TabsContent value="testimonials" className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-stone-800">
            Testimonial Management
          </h2>
          <p className="text-stone-600">
            Manage client testimonials and reviews
          </p>
        </div>
        <AddTestimonialForm />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial._id} className="group">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 ">
                  <Avatar className="h-12 aspect-square w-12">
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-semibold text-stone-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-stone-600">{testimonial.role}</p>
                  </div>
                  <DeleteTestimonialButton item={testimonial} />
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-stone-300"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-sm text-stone-700 italic">
                  &quot;{testimonial.content}&quot;
                </blockquote>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
}

export default TestimonialPanel;
