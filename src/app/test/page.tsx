import { featuredFurniture } from "@/lib/dummydata";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="h-full w-full flex items-center justify-center dark bg-background">
      <section className="h-1/2 w-2/3 relative bg-background overflow-clip">
        <div className="bg-background rounded-b-full w-[50%] z-10 top-[-12%] scale-x-[300%] aspect-video -translate-x-1/2 -translate-y-1/2 left-1/2 absolute "></div>
        <div className="bg-background rounded-t-full w-[50%] z-10 bottom-[-10%] scale-x-[300%] aspect-video -translate-x-1/2 translate-y-1/2 left-1/2 absolute"></div>
        <div className="h-full w-full flex gap-5 overflow-x-auto">
          {featuredFurniture.map((item) => (
            <article key={item.id} className="relative h-full w-64 shrink-0">
              <Image src={item.image} key={item.id} fill alt="asdsda" />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
