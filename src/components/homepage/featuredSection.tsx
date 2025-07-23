import React from "react";
import { Button } from "../ui/button";

import Link from "next/link";
import FurnitureCard from "./Cards/furnitureCard";
import { IFurniture } from "@/server/DB/FurnitureModel";

async function FeaturedSection({ furnitures }: { furnitures: IFurniture[] }) {
  return (
    <section
      id="collections"
      className="py-20"
      aria-label="Featured furniture collection"
    >
      <div className="container mx-auto px-6">
        <header className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium furniture pieces that
            define luxury living
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {furnitures.map((item) => (
            <article
              key={item._id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate"
              aria-label={`Featured item: ${item.name}`}
            >
              <FurnitureCard item={item} />
              {/* <Card className="overflow-hidden">
                <figure className="relative overflow-hidden">
                  <div className="w-full h-64 object-cover relative transition-all duration-700 group-hover:scale-110 group-hover:rotate-1">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                    />
                  </div>

                  <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90 animate-pulse">
                    New
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <figcaption className="sr-only">
                    {item.name} - {item.category}
                  </figcaption>
                </figure>

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
              </Card> */}
            </article>
          ))}
        </div>

        <div className="w-full flex justify-center mt-10">
          <Button
            variant={"default"}
            asChild
            size={"lg"}
            className="text-lg"
            aria-label="See more furniture items"
          >
            <Link href={"/item"}>See More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
