"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";

const products = [
  {
    id: "blog-automation",
    name: "Blog Otomasyonu",
    description: "Wordpress siteniz için otomatik blog yazıları oluşturun. AI destekli içerik üretimi ve SEO optimizasyonu.",
    price: "9.99",
    comparePrice: "19.99",
    features: [
      "AI destekli içerik üretimi",
      "SEO optimizasyonu",
      "Otomatik yayınlama",
      "Özelleştirilebilir yazı şablonları",
      "Detaylı kurulum dokümanı",
    ],
  },
  {
    id: "social-automation",
    name: "İçerik Otomasyonu",
    description: "Sosyal medya hesaplarınız için otomatik içerik üretimi ve paylaşım yönetimi.",
    price: "19.99",
    comparePrice: "39.99",
    features: [
      "Çoklu platform desteği",
      "AI destekli içerik üretimi",
      "Otomatik paylaşım zamanlaması",
      "Etkileşim analizi",
      "Detaylı kurulum dokümanı",
    ],
  },
  {
    id: "email-automation",
    name: "Email Otomasyonu",
    description: "Email pazarlama kampanyalarınız için otomatik içerik üretimi ve gönderim yönetimi.",
    price: "14.99",
    comparePrice: "29.99",
    features: [
      "Kişiselleştirilmiş içerik",
      "A/B testi",
      "Otomatik gönderim planlaması",
      "Detaylı analitik",
      "Şablon kütüphanesi",
    ],
  },
  {
    id: "ecommerce-automation",
    name: "E-ticaret Otomasyonu",
    description: "Online mağazanız için otomatik ürün açıklamaları ve SEO optimizasyonu.",
    price: "24.99",
    comparePrice: "49.99",
    features: [
      "Ürün açıklaması üretimi",
      "SEO optimizasyonu",
      "Fiyat takibi",
      "Stok yönetimi",
      "Pazaryeri entegrasyonu",
    ],
  },
];

export default function Home() {
  // const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async (productId: string) => {
    try {

      // setLoading(productId);
      setError(null);

      // Stripe yüklemesini kontrol et
      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");
      if (!stripePromise) {
        throw new Error("Stripe yüklenemedi. Lütfen daha sonra tekrar deneyin.");
      }

      // API isteği
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/stripe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      // Response'u parse et
      const data = await response.json().catch(() => {
        throw new Error("Sunucu yanıtı işlenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      });

      // HTTP hata kontrolü
      if (!response.ok) {
        throw new Error(data?.error || "Ödeme başlatılırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      }

      // Session ID kontrolü
      if (!data?.sessionId) {
        throw new Error("Geçersiz sunucu yanıtı. Lütfen daha sonra tekrar deneyin.");
      }

      // Stripe nesnesini al
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe yüklenemedi. Lütfen daha sonra tekrar deneyin.");
      }

      // Checkout'a yönlendir
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (stripeError) {
        throw new Error(stripeError.message || "Ödeme sayfasına yönlendirme başarısız oldu. Lütfen daha sonra tekrar deneyin.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(err instanceof Error ? err.message : "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    } finally {
      // setLoading(null);
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-slate-800 dark:via-slate-950 dark:to-slate-800 opacity-80" />
      </div>

      <Header />
      <div className="container mx-auto px-4 py-12">
        <Hero />
        <CaseStudies />
        <Testimonials />
        <section className="py-24">
          <h2 className="text-4xl font-bold text-center mb-4">Hazır Sistemler</h2>
          <p className="text-center text-muted-foreground mb-12">
            İşinizi otomatikleştirmek için hazır sistemlerimizi inceleyin
          </p>

          {error && (
            <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-md text-center">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col p-6 bg-card rounded-lg border"
              >
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="mt-auto space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <span className="text-muted-foreground line-through">
                      ${product.comparePrice}
                    </span>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => handlePurchase(product.id)}
                  >
                    Satın Al
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/tools">
              <Button size="lg" variant="outline">
                Tüm Sistemleri Görüntüle
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

