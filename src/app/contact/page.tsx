"use client";

import { Header } from "@/components/layout/Header";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactForm />
    </main>
  );
}

