"use client";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div className="flex items-center">
      <div className="space-y-3">
        <h2 className="text-xl font-bold">
          Hi, {user.name}. Welcome to your dashboard
        </h2>
        <p>
          You are {user.role === "admin" ? "an" : "a"} {user.role}. Navigate to
          the sidebar to perform actions.
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
