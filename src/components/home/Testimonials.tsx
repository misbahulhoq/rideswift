// src/components/home/Testimonials.tsx

import React from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Rider",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    rating: 5,
    quote:
      "RideSwift is my go-to app for getting around the city. The drivers are always professional, and the app is so easy to use. I love the upfront pricing!",
  },
  {
    name: "John D.",
    role: "Driver",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    rating: 5,
    quote:
      "Driving with RideSwift has been a great experience. The flexible hours are perfect for me, and the driver support team is incredibly helpful.",
  },
  {
    name: "Emily R.",
    role: "Rider",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
    rating: 4,
    quote:
      "A reliable and affordable service. I always feel safe during my rides, which is the most important thing for me. Highly recommend it to everyone.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={20}
        className={
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }
      />
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section className="bg-muted py-12 md:py-24 lg:py-32" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by Riders and Drivers
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[700px] md:text-xl/relaxed">
            Here&apos;s what some of our users have to say about their
            experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col justify-between">
                <p className="text-muted-foreground mt-2">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-4">
                  <StarRating rating={testimonial.rating} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
