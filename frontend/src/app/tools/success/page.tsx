"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Suspense } from "react";

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-24 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Yükleniyor...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      setError("Geçersiz oturum");
      setLoading(false);
      return;
    }

    // Burada session_id'yi backend'e gönderip ödemenin başarılı olduğunu doğrulayabilir
    // ve kullanıcıya email gönderebilirsiniz
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p>İşleminiz tamamlanıyor...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24">
          <Card className="max-w-lg mx-auto p-6">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Hata</h1>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Link href="/tools">
              <Button>Hazır Sistemlere Geri Dön</Button>
            </Link>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <Card className="max-w-lg mx-auto p-6">
          <h1 className="text-2xl font-bold text-green-500 mb-4">
            Ödemeniz Başarıyla Tamamlandı!
          </h1>
          <p className="text-muted-foreground mb-6">
            Satın aldığınız otomasyon paketinin kurulum talimatları email adresinize gönderilecektir.
            Lütfen email kutunuzu kontrol edin.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              • Email&apos;inizi spam klasörünü de kontrol etmeyi unutmayın
            </p>
            <p className="text-sm text-muted-foreground">
              • Herhangi bir sorunuz olursa bizimle iletişime geçebilirsiniz
            </p>
          </div>
          <div className="mt-8 space-x-4">
            <Link href="/tools">
              <Button variant="outline">Hazır Sistemlere Geri Dön</Button>
            </Link>
            <Link href="/contact">
              <Button>İletişime Geç</Button>
            </Link>
          </div>
        </Card>
      </div>
    </main>
  );
} 
