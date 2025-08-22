// src/components/dashboard/rider/RideRequestForm.tsx
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, DollarSign } from "lucide-react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

// Validation Schema
const formSchema = z.object({
  pickupLocation: z.string().min(3, {
    message: "Pickup location must be at least 3 characters.",
  }),
  destination: z.string().min(3, {
    message: "Destination must be at least 3 characters.",
  }),
  paymentMethod: z.enum(["cash", "card"], {
    error: "Please select a payment method.",
  }),
});

export function RideRequestForm() {
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pickupLocation: "",
      destination: "",
    },
  });

  // Watch for changes in pickup and destination fields
  const pickupLocation = form.watch("pickupLocation");
  const destination = form.watch("destination");

  // Effect to calculate fare when both fields are valid
  useEffect(() => {
    if (pickupLocation.length >= 3 && destination.length >= 3) {
      setIsCalculating(true);
      // Simulate an API call for fare estimation
      const timer = setTimeout(() => {
        const fare = Math.floor(Math.random() * (50 - 10 + 1)) + 10; // Random fare between $10 and $50
        setEstimatedFare(fare);
        setIsCalculating(false);
      }, 1000); // 1-second delay

      return () => clearTimeout(timer);
    } else {
      setEstimatedFare(null);
    }
  }, [pickupLocation, destination]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const finalData = { ...values, estimatedFare };
    console.log(finalData);
    alert("Ride requested successfully! Check the console for the form data.");
  }

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle>Request a Ride</CardTitle>
        <CardDescription>
          Enter your pickup and destination details to get a fare estimate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {/* Pickup Location */}
              <FormField
                control={form.control}
                name="pickupLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pickup Location</FormLabel>
                    <div className="relative">
                      <MapPin className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                      <FormControl>
                        <Input
                          placeholder="Enter pickup address"
                          {...field}
                          className="pl-10"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Destination */}
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Destination</FormLabel>
                    <div className="relative">
                      <MapPin className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                      <FormControl>
                        <Input
                          placeholder="Enter destination address"
                          {...field}
                          className="pl-10"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Payment Method */}
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a payment method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="card">Credit/Debit Card</SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator />

            {/* Fare Estimation */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Fare Estimate</h3>
              <div className="bg-muted flex items-center justify-between rounded-md p-3">
                <span className="text-muted-foreground">Estimated Fare</span>
                {isCalculating ? (
                  <span className="text-sm">Calculating...</span>
                ) : estimatedFare !== null ? (
                  <span className="text-lg font-bold">
                    ${estimatedFare.toFixed(2)}
                  </span>
                ) : (
                  <span className="text-muted-foreground text-sm">--</span>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={!estimatedFare}>
              Request Ride
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
