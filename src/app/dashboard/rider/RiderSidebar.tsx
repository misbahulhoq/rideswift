"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookText, History, User, Car } from "lucide-react";
import { cn } from "@/lib/utils";

const riderNavItems = [
  { href: "/dashboard/rider", label: "Book a Ride", icon: BookText },
  { href: "/dashboard/rider/history", label: "Ride History", icon: History },
  { href: "/dashboard/rider/profile", label: "Profile", icon: User },
];

export function RiderSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Car className="h-6 w-6" />
          <span className="">RideSwift</span>
        </Link>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium">
          {riderNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                pathname === item.href && "bg-muted text-primary", // Active link styling
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
