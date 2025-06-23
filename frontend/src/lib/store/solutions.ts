import { create } from 'zustand';
import { Building2, ShoppingBag, Stethoscope, GraduationCap, Truck, Landmark } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

interface SolutionStore {
  solutions: Solution[];
  setSolutions: (solutions: Solution[]) => void;
  addSolution: (solution: Solution) => void;
  updateSolution: (title: string, solution: Partial<Solution>) => void;
  deleteSolution: (title: string) => void;
}

const initialSolutions: Solution[] = [
  {
    title: "Kurumsal İşletmeler",
    description:
      "Büyük ölçekli işletmeler için uçtan uca AI otomasyon çözümleri.",
    icon: Building2,
    benefits: [
      "İş süreçlerinin otomasyonu",
      "Veri analizi ve raporlama",
      "Doküman işleme ve yönetimi",
      "Müşteri hizmetleri otomasyonu",
    ],
  },
  {
    title: "E-ticaret",
    description: "Online satış platformları için akıllı otomasyon sistemleri.",
    icon: ShoppingBag,
    benefits: [
      "Stok yönetimi otomasyonu",
      "Dinamik fiyatlandırma",
      "Müşteri davranış analizi",
      "Chatbot entegrasyonu",
    ],
  },
  {
    title: "Sağlık Sektörü",
    description: "Sağlık kuruluşları için özel AI destekli çözümler.",
    icon: Stethoscope,
    benefits: [
      "Hasta takip sistemleri",
      "Randevu otomasyonu",
      "Tıbbi görüntü analizi",
      "İlaç stok yönetimi",
    ],
  },
  {
    title: "Eğitim Kurumları",
    description: "Eğitim kurumları için akıllı öğrenme ve yönetim sistemleri.",
    icon: GraduationCap,
    benefits: [
      "Online eğitim platformları",
      "Öğrenci performans analizi",
      "İçerik yönetim sistemleri",
      "Sınav değerlendirme otomasyonu",
    ],
  },
  {
    title: "Lojistik",
    description: "Lojistik firmaları için optimizasyon ve takip çözümleri.",
    icon: Truck,
    benefits: [
      "Rota optimizasyonu",
      "Filo yönetimi",
      "Depo otomasyonu",
      "Teslimat takip sistemleri",
    ],
  },
  {
    title: "Finans",
    description:
      "Finans kurumları için AI destekli analiz ve otomasyon sistemleri.",
    icon: Landmark,
    benefits: [
      "Risk analizi",
      "Dolandırıcılık tespiti",
      "Portföy yönetimi",
      "Müşteri segmentasyonu",
    ],
  },
];

export const useSolutionStore = create<SolutionStore>((set) => ({
  solutions: initialSolutions,
  setSolutions: (solutions) => set({ solutions }),
  addSolution: (solution) =>
    set((state) => ({ solutions: [...state.solutions, solution] })),
  updateSolution: (title, updatedSolution) =>
    set((state) => ({
      solutions: state.solutions.map((solution) =>
        solution.title === title ? { ...solution, ...updatedSolution } : solution
      ),
    })),
  deleteSolution: (title) =>
    set((state) => ({
      solutions: state.solutions.filter((solution) => solution.title !== title),
    })),
})); 
