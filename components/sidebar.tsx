"use client";

import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Category } from "@prisma/client";

import { cn } from "@/lib/utils";
import { SearchInput } from "@/components/search-input";
import { Categories } from "@/components/categories";

interface SidebarProps {
  categories: Category[];
}

export const Sidebar = ({ categories }: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const onNavigate = (url: string) => {
    return router.push(url);
  }

  const routes = [
    {
      icon: Home,
      href: '/',
      label: "Home",
      pro: false,
    },
    {
      icon: Plus,
      href: '/companion/new',
      label: "Create",
      pro: true,
    },
    {
      icon: Settings,
      href: '/settings',
      label: "Settings",
      pro: false,
    },
  ];

  return (
    <div className="space-y-2 flex flex-col h-full text-primary bg-secondary w-10/12 p-3">
      <SearchInput />
      <Categories categories={categories} />
    </div>
  );
};