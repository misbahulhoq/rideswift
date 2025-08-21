import { MapPin, UserCheck, Car } from "lucide-react";
import React from "react";

const steps = [
  {
    icon: <MapPin size={40} className="text-primary" />,
    title: "1. Request a Ride",
    description:
      "Enter your destination in the app and choose your ride type. See the fare upfront.",
  },
  {
    icon: <UserCheck size={40} className="text-primary" />,
    title: "2. Get Matched",
    description:
      "A nearby driver sees your request and accepts it. You’ll see their details and ETA.",
  },
  {
    icon: <Car size={40} className="text-primary" />,
    title: "3. Enjoy Your Trip",
    description:
      "Your driver arrives to pick you up. Sit back, relax, and enjoy a safe ride to your destination.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get a Ride in 3 Easy Steps
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Follow this simple process to book your next ride with RideSwift.
            It’s quick, efficient, and reliable.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-md"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
