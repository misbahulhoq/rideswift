// src/components/home/Cta.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, ShipWheel } from "lucide-react";

export function Cta() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[700px] md:text-xl/relaxed">
            Join thousands of satisfied riders and drivers. Sign up today and
            experience the future of transportation.
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Rider CTA Card */}
          <div className="bg-card flex flex-col items-center rounded-lg p-8 text-center shadow-md">
            <User size={48} className="text-primary mb-4" />
            <h3 className="mb-2 text-2xl font-bold">Become a Rider</h3>
            <p className="text-muted-foreground mb-6">
              Sign up in minutes to get a safe, reliable ride anytime, anywhere.
              Your journey is just a tap away.
            </p>
            <Link href="/register?role=rider">
              <Button size="lg">Sign Up to Ride</Button>
            </Link>
          </div>

          {/* Driver CTA Card */}
          <div className="bg-card flex flex-col items-center rounded-lg p-8 text-center shadow-md">
            <ShipWheel size={48} className="text-primary mb-4" />
            <h3 className="mb-2 text-2xl font-bold">Become a Driver</h3>
            <p className="text-muted-foreground mb-6">
              Earn money on your schedule. Enjoy the flexibility of being your
              own boss and start driving with us today.
            </p>
            <Link href="/register?role=driver">
              <Button size="lg" variant="secondary">
                Apply to Drive
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
