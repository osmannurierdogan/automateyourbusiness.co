import { create } from 'zustand';
import { Brain, Factory, Bot, Workflow, Database, MessageSquareCode } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

interface ServiceStore {
  services: Service[];
  setServices: (services: Service[]) => void;
  addService: (service: Service) => void;
  updateService: (title: string, service: Partial<Service>) => void;
  deleteService: (title: string) => void;
}

const initialServices: Service[] = [
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

export const useServiceStore = create<ServiceStore>((set) => ({
  services: initialServices,
  setServices: (services) => set({ services }),
  addService: (service) =>
    set((state) => ({ services: [...state.services, service] })),
  updateService: (title, updatedService) =>
    set((state) => ({
      services: state.services.map((service) =>
        service.title === title ? { ...service, ...updatedService } : service
      ),
    })),
  deleteService: (title) =>
    set((state) => ({
      services: state.services.filter((service) => service.title !== title),
    })),
})); 
