"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Truck,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Kurumsal İşletmeler",
    description:
      "Büyük ölçekli işletmeler için uçtan uca AI otomasyon çözümleri.",
    icon: Building2,
    benefits: [
      "İş süreçlerinin otomasyonu",
      "Veri analizi ve raporlama",
      "Doküman işleme ve yönetimi",
      "Müşteri hizmetleri otomasyonu",
    ],
  },
  {
    title: "E-ticaret",
    description: "Online satış platformları için akıllı otomasyon sistemleri.",
    icon: ShoppingBag,
    benefits: [
      "Stok yönetimi otomasyonu",
      "Dinamik fiyatlandırma",
      "Müşteri davranış analizi",
      "Chatbot entegrasyonu",
    ],
  },
  {
    title: "Sağlık Sektörü",
    description: "Sağlık kuruluşları için özel AI destekli çözümler.",
    icon: Stethoscope,
    benefits: [
      "Hasta takip sistemleri",
      "Randevu otomasyonu",
      "Tıbbi görüntü analizi",
      "İlaç stok yönetimi",
    ],
  },
  {
    title: "Eğitim Kurumları",
    description: "Eğitim kurumları için akıllı öğrenme ve yönetim sistemleri.",
    icon: GraduationCap,
    benefits: [
      "Online eğitim platformları",
      "Öğrenci performans analizi",
      "İçerik yönetim sistemleri",
      "Sınav değerlendirme otomasyonu",
    ],
  },
  {
    title: "Lojistik",
    description: "Lojistik firmaları için optimizasyon ve takip çözümleri.",
    icon: Truck,
    benefits: [
      "Rota optimizasyonu",
      "Filo yönetimi",
      "Depo otomasyonu",
      "Teslimat takip sistemleri",
    ],
  },
  {
    title: "Finans",
    description:
      "Finans kurumları için AI destekli analiz ve otomasyon sistemleri.",
    icon: Landmark,
    benefits: [
      "Risk analizi",
      "Dolandırıcılık tespiti",
      "Portföy yönetimi",
      "Müşteri segmentasyonu",
    ],
  },
];

export default function Solutions() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="container px-4 py-24 mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Sektörel Çözümlerimiz
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Her sektöre özel geliştirilmiş AI ve otomasyon çözümlerimizle
            işinizi dönüştürün.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline" onClick={() => {
                    window.open("/contact", "_self");
                  }}>
                    Detaylı Bilgi
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

