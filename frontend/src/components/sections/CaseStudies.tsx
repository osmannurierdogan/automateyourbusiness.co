"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const caseStudies = [
  {
    title: "Blog Otomasyonu",
    company: "Fal Periniz",
    description:
      "Blog yazılarının marka kimliğine uygun olarak oluşturulması ve yayınlanması.",
    stats: [
      { label: "Aylık Ziyaretçi Sayısı", value: "↑35%" },
      { label: "Sitede Geçirilen Süre", value: "↑40%" },
    ],
    tags: ["E-ticaret", "AI", "Blog", "Otomasyon"],
    // image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    image: "/images/case-studies/falperiniz.png",
  },
  {
    title: "Blog Otomasyonu",
    company: "Evdeki Dostun",
    description:
      "Blog yazılarının marka kimliğine uygun olarak oluşturulması ve yayınlanması.",
    stats: [
      { label: "Aylık Ziyaretçi Sayısı", value: "↑40%" },
      { label: "Sitede Geçirilen Süre", value: "↑45%" },
    ],
    tags: ["E-ticaret", "AI", "Blog", "Otomasyon"],
    // image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    image: "/images/case-studies/evdekidostun.png",
  },
  {
    title: "Blog Otomasyonu",
    company: "Wilderness Haven",
    description:
      "Blog yazılarının marka kimliğine uygun olarak oluşturulması ve yayınlanması.",
    stats: [
      { label: "Aylık Ziyaretçi Sayısı", value: "↑50%" },
      { label: "Sitede Geçirilen Süre", value: "↑60%" },
    ],
    tags: ["E-ticaret", "AI", "Blog", "Otomasyon"],
    // image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    image: "/images/case-studies/wildernesshaven.png",
  },
  {
    title: "Kahve Falı ve Rüya Yorumları",
    company: "Fal Periniz",
    description: "Rüya ve fal yorumlarının AI destekli otomatik oluşturulması ve yayınlanması.",
    stats: [
      { label: "Müşteri Memnuniyeti", value: "↑45%" },
      { label: "Sipariş Hazırlama Süresi", value: "↓80%" },
    ],
    tags: ["Servis", "AI"],
    // image:
    //   "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=2070",
    image: "/images/case-studies/falperiniz.png",
  },
  // {
  //   title: "Üretim Optimizasyonu",
  //   company: "IndusTech",
  //   description: "AI destekli kalite kontrol ve üretim planlama sistemi.",
  //   stats: [
  //     { label: "Üretim", value: "↑45%" },
  //     { label: "Hata", value: "↓80%" },
  //   ],
  //   tags: ["Üretim", "AI"],
  //   image:
  //     "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=2070",
  // },
  // {
  //   title: "Lojistik Yönetimi",
  //   company: "FastCargo",
  //   description: "Rota optimizasyonu ve teslimat takip sistemi.",
  //   stats: [
  //     { label: "Hız", value: "↑50%" },
  //     { label: "Yakıt", value: "↓30%" },
  //   ],
  //   tags: ["Lojistik", "AI"],
  //   image:
  //     "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070",
  // },
  // {
  //   title: "Müşteri Hizmetleri",
  //   company: "ServicePro",
  //   description: "Chatbot ve ticket yönetim sistemi entegrasyonu.",
  //   stats: [
  //     { label: "Yanıt", value: "↓70%" },
  //     { label: "Memnuniyet", value: "↑85%" },
  //   ],
  //   tags: ["Hizmet", "AI"],
  //   image:
  //     "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
  // },
];

export function CaseStudies() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Başarı Hikayeleri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Müşterilerimizle birlikte başardığımız dönüşüm projelerini
            inceleyin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover brightness-[0.3] group-hover:scale-105 group-hover:brightness-[0.4] transition-all duration-500"
                  />
                </div>
                <div className="relative h-full backdrop-blur-[2px]">
                  <CardHeader className="space-y-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-black/50 hover:bg-black/60 text-white font-medium transition-colors"
                      >
                        {study.company}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-white">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2 text-gray-200">
                      {study.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {study.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="text-center p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <div className="text-lg font-semibold text-white">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-300">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {study.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs border-white/20 text-white bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full h-8 text-xs text-white bg-black/50 hover:bg-black/60 hover:text-white transition-colors"
                    >
                      Detaylar <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

