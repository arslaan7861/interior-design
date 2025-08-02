import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { ItemDetails } from "../ItemDetails";
import { IFurniture } from "@/server/DB/FurnitureModel";
import { IndianRupee } from "lucide-react";

function FurnitureCard({ item }: { item: IFurniture }) {
  return (
    <Card className="overflow-hidden pt-0">
      <figure className="relative overflow-hidden">
        <div className="w-full h-64 object-cover relative transition-all duration-700 group-hover:scale-110 group-hover:rotate-1">
          <Image
            src={item.image_url || "/placeholder.svg"}
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
        <div className="flex justify-between flex-col items-start mb-2">
          <h3 className="text-xl font-semibold text-stone-800 group-hover:text-primary transition-colors duration-300">
            {item.name}
          </h3>
          <h4 className="text-xl flex items-center text-primary">
            <IndianRupee className="h-4 w-4" />
            {item.price}
            <p className="px-2 text-xs pt-2 line-through text-gray-400">
              {Math.floor(item.price * 1.2)}
            </p>
          </h4>
        </div>
        <Badge variant={"secondary"} className="text-stone-600 mb-4">
          {item.category}
        </Badge>
        <ItemDetails item={item} />
      </CardContent>
    </Card>
  );
}

export default FurnitureCard;
