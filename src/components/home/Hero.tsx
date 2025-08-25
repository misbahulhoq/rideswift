import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex h-[90vh] min-h-[480px] w-full items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-[-1]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/ride-booking-illustration.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Content */}
      <div className="container px-4 text-center text-white md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Your Ride, Your Way, Right Away
          </h1>
          <p className="mt-4 text-lg text-white/75 md:text-xl">
            Request a ride, get picked up by a nearby driver, and enjoy a safe,
            affordable trip to your destination. Quick, easy, and reliable.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/dashboard/rider">
              <Button size="lg" className="w-full sm:w-auto">
                Book a Ride
              </Button>
            </Link>
            <Link href="/register?role=driver">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Become a Driver
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
