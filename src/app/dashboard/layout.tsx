// src/app/dashboard/layout.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";
import { RiderSidebar } from "./rider/RiderSidebar";
import { DashboardNavbar } from "./DashboardNav";

// Import other sidebars as you create them
// import { DriverSidebar } from "@/components/dashboard/DriverSidebar";
// import { AdminSidebar } from "@/components/dashboard/AdminSidebar";

const sidebars = {
  rider: <RiderSidebar />,
  // driver: <DriverSidebar />,
  // admin: <AdminSidebar />,
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { user, isLoading } = useAuth();
  const router = useRouter();
  const [activeSidebar, setActiveSidebar] = useState<React.ReactNode>(
    <RiderSidebar />,
  );

  // useEffect(() => {
  //   if (!isLoading && !user) {
  //     router.push("/login");
  //   }
  //   if (user) {
  //     // Set the active sidebar based on user role
  //     setActiveSidebar(sidebars[user.role as keyof typeof sidebars]);
  //   }
  // }, [user, isLoading, router]);

  // if (isLoading || !user) {
  //   return (
  //     <div className="flex h-screen w-full items-center justify-center">
  //       <Loader2 className="h-8 w-8 animate-spin" />
  //     </div>
  //   );
  // }

  return (
    <div className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Desktop Sidebar */}
      <div className="bg-muted/40 hidden border-r md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          {activeSidebar}
        </div>
      </div>

      <div className="flex flex-col">
        {/* Dashboard Navbar */}
        <DashboardNavbar
          user={{ name: "Rider", email: "lqg3Q@example.com" }}
          sidebar={activeSidebar}
        />
        {/* Main Content */}
        <main className="flex flex-1 flex-col gap-4 overflow-auto p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
