import TestimonalCarousel from "./TestimonalCarousel";
import { ITestimonial } from "@/server/DB/TestimonialModel";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Star } from "lucide-react";

async function Testimonials({
  testimonials,
}: {
  testimonials: ITestimonial[];
}) {
  return (
    <section className="py-20 bg-white" aria-label="Client Testimonials">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Client Stories
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience
          </p>
        </header>

        <TestimonalCarousel testimonials={testimonials}>
          <>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial._id}
                className="w-full flex-shrink-0 px-8 flex flex-col justify-center"
              >
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
                          <h3 className="font-semibold text-stone-800 break-all">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-stone-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <blockquote className="text-sm text-stone-700 italic">
                        &quot;{testimonial.content}&quot;
                      </blockquote>
                    </div>{" "}
                    <div className="flex items-center justify-center md:justify-start py-4 space-x-1">
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
                  </CardContent>
                </Card>
              </div>
            ))}
          </>
        </TestimonalCarousel>
      </div>
    </section>
  );
}

export default Testimonials;
