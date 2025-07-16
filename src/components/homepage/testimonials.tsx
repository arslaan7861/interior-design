"use client";
import { testimonials } from "@/lib/dummydata";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Client Stories
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <p className="text-lg text-stone-700 mb-6 italic">
                        &quot;{testimonial.content}&quot;
                      </p>
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full mr-4 relative overflow-clip">
                          <Image
                            fill
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-stone-800">
                            {testimonial.name}
                          </h4>
                          <p className="text-stone-600 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-primary transition-colors duration-300"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-primary transition-colors duration-300"
          >
            <ChevronRight size={32} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-primary" : "bg-stone-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
