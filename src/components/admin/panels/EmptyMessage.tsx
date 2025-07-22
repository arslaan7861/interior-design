import { ArchiveX } from "lucide-react";
import React from "react";

function EmptyMessage({ message }: { message: string }) {
  return (
    <div className=" w-full text-stone-400 bg-secondary rounded-2xl shadow py-6 flex flex-col gap-4 items-center justify-center">
      <ArchiveX className="h-12 w-12" />
      <h4 className="font-semibold text-xl capitalize">{message}</h4>
    </div>
  );
}

export default EmptyMessage;
