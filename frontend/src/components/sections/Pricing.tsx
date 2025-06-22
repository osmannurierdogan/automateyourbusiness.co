"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Başlangıç",
    price: "4.999",
    description: "Küçük işletmeler için temel AI otomasyon çözümleri",
    features: [
      "Temel iş süreçleri otomasyonu",
      "E-posta ve doküman otomasyonu",
      "Basit chatbot entegrasyonu",
      "5 kullanıcıya kadar lisans",
      "E-posta desteği",
      "Aylık 1000 işlem",
    ],
    popular: false,
  },
  {
    name: "Profesyonel",
    price: "9.999",
    description: "Orta ölçekli işletmeler için gelişmiş otomasyon paketi",
    features: [
      "Gelişmiş iş süreçleri otomasyonu",
      "Doküman analizi ve işleme",
      "Özelleştirilmiş AI chatbot",
      "20 kullanıcıya kadar lisans",
      "7/24 öncelikli destek",
      "Aylık 5000 işlem",
      "API entegrasyonları",
      "Detaylı raporlama ve analiz",
    ],
    popular: true,
  },
  {
    name: "Kurumsal",
    price: "Özel Fiyat",
    description: "Büyük ölçekli işletmeler için özel çözümler",
    features: [
      "Tam kapsamlı süreç otomasyonu",
      "Özel AI model geliştirme",
      "Sınırsız chatbot ve entegrasyon",
      "Sınırsız kullanıcı lisansı",
      "Yerinde teknik destek",
      "Sınırsız işlem",
      "Özel API geliştirme",
      "Gelişmiş güvenlik önlemleri",
      "Özel eğitim ve danışmanlık",
    ],
    popular: false,
  },
];

interface PricingProps {
  className?: string;
}

export function Pricing({ className = "" }: PricingProps) {
  return (
    <section className={`container px-4 py-24 mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Fiyatlandırma Planları
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          İşletmenizin büyüklüğüne ve ihtiyaçlarına uygun planı seçin, AI ile
          işinizi büyütün.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              className={`relative h-full flex flex-col ${
                plan.popular ? "border-primary shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-primary hover:bg-primary">
                  Popüler
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="min-h-[48px]">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold">₺{plan.price}</span>
                  {plan.price !== "Özel Fiyat" && (
                    <span className="text-muted-foreground">/ay</span>
                  )}
                </div>
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular ? (
                    <>
                      Hemen Başlayın <Zap className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    "İletişime Geçin"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

