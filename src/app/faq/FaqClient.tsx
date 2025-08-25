"use client";

import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

type FaqItem = {
  question: string;
  answer: string;
  category: "Rider" | "Driver" | "General";
};

// A list of frequently asked questions
const faqList: FaqItem[] = [
  {
    question: "How do I request a ride?",
    answer:
      "Open the app, enter your destination in the 'Where to?' box, confirm your pickup location, and tap 'Confirm Ride'. We'll find a nearby driver for you.",
    category: "Rider",
  },
  {
    question: "Can I schedule a ride in advance?",
    answer:
      "Yes! You can schedule a ride up to 30 days in advance. Simply tap the 'Schedule' option next to the 'Confirm Ride' button and set your desired pickup time and date.",
    category: "Rider",
  },
  {
    question: "How is the fare calculated?",
    answer:
      "Fares are calculated based on a combination of base fare, distance, and time. Dynamic pricing may apply during times of high demand to ensure reliability.",
    category: "General",
  },
  {
    question: "What are the requirements to become a driver?",
    answer:
      "To become a driver, you must meet the minimum age requirement for your city, have a valid driver's license, provide proof of vehicle registration and insurance, and pass a background check.",
    category: "Driver",
  },
  {
    question: "How do I get paid?",
    answer:
      "Earnings are transferred to your linked bank account weekly. You can track your earnings in real-time through the driver dashboard in the app.",
    category: "Driver",
  },
  {
    question: "What safety features are in place?",
    answer:
      "Your safety is our priority. Features include live GPS tracking of every ride, an in-app emergency SOS button, driver and rider ratings, and a 24/7 support team.",
    category: "General",
  },
];

export function FaqClient() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) return faqList;

    return faqList.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  // Group FAQs by category
  const groupedFaqs = filteredFaqs.reduce(
    (acc, faq) => {
      (acc[faq.category] = acc[faq.category] || []).push(faq);
      return acc;
    },
    {} as Record<FaqItem["category"], FaqItem[]>,
  );

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="mx-auto w-full max-w-xl">
        <Input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-lg"
        />
      </div>

      {/* Accordion List */}
      {Object.entries(groupedFaqs).length > 0 ? (
        Object.entries(groupedFaqs).map(([category, faqs]) => (
          <div key={category}>
            <h2 className="mb-4 text-2xl font-bold">{category}</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))
      ) : (
        <p className="text-muted-foreground text-center">No questions found.</p>
      )}
    </div>
  );
}
