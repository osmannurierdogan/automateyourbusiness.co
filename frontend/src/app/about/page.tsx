"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Hakkımızda</h1>
          <p className="text-2xl font-semibold text-primary mb-8">
            İşinizi Büyütmek İçin Otomasyonu Basitleştiriyoruz.
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            Automate Your Business, küçük ve orta ölçekli işletmelerin zaman alan süreçlerini akıllı otomasyonlarla optimize etmelerine yardımcı olmak için kuruldu. Modern dijital çözümlerle, iş yükünü azaltıyor, verimliliği artırıyor ve girişimcilerin asıl değer yarattıkları alanlara odaklanmalarını sağlıyoruz.
          </p>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="bg-muted/50 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4 max-w-4xl"
        >
          <h2 className="text-3xl font-bold mb-6">Vizyonumuz</h2>
          <p className="text-lg text-muted-foreground">
            Geleceğin iş dünyasında, manuel süreçlerin yerini hızlı, etkili ve hatasız otomasyonların alacağına inanıyoruz. Amacımız, bu dönüşümün parçası olmak isteyen işletmelere yalın ve etkili araçlar sunmak.
          </p>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Ne Yapıyoruz?</h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>Hazır Otomasyon Şablonları: Zapier, Make.com, n8n gibi araçlarla hazırlanmış, tek tıkla uygulanabilir otomasyon çözümleri</li>
                  <li>Web Sitesi Kurulumları: Modern, hızlı ve dönüşüm odaklı landing page ve kurumsal site çözümleri</li>
                  <li>Otomasyon Danışmanlığı: Süreç analizi, araç seçimi ve özel çözümlerle dijitalleşme yolculuğunu kolaylaştırıyoruz</li>
                  <li>İçerik & Eğitim: İşinizi büyütmenize yardımcı olacak sadeleştirilmiş eğitimler ve kaynaklar sunuyoruz</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Why Us Section */}
      <section className="bg-muted/50 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="container mx-auto px-4 max-w-4xl"
        >
          <h2 className="text-3xl font-bold mb-8">Neden Biz?</h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>Uzmanlık: 3 yıllık yazılım mühendisliği ve otomasyon tecrübesi</li>
                  <li>Deneyim: Gerçek projelerle test edilmiş, işe yarayan çözümler</li>
                  <li>Lokal & Global Uyum: Hem yerel pazarlara özel çözümler hem de küresel ölçekli teknolojiler</li>
                  <li>Şeffaflık & Güven: Stripe altyapısıyla güvenli ödeme, açık politika belgeleri ve doğrudan iletişim</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Who Is It For Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Kimin İçin Uygunuz?</h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>Vakit kaybı yaşamadan sistematik şekilde işini büyütmek isteyen girişimciler</li>
                  <li>Tekrarlayan işleri minimuma indirerek enerjisini satışa ve gelişmeye yönlendirmek isteyen KOBİ'ler</li>
                  <li>Ajanslar, serbest çalışanlar ve dijital içerik üreticileri</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/50 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="container mx-auto px-4 max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Bizimle İletişime Geçin</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Size özel çözümler ve sorularınız için her zaman buradayız.
          </p>
          <Link href="mailto:info@automateyourbusiness.co">
            <Button size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              info@automateyourbusiness.co
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
} 
