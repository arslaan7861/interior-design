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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { IndianRupee } from "lucide-react";
import { IFurniture } from "@/server/DB/FurnitureModel";
import DeleteFurnitureButton from "../admin/buttons/FurnitureDelete";
export interface furnitureItemType {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew: boolean;
  description: string;
}

export function ItemDetails({
  item,
  admin,
}: {
  item: IFurniture;
  admin?: boolean;
}) {
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
            <div className="w-full max-w-full relative sm:h-min flex flex-col items-center gap-4">
              <Carousel
                opts={{ align: "end", loop: true }}
                className="w-full max-w-md"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <section className="relative h-60 w-full overflow-clip rounded-sm">
                        <Image
                          src={item.files[0].secure_url}
                          alt={item.name}
                          fill
                          className="shadow-sm object-cover"
                        />
                      </section>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <article className="grow sm:h-full w-full p-4 gap-2  flex flex-col text-left">
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
                <DialogDescription className="h-min">
                  {item.description}
                </DialogDescription>
              </article>
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          {!admin ? (
            <a href="tel:+918699062901" className="grow">
              <Button className="w-full">Place order</Button>
            </a>
          ) : (
            <DeleteFurnitureButton item={item} className="grow">
              Delete
            </DeleteFurnitureButton>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
