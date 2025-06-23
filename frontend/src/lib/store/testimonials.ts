import { create } from 'zustand';

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  company: string;
}

interface TestimonialStore {
  testimonials: Testimonial[];
  setTestimonials: (testimonials: Testimonial[]) => void;
  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (name: string, testimonial: Partial<Testimonial>) => void;
  deleteTestimonial: (name: string) => void;
}

const initialTestimonials: Testimonial[] = [
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

export const useTestimonialStore = create<TestimonialStore>((set) => ({
  testimonials: initialTestimonials,
  setTestimonials: (testimonials) => set({ testimonials }),
  addTestimonial: (testimonial) =>
    set((state) => ({ testimonials: [...state.testimonials, testimonial] })),
  updateTestimonial: (name, updatedTestimonial) =>
    set((state) => ({
      testimonials: state.testimonials.map((testimonial) =>
        testimonial.name === name ? { ...testimonial, ...updatedTestimonial } : testimonial
      ),
    })),
  deleteTestimonial: (name) =>
    set((state) => ({
      testimonials: state.testimonials.filter((testimonial) => testimonial.name !== name),
    })),
})); 
