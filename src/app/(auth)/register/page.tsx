"use client";
import React from "react";
import { RegisterForm } from "./RegisterForm";
import { useSearchParams } from "next/navigation";

const RegisterPage = () => {
  const searchParams = useSearchParams();
  return (
    <div className="container mx-auto flex min-h-[85vh] items-center justify-center px-3 md:px-6">
      <RegisterForm role={searchParams.get("role") as "rider" | "driver"} />
    </div>
  );
};

export default RegisterPage;
