"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter } from "next/navigation";

function FurnitureFilterDropdown({ category = "all" }: { category: string }) {
  const router = useRouter();
  return (
    <Select
      defaultValue={category}
      onValueChange={(val) => router.push(`/admin?category=${val}`)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={category} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        <SelectItem value="Sofas">Sofas</SelectItem>
        <SelectItem value="Tables">Tables</SelectItem>
        <SelectItem value="Chairs">Chairs</SelectItem>
        <SelectItem value="Beds">Beds</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default FurnitureFilterDropdown;
