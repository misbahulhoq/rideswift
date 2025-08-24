"use client";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const DriverDashboard = () => {
  const { user } = useAuth();
  console.log(user);
  return <div>DriverDashboard</div>;
};

export default DriverDashboard;
