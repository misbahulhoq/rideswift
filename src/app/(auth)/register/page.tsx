"use client";
import React from "react";
import { RegisterForm } from "./RegisterForm";
import { useSearchParams } from "next/navigation";

const RegisterPage = () => {
  const searchParams = useSearchParams();
  return (
    <div className="container mx-auto px-3 md:px-6">
      <RegisterForm role={searchParams.get("role") as "rider" | "driver"} />
    </div>
  );
};

export default RegisterPage;
