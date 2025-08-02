"use client";
import { ITestimonial } from "@/server/DB/TestimonialModel";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function TestimonalCarousel({
  testimonials,
  children,
}: {
  testimonials: ITestimonial[];
  children: React.ReactNode;
}) {
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
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
        >
          {children}
        </div>
      </div>

      <button
        onClick={prevTestimonial}
        aria-label="Previous testimonial"
        className="absolute left-0 top-1/2 transform -translate-y-full text-stone-400 hover:text-primary transition-colors duration-300"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextTestimonial}
        aria-label="Next testimonial"
        className="absolute right-0 top-1/2 transform -translate-y-full text-stone-400 hover:text-primary transition-colors duration-300"
      >
        <ChevronRight size={32} />
      </button>

      <div
        className="flex justify-center mt-8 space-x-2"
        role="group"
        aria-label="Testimonial slide indicators"
      >
        {testimonials.map((_, index) => (
          <button
            key={index}
            aria-label={`Show testimonial ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentTestimonial ? "bg-primary" : "bg-stone-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonalCarousel;
