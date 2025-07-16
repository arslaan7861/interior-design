"use client";
import { categories, galleryItems } from "@/lib/dummydata";
import { Filter } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";

function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filteredGallery =
    selectedFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);
  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Design Gallery
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8">
            Explore our diverse portfolio of interior design styles
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 scroll-animate">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                onClick={() => setSelectedFilter(category)}
                className={`transition-all duration-300 transform hover:scale-105 ${
                  selectedFilter === category
                    ? "bg-primary hover:bg-primary/90 shadow-lg"
                    : "border-stone-300 text-stone-700 hover:border-primary hover:text-primary hover:shadow-md"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid group cursor-pointer scroll-animate"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
                <div className="w-full transition-all duration-700 group-hover:scale-110">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white backdrop-blur-sm"
                    >
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
