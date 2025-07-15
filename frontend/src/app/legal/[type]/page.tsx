"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { useLegalStore } from "@/lib/store/legal";
import { notFound } from "next/navigation";

type LegalType = "privacy" | "terms" | "kvkk" | "cookies";

export default function LegalPage() {
  const params = useParams();
  const type = params.type as LegalType;
  const getCurrentContent = useLegalStore((state) => state.getCurrentContent);

  // Check if the legal type is valid
  if (!["privacy", "terms", "kvkk", "cookies"].includes(type)) {
    notFound();
  }

  const content = getCurrentContent(type);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">{content.title}</h1>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {content.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 
 