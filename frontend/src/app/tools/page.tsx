"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";

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

export default function ToolsPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async (productId: string) => {
    try {
      setLoading(true);
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
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Hazır Sistemler
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            İşinizi otomatikleştirmek için hazır sistemlerimizi inceleyin
          </p>
        </motion.div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-md">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-muted-foreground mb-4 flex-grow">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-lg text-muted-foreground line-through">${product.comparePrice}</span>
                <span className="text-2xl font-bold text-primary">${product.price}</span>
              </div>
              <Button
                onClick={() => handlePurchase(product.id)}
                disabled={loading}
                className="w-full"
              >
                {loading ? "İşleniyor..." : "Satın Al"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
} 
