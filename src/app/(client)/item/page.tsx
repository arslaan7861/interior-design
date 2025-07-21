import { ItemDetails } from "@/components/homepage/ItemDetails";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuredFurniture, productsCategories } from "@/lib/dummydata";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function ItemsPage({
  searchParams,
}: {
  searchParams: Promise<{ selectedFilter?: string }>;
}) {
  const { selectedFilter = "All" } = await searchParams;
  const filteredItems =
    selectedFilter === "All"
      ? featuredFurniture
      : featuredFurniture.filter((item) => item.category === selectedFilter);
  return (
    <div className="h-full w-full pt-24 px-8">
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 scroll-animate">
        {productsCategories.map((category, index) => (
          <Button
            key={category}
            variant={selectedFilter === category ? "default" : "outline"}
            className={`transition-all duration-300 transform hover:scale-105 ${
              selectedFilter === category
                ? "bg-primary hover:bg-primary/90 shadow-lg"
                : "border-stone-300 text-stone-700 hover:border-primary hover:text-primary hover:shadow-md"
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
            asChild
          >
            <Link href={`/item?selectedFilter=${category}`}>{category}</Link>
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
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
  );
}
export default ItemsPage;
