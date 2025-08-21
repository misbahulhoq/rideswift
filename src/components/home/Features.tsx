import { Clock, ShieldCheck, DollarSign, Car } from "lucide-react";
import React from "react";

const features = [
  {
    icon: <Clock size={48} className="text-primary" />,
    title: "24/7 Availability",
    description:
      "No matter the time of day or night, a ride is always just a few taps away. We're here for you around the clock.",
  },
  {
    icon: <ShieldCheck size={48} className="text-primary" />,
    title: "Safety First",
    description:
      "Your safety is our priority. We've integrated features like live tracking, an SOS button, and verified drivers.",
  },
  {
    icon: <DollarSign size={48} className="text-primary" />,
    title: "Transparent Pricing",
    description:
      "Know your fare before you book. Our upfront pricing means no surprises or hidden fees. What you see is what you pay.",
  },
  {
    icon: <Car size={48} className="text-primary" />,
    title: "Multiple Vehicle Options",
    description:
      "From budget-friendly sedans to spacious SUVs, choose the vehicle that best fits your needs and group size.",
  },
];

export function Features() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose RideSwift?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer more than just a ride. We provide a safe, reliable, and
            convenient experience from start to finish.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
