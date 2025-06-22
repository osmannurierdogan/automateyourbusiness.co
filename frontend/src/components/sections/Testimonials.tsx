"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "CEO, TechCorp",
    content:
      "AI otomasyon çözümleri sayesinde operasyonel maliyetlerimizi %40 azalttık. Müşteri memnuniyetimiz de ciddi oranda arttı.",
    company: "TechCorp",
  },
  {
    name: "Ayşe Kaya",
    role: "CTO, E-Commerce Plus",
    content:
      "Automate Your Business ile e-ticaret süreçlerimizi otomatikleştirdik. Stok yönetimi ve müşteri hizmetleri artık çok daha verimli.",
    company: "E-Commerce Plus",
  },
  {
    name: "Mehmet Demir",
    role: "Operasyon Müdürü, LogiTech",
    content:
      "Lojistik operasyonlarımızda AI kullanmaya başladığımızdan beri teslimat sürelerimiz %30 kısaldı ve müşteri şikayetleri azaldı.",
    company: "LogiTech",
  },
  {
    name: "Zeynep Arslan",
    role: "Pazarlama Direktörü, DigitalMax",
    content:
      "Müşteri verilerinin analizi ve otomatik pazarlama kampanyaları sayesinde dönüşüm oranlarımız %50'nin üzerine çıktı.",
    company: "DigitalMax",
  },
  {
    name: "Can Özkan",
    role: "Finans Müdürü, FinTech Solutions",
    content:
      "Finansal süreçlerimizin otomasyonu ile raporlama süremiz %70 kısaldı ve insan kaynaklı hataları minimum seviyeye indirdik.",
    company: "FinTech Solutions",
  },
  {
    name: "Elif Yıldız",
    role: "İK Direktörü, HRTech",
    content:
      "İK süreçlerimizin AI ile otomasyonu sayesinde işe alım sürecimiz hızlandı ve çalışan memnuniyetimiz %45 arttı.",
    company: "HRTech",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Başarı hikayelerimizi ve müşterilerimizin deneyimlerini keşfedin.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex items-center justify-center gap-2 mt-8">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-3 h-[280p] flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12 bg-primary/10">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground line-clamp-5">
                        {testimonial.content}
                      </p>
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

