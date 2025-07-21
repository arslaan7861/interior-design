"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

import { Edit, Trash2, Star } from "lucide-react";
import AddTestimonialForm from "../forms/AddTestimonialForm";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  isApproved: boolean;
  createdAt: string;
}

function TestimonialPanel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "The team transformed our space beyond our wildest dreams.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      isApproved: true,
      createdAt: "2024-01-18",
    },
  ]);

  const deleteTestimonial = (id: number) => {
    setTestimonials(testimonials.filter((item) => item.id !== id));
  };

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
          <Card key={testimonial.id} className="group">
            <CardContent className="p-4">
              <div className="relative">
                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-1">
                    <Button size="sm" variant="secondary">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteTestimonial(testimonial.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-stone-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-stone-600">{testimonial.role}</p>
                  </div>
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
