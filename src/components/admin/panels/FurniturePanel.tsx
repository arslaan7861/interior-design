import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TabsContent } from "@/components/ui/tabs";

import { IndianRupee } from "lucide-react";
import AddFurnitureForm from "../forms/AddFurnitureForm";
import FurnitureFilterDropdown from "@/components/Global/FurnitureFilterDropdown";
import Image from "next/image";
import { FurnitureModel, IFurniture } from "@/server/DB/FurnitureModel";
import DeleteFurnitureButton from "../buttons/FurnitureDelete";
import connectDb from "@/server/DB";
import { ObjectId } from "mongoose";
import EmptyMessage from "./EmptyMessage";

async function FurniturePanel({ category }: { category: string }) {
  await connectDb();
  const extractedfurniture = await FurnitureModel.find()
    .sort({ createdAt: -1 })
    .lean();
  const furniture = (
    extractedfurniture.map(({ _id, createdAt, updatedAt, __v, ...rest }) => {
      return {
        ...rest,
        _id: (_id as ObjectId).toString(),
      };
      console.log(createdAt, updatedAt, __v);
    }) as IFurniture[]
  ).filter(
    (item) => category === "all" || item.category === category
  ) as IFurniture[];
  return (
    <TabsContent value="furniture" className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="w-full ">
          <h2 className="text-2xl font-bold text-stone-800">
            Furniture Management
          </h2>
          <p className="text-stone-600">
            Manage your furniture inventory and listings
          </p>
        </div>{" "}
        <div className="flex gap-2 w-full justify-between sm:justify-end ">
          <FurnitureFilterDropdown category={category} />
          <AddFurnitureForm />
        </div>
      </div>
      {furniture.length <= 0 ? (
        <EmptyMessage
          message={
            "No " +
            (category && category !== "all" ? category : "Furnitures") +
            " added yet"
          }
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {furniture.map((item) => (
            <Card
              key={item._id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate pt-0"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-64 relative transition-all duration-700 group-hover:scale-110 group-hover:rotate-1">
                  <Image
                    src={item.image_url || "/placeholder.svg"}
                    alt={item.name}
                    className="object-cover"
                    fill
                  />
                </div>
                {!item.isNew && (
                  <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90 animate-pulse">
                    New
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2 flex-col">
                  <h3 className="text-xl font-semibold text-stone-800 group-hover:text-primary transition-colors duration-300 flex justify-between relative w-full">
                    {item.name} <DeleteFurnitureButton item={item} />
                  </h3>
                  <h4 className="text-xl flex items-center text-primary">
                    <IndianRupee className="h-4 w-4" />
                    {item.price}
                    <p className="px-2 text-xs pt-2 line-through text-gray-400">
                      {Math.floor(item.price * 1.2)}
                    </p>
                  </h4>
                </div>
                <Badge variant={"secondary"}>{item.category}</Badge>
                <p className="text-stone-500 text-sm my-2 line-clamp-3">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </TabsContent>
  );
}

export default FurniturePanel;
