"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { Card } from "@/components/ui/card";
import { useProductStore } from "@/lib/store/products";

export default function Home() {
  const [error, setError] = useState<string | null>(null);
  const products = useProductStore((state) => state.products);

  const handlePurchase = async (productId: string) => {
    try {
      setError(null);

      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");
      if (!stripePromise) {
        throw new Error("Stripe yüklenemedi. Lütfen daha sonra tekrar deneyin.");
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/stripe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json().catch(() => {
        throw new Error("Sunucu yanıtı işlenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      });

      if (!response.ok) {
        throw new Error(data?.error || "Ödeme başlatılırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      }

      if (!data?.sessionId) {
        throw new Error("Geçersiz sunucu yanıtı. Lütfen daha sonra tekrar deneyin.");
      }

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe yüklenemedi. Lütfen daha sonra tekrar deneyin.");
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (stripeError) {
        throw new Error(stripeError.message || "Ödeme sayfasına yönlendirme başarısız oldu. Lütfen daha sonra tekrar deneyin.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(err instanceof Error ? err.message : "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }
  };

  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-slate-800 dark:via-slate-950 dark:to-slate-800 opacity-80" />
      </div>

      <Header />
      <div className="container mx-auto px-4 py-12">
      <Hero />
      <CaseStudies />
      <Testimonials />
        <section className="py-12">
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
                  className="w-full"
                >
                  Satın Al
                </Button>
              </Card>
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

