"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useUpdateUserInfoMutation } from "@/redux/features/auth/authApiSlice";
import Swal from "sweetalert2";

// Define a user type based on our auth context
interface User {
  name: string;
  email: string;
  role: "rider" | "driver" | "admin";
  vehicleModel?: string;
  licensePlate?: string;
}

// Schema for updating profile information
const profileFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  // Driver-specific fields
  vehicleInfo: z.object({
    model: z.string().optional(),
    licensePlate: z.string().optional(),
  }),
});

// Schema for changing the password
const passwordFormSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required."),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New passwords do not match.",
    path: ["confirmPassword"],
  });

interface ProfileFormProps {
  user: User;
  vehicleInfo?: { model: string; licensePlate: string };
}

export function ProfileForm({ user, vehicleInfo }: ProfileFormProps) {
  // Form for profile details
  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user.name || "",
      vehicleInfo,
    },
  });

  // Form for password change
  const passwordForm = useForm<z.infer<typeof passwordFormSchema>>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();

  async function onProfileSubmit(values: z.infer<typeof profileFormSchema>) {
    await updateUserInfo(values)
      .unwrap()
      .then((res) => {
        if (res.success) {
          Swal.fire({
            icon: "success",
            title: "Info updated successfully.",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
        });
      });
  }

  function onPasswordSubmit(values: z.infer<typeof passwordFormSchema>) {
    console.log("Password Change:", values);
    alert("Password changed successfully! Check console for data.");
    passwordForm.reset();
  }

  return (
    <div className="grid gap-6">
      {/* Profile Information Card */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Update your personal details here. Your email address cannot be
            changed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...profileForm}>
            <form
              onSubmit={profileForm.handleSubmit(onProfileSubmit)}
              className="space-y-4"
            >
              <FormField
                control={profileForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input value={user.email} disabled />
              </FormItem>

              {/* Conditional Driver Fields */}
              {user.role === "driver" && (
                <>
                  <Separator />
                  <h3 className="text-muted-foreground pt-2 text-sm font-medium">
                    Vehicle Information
                  </h3>
                  <FormField
                    control={profileForm.control}
                    name="vehicleInfo.model"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vehicle Model</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Toyota Corolla"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={profileForm.control}
                    name="vehicleInfo.licensePlate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>License Plate</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., DHAKA-1234" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <Button type="submit">Update Profile</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Change Password Card */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            For your security, please do not share your password with anyone.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...passwordForm}>
            <form
              onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
              className="space-y-4"
            >
              <FormField
                control={passwordForm.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={passwordForm.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={passwordForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Change Password</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
