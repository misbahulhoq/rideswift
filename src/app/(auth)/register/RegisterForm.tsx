"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import Swal from "sweetalert2";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import PasswordInput from "@/components/originui/password-input";
import { useSignUpMutation } from "@/redux/features/auth/authApiSlice";
export type RegisterFormValues = z.infer<typeof formSchema>;

// Validation Schema
const formSchema = z
  .object({
    role: z.enum(["rider", "driver"], {
      error: "You need to select a role.",
    }),
    name: z.string().min(3, {
      message: "Full name must be at least 3 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),

    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine(
    (data: RegisterFormValues) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match.",
      path: ["confirmPassword"], // path of error
    },
  );

export function RegisterForm({ role }: { role: "rider" | "driver" }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: role || "rider", // Default role
      name: "",
      email: "",

      password: "",
      confirmPassword: "",
    },
  });
  const roleValue = form.watch("role");
  const router = useRouter();
  const [signUp, { isLoading }] = useSignUpMutation();
  useEffect(() => {
    router.push(`/register?role=${roleValue}`);
    console.log("too much renders?");
  }, [roleValue, router]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await signUp({
      email: values.email,
      password: values.password,
      role: values.role,
      name: values.name,
    })
      .unwrap()
      .then((res) => {
        if (res.success) {
          Swal.fire({
            icon: "success",
            title: "Signup Successfull",
            text: "Redirecting you to login page.",
          }).then(() => {
            router.push("/login");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Signup failed.",
            text: res.message,
          });
        }
      })
      .catch(console.error);
    console.log(values);
  }

  return (
    <Card className="mx-auto max-w-sm flex-1">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Create an account to start booking rides or driving with us.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Role Selection */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>I am a...</FormLabel>
                  <FormControl>
                    <Tabs
                      value={field.value}
                      onValueChange={field.onChange}
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="rider">Rider</TabsTrigger>
                        <TabsTrigger value="driver">Driver</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Full Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john.doe@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              Create an account
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
