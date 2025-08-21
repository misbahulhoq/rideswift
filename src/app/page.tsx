import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="">
      <div>
        <Hero />
      </div>

      <div>
        <HowItWorks />
      </div>

      <div>
        <Features />
      </div>

      <div>
        <Testimonials />
      </div>
    </main>
  );
}
