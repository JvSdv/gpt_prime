"use client";

import { Menu } from "lucide-react";
import { Category } from "@prisma/client";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

interface MobileSidebarProps {
    categories: Category[];
}

export const MobileSidebar = ({ categories }: MobileSidebarProps) => {
    return(
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-secondary pt-10 w-fit">
                <Sidebar categories={categories} />
            </SheetContent>
        </Sheet>
    )
}