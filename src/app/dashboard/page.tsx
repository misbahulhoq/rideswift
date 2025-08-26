"use client";
import { useAuth } from "@/hooks/useAuth";
import React from "react";
import { ProfileForm } from "./ProfileForm";

const DashboardHome = () => {
  const { user, vehicleInfo } = useAuth();
  console.log(vehicleInfo);
  if (!user) return null;
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-2 text-3xl font-bold">My Profile</h1>
      <p className="text-muted-foreground mb-8">
        Manage your account settings and personal information.
      </p>

      <ProfileForm user={user} vehicleInfo={vehicleInfo} />
    </div>
  );
};

export default DashboardHome;
