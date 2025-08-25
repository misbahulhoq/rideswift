"use client";
import Link from "next/link";
import { Menu, Car, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import { ThemeToggler } from "@/components/shared/ThemeToggler";
import { DialogTitle } from "@radix-ui/react-dialog";
import ProfileDropDown from "@/components/shared/ProfileDropdown";

// Define the shape of the user prop
interface User {
  name: string;
  email: string;
}

interface DashboardNavbarProps {
  user: User | null;
  sidebar: React.ReactNode; // Prop to pass the specific sidebar component
}

export function DashboardNavbar({ sidebar }: DashboardNavbarProps) {
  return (
    <header className="bg-background sticky top-0 z-40 flex h-16 items-center gap-4 border-b px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Car className="h-6 w-6" />
          <span className="sr-only">RideSwift</span>
        </Link>
      </nav>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          {/* Pass the role-specific sidebar here */}
          <DialogTitle className="sr-only">Sidebar</DialogTitle>
          {sidebar}
        </SheetContent>
      </Sheet>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>

        <ThemeToggler />

        {/* User Profile Dropdown */}
        <ProfileDropDown />
      </div>
    </header>
  );
}
