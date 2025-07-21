import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { featuredFurniture } from "@/lib/dummydata";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ItemDetails } from "./ItemDetails";

function FeaturedSection() {
  return (
    <section id="collections" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium furniture pieces that
            define luxury living
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFurniture.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-64 object-cover relative transition-all duration-700 group-hover:scale-110 group-hover:rotate-1">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                  />
                </div>
                {!item.isNew && (
                  <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90 animate-pulse">
                    New
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button
                    size="sm"
                    className="bg-white text-stone-800 hover:bg-primary hover:text-white"
                  >
                    Quick View
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-stone-800 group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-primary transform group-hover:scale-110 transition-transform duration-300">
                    {item.price}
                  </span>
                </div>
                <p className="text-stone-600 mb-4">{item.category}</p>
                <ItemDetails item={item} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <article className="w-full flex justify-center">
        <Button
          variant={"default"}
          asChild
          size={"lg"}
          className="text-lg mt-5"
        >
          <Link href={"/item"}>See More</Link>
        </Button>
      </article>
    </section>
  );
}

export default FeaturedSection;
