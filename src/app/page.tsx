import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";

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
    </main>
  );
}
