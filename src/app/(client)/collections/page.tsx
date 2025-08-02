import EmptyMessage from "@/components/admin/panels/EmptyMessage";
import FurnitureCard from "@/components/homepage/Cards/furnitureCard";
import { Button } from "@/components/ui/button";
import { productsCategories } from "@/lib/dummydata";
import connectDb from "@/server/DB";
import { FurnitureModel, IFurniture } from "@/server/DB/FurnitureModel";
import { ObjectId } from "mongoose";
import Link from "next/link";
import React from "react";
async function ItemsPage({
  searchParams,
}: {
  searchParams: Promise<{ selectedFilter?: string }>;
}) {
  await connectDb();
  const featuredFurniture = await FurnitureModel.find()
    .sort({ createdAt: -1 }) // Sort by newest first
    .limit(6)
    .lean();

  const furnitures = featuredFurniture.map(
    ({ _id, createdAt, updatedAt, __v, ...rest }) => {
      return {
        ...rest,
        _id: (_id as ObjectId).toString(),
      };
      console.log(createdAt, updatedAt, __v);
    }
  ) as IFurniture[];

  const params = await searchParams;
  const { selectedFilter = "All" } = params;

  const filteredItems =
    selectedFilter === "All"
      ? furnitures
      : furnitures.filter((item) => item.category === selectedFilter);
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
            <Link href={`/collections?selectedFilter=${category}`}>
              {category}
            </Link>
          </Button>
        ))}
      </div>
      {filteredItems.length <= 0 ? (
        <EmptyMessage
          message={
            "No " +
            (selectedFilter && selectedFilter !== "all"
              ? selectedFilter
              : "Furnitures") +
            " added yet"
          }
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <FurnitureCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
export default ItemsPage;
