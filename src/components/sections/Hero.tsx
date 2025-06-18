"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-slate-800 dark:via-slate-950 dark:to-slate-800 opacity-80" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              AI ile İşinizi{" "}
              <span className="text-primary">Otomatikleştirin</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Yapay zeka destekli otomasyon çözümlerimizle işinizi geleceğe
              taşıyın. İş süreçlerinizi optimize edin, verimliliğinizi artırın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Hemen Başlayın <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Demo İzleyin <Zap className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-lg bg-card border"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Akıllı Otomasyon",
    description:
      "İş süreçlerinizi yapay zeka ile otomatikleştirerek zaman ve maliyetten tasarruf edin.",
  },
  {
    title: "Veri Analizi",
    description:
      "Gelişmiş AI algoritmaları ile verilerinizi analiz ederek değerli içgörüler elde edin.",
  },
  {
    title: "7/24 Destek",
    description:
      "Uzman ekibimiz ve AI destekli destek sistemimiz ile her zaman yanınızdayız.",
  },
];

