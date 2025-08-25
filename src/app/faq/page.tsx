import { FaqClient } from "./FaqClient";

export default function FaqPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg md:text-xl">
            Have a question? We're here to help. Find answers to common
            questions below.
          </p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FaqClient />
        </div>
      </section>
    </div>
  );
}
