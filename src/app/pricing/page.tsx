"use client";

import { Header } from "@/components/layout/Header";
import { Pricing } from "@/components/sections/Pricing";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Pricing className="mt-12" />
    </main>
  );
}


