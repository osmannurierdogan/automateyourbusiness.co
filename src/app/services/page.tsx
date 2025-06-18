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
  Brain,
  Factory,
  Bot,
  Workflow,
  Database,
  MessageSquareCode,
} from "lucide-react";

const services = [
  {
    title: "AI Süreç Otomasyonu",
    description:
      "İş süreçlerinizi yapay zeka ile otomatikleştirerek verimliliği artırın ve maliyetleri düşürün.",
    icon: Workflow,
    features: [
      "İş akışı optimizasyonu",
      "Akıllı görev dağılımı",
      "Otomatik raporlama",
    ],
  },
  {
    title: "Makine Öğrenmesi Çözümleri",
    description:
      "Verilerinizden değer üreten, öğrenen ve kendini geliştiren sistemler oluşturun.",
    icon: Brain,
    features: [
      "Tahminsel analitik",
      "Anomali tespiti",
      "Müşteri segmentasyonu",
    ],
  },
  {
    title: "Robotik Süreç Otomasyonu (RPA)",
    description:
      "Tekrarlayan işlerinizi robotlara devrederek zaman kazanın ve hata oranlarını azaltın.",
    icon: Bot,
    features: [
      "Veri girişi otomasyonu",
      "Sistem entegrasyonları",
      "İş süreci otomasyonu",
    ],
  },
  {
    title: "Endüstriyel IoT Çözümleri",
    description:
      "Üretim süreçlerinizi akıllı sensörler ve AI ile optimize edin.",
    icon: Factory,
    features: [
      "Gerçek zamanlı izleme",
      "Prediktif bakım",
      "Enerji optimizasyonu",
    ],
  },
  {
    title: "Veri Analizi ve İş Zekası",
    description:
      "Verilerinizi anlamlı içgörülere dönüştürerek daha iyi kararlar alın.",
    icon: Database,
    features: [
      "Veri görselleştirme",
      "İş zekası raporları",
      "Performans analizi",
    ],
  },
  {
    title: "AI Chatbot ve Asistanlar",
    description:
      "Müşteri hizmetlerinizi 7/24 AI destekli chatbotlar ile güçlendirin.",
    icon: MessageSquareCode,
    features: [
      "Doğal dil işleme",
      "Çok dilli destek",
      "Özelleştirilebilir yanıtlar",
    ],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="container px-4 py-24 mt-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
            AI Otomasyon Hizmetlerimiz
          </h1>
          <p className="text-xl text-muted-foreground mx-auto">
            İşinizi geleceğe taşıyacak yapay zeka ve otomasyon çözümlerimizi
            keşfedin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

