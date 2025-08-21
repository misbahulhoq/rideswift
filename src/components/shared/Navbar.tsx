import Link from "next/link";
import { CircleUser, Menu, Car } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { DialogTitle } from "@radix-ui/react-dialog";

const navLinks = [
  // { href: "#features", label: "Features" },
  // { href: "#how-it-works", label: "How It Works" },
  // { href: "#testimonials", label: "Testimonials" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-3">
        {/* Logo and Brand Name */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Car className="h-6 w-6" />
          <span className="inline-block font-bold">RideSwift</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden flex-1 items-center md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem
                key={link.href}
                className="flex items-center justify-center"
              >
                <Link
                  href={link.href}
                  className="hover:bg-accent block rounded-2xl px-3 py-1"
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-end space-x-4">
          {/* Desktop Sign In Button */}
          <Button className="hidden md:inline-flex">Sign In</Button>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="default" className="">
                  <Menu />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                <div className="grid gap-4 px-3 py-6">
                  {/* Mobile Logo */}
                  <Link href="/" className="flex items-center space-x-2 px-4">
                    <Car className="h-6 w-6" />
                    <span className="font-bold">RideSwift</span>
                  </Link>
                  {/* Mobile Nav Links */}
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:bg-accent flex items-center rounded-lg px-4 py-2 text-lg font-semibold"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <hr className="my-2" />
                  <SheetClose asChild>
                    <Link href="/login">
                      <Button className="w-full">Sign In</Button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
