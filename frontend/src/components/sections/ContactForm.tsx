"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function ContactForm() {
  return (
    <section className="py-24 md:py-32 relative bg-slate-50/50 dark:bg-slate-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="pt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
                Projenizi Değerlendirelim
              </CardTitle>
              <CardDescription className="text-md md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                İşinizi AI ve otomasyon ile nasıl geliştirebileceğimizi konuşmak
                için formu doldurun, 24 saat içinde size ulaşalım.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                {/* İletişim Bilgileri */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    İletişim Bilgileri
                  </h3>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-slate-900 dark:text-slate-200"
                      >
                        Ad
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Adınız"
                        className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-slate-900 dark:text-slate-200"
                      >
                        Soyad
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Soyadınız"
                        className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-900 dark:text-slate-200"
                      >
                        E-posta
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ornek@sirket.com"
                        className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-slate-900 dark:text-slate-200"
                      >
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+90 (___) ___ __ __"
                        className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Şirket Bilgileri */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Şirket Bilgileri
                  </h3>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="company"
                        className="text-sm font-medium text-slate-900 dark:text-slate-200"
                      >
                        Şirket Adı
                      </Label>
                      <Input
                        id="company"
                        placeholder="Şirketinizin adı"
                        className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="position"
                        className="text-sm font-medium text-slate-900 dark:text-slate-200"
                      >
                        Pozisyonunuz
                      </Label>
                      <Input
                        id="position"
                        placeholder="Şirketteki göreviniz"
                        className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="sector"
                        className="text-sm font-medium text-slate-900 dark:text-slate-200"
                      >
                        Sektör
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600">
                          <SelectValue placeholder="Sektörünüzü seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="e-commerce">E-ticaret</SelectItem>
                          <SelectItem value="manufacturing">Üretim</SelectItem>
                          <SelectItem value="logistics">Lojistik</SelectItem>
                          <SelectItem value="finance">Finans</SelectItem>
                          <SelectItem value="retail">Perakende</SelectItem>
                          <SelectItem value="technology">Teknoloji</SelectItem>
                          <SelectItem value="other">Diğer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="employeeCount"
                        className="text-sm font-medium text-slate-900 dark:text-slate-200"
                      >
                        Çalışan Sayısı
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600">
                          <SelectValue placeholder="Çalışan sayınızı seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-200">51-200</SelectItem>
                          <SelectItem value="201-500">201-500</SelectItem>
                          <SelectItem value="501+">501+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Proje Detayları */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Proje Detayları
                  </h3>
                  <Separator className="my-4" />
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="automationType"
                        className="text-sm font-medium text-slate-900 dark:text-slate-200"
                      >
                        Öncelikli Otomasyon İhtiyacınız
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600">
                          <SelectValue placeholder="İhtiyacınızı seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business-process">
                            İş Süreçleri Otomasyonu
                          </SelectItem>
                          <SelectItem value="customer-service">
                            Müşteri Hizmetleri Otomasyonu
                          </SelectItem>
                          <SelectItem value="production">
                            Üretim/Operasyon Otomasyonu
                          </SelectItem>
                          <SelectItem value="data-analytics">
                            Veri Analizi ve Raporlama
                          </SelectItem>
                          <SelectItem value="document">
                            Doküman Yönetimi
                          </SelectItem>
                          <SelectItem value="other">Diğer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="currentSystems"
                        className="text-sm font-medium text-slate-900 dark:text-slate-200"
                      >
                        Mevcut Kullandığınız Sistemler
                      </Label>
                      <Textarea
                        id="currentSystems"
                        placeholder="Şu anda kullandığınız yazılım ve sistemleri belirtiniz..."
                        className="min-h-[80px] bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="budget"
                          className="text-sm font-medium text-slate-900 dark:text-slate-200"
                        >
                          Bütçe Aralığı
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600">
                            <SelectValue placeholder="Bütçe aralığını seçin" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-50k">0-50.000 TL</SelectItem>
                            <SelectItem value="50k-100k">
                              50.000-100.000 TL
                            </SelectItem>
                            <SelectItem value="100k-250k">
                              100.000-250.000 TL
                            </SelectItem>
                            <SelectItem value="250k-500k">
                              250.000-500.000 TL
                            </SelectItem>
                            <SelectItem value="500k+">500.000+ TL</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="timeline"
                          className="text-sm font-medium text-slate-900 dark:text-slate-200"
                        >
                          Planlanan Başlangıç
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600">
                            <SelectValue placeholder="Başlangıç zamanını seçin" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Hemen</SelectItem>
                            <SelectItem value="1-3-months">
                              1-3 Ay İçinde
                            </SelectItem>
                            <SelectItem value="3-6-months">
                              3-6 Ay İçinde
                            </SelectItem>
                            <SelectItem value="6-12-months">
                              6-12 Ay İçinde
                            </SelectItem>
                            <SelectItem value="planning">
                              Henüz Planlama Aşamasında
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hedefler ve Beklentiler */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Hedefler ve Beklentiler
                  </h3>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <Label
                      htmlFor="goals"
                      className="text-sm font-medium text-slate-900 dark:text-slate-200"
                    >
                      Otomasyondan Beklenen Temel Fayda
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600">
                        <SelectValue placeholder="Öncelikli hedefinizi seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="efficiency">
                          Operasyonel Verimlilik
                        </SelectItem>
                        <SelectItem value="cost">Maliyet Tasarrufu</SelectItem>
                        <SelectItem value="quality">
                          Kalite İyileştirme
                        </SelectItem>
                        <SelectItem value="customer">
                          Müşteri Memnuniyeti
                        </SelectItem>
                        <SelectItem value="growth">
                          Büyüme ve Ölçeklendirme
                        </SelectItem>
                        <SelectItem value="other">Diğer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="additionalInfo"
                      className="text-sm font-medium text-slate-900 dark:text-slate-200"
                    >
                      Ek Bilgi ve Talepler
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Projeniz için özel ihtiyaç ve taleplerinizi belirtiniz..."
                      className="min-h-[120px] bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-slate-400 dark:focus:ring-slate-600"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-50 dark:hover:bg-slate-200 dark:text-slate-900 transition-colors"
                >
                  Teklif Al <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

