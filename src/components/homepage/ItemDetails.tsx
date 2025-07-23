import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { IndianRupee } from "lucide-react";
import { IFurniture } from "@/server/DB/FurnitureModel";
export interface furnitureItemType {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew: boolean;
  description: string;
}

export function ItemDetails({ item }: { item: IFurniture }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-stone-800 hover:bg-primary transition-all duration-300 transform hover:scale-105">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            <div className="w-full relative sm:h-48 flex flex-col sm:flex-row items-center gap-4">
              <section className="relative h-32 sm:h-full aspect-video  sm:aspect-square overflow-clip rounded-sm">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  fill
                  className="shadow-sm object-cover"
                />
              </section>
              <article className="grow sm:h-full p-4 gap-2  flex flex-col text-left">
                <h3 className="sm:text-2xl">{item.name}</h3>
                <article className="flex gap-1 flex-wrap">
                  <Badge variant={"secondary"}>{item.category}</Badge>
                  <Badge variant={"secondary"}>{item.category}</Badge>
                </article>

                <h4 className="text-xl flex items-center">
                  <IndianRupee className="h-4" />
                  {item.price}
                  <p className="px-2 text-xs pt-2 line-through text-gray-400">
                    {Math.floor(item.price * 1.2)}
                  </p>
                </h4>
                <DialogDescription> {item.description}</DialogDescription>
              </article>
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button className="w-full">Place order</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
