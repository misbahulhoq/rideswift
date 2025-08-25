"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useLogoutMutation } from "@/redux/features/auth/authApiSlice";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProfileDropDown = () => {
  const { user } = useAuth();
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = async () => {
    await logout()
      .unwrap()
      .then((res) => {
        if (res.success)
          Swal.fire({
            icon: "success",
            title: "Logout successful.",
            text: "Redirecting to home page.",
          });
        router.push("/");
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{user?.name || "My Account"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button onClick={handleLogout}>Logout</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropDown;
