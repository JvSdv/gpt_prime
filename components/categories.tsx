"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Category } from "@prisma/client";
import { Plus } from "lucide-react";
import qs from "query-string";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";


interface CategoriesProps {
    categories: Category[];
}

export const Categories = ({ categories }: CategoriesProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const categoryId = searchParams.get("categoryId");

    const onSelect = (id: string) => {
      const query = { categoryId: id };
  
      const url = qs.stringifyUrl({
        url: window.location.href,
        query
      }, { skipNull: true, skipEmptyString: true });
  
      router.push(url);
    };

    return (
        <div className="flex items-center">
        <Select onValueChange={onSelect}>
            <SelectTrigger >
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="">
                       All
                    </SelectItem>
                    {categories.map((category) => (
                        <SelectItem 
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
        <Button className="ml-2 p-2 h-9">
            <Plus />
        </Button>
        </div>
    );
}