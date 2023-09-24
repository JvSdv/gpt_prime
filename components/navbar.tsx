"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { Sparkles } from "lucide-react";
import { Category } from "@prisma/client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";

const font = Poppins({ weight: "600", subsets: ["latin"] });

interface NavbarProps {
  categories: Category[];
}

export const Navbar = ({ categories }: NavbarProps) => {

  return ( 
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSidebar categories={categories} />
        <Link href="/">
          <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
            Gpt Prime
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button>
          Upgrade
          <Sparkles className="inline-block ml-2"/>
        </Button>
        <ModeToggle />
        <div className="grayscale">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}