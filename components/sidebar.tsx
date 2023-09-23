"use client";

import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { SearchInput } from "@/components/search-input";


export const Sidebar = () => {
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
      <SearchInput />
    </div>
  );
};