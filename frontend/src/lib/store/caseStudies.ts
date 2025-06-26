import { create } from 'zustand';

export interface CaseStudy {
  title: string;
  company: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  tags: string[];
  image: string;
}

interface CaseStudyStore {
  caseStudies: CaseStudy[];
  setCaseStudies: (caseStudies: CaseStudy[]) => void;
  addCaseStudy: (caseStudy: CaseStudy) => void;
  updateCaseStudy: (company: string, caseStudy: Partial<CaseStudy>) => void;
  deleteCaseStudy: (company: string) => void;
}

const initialCaseStudies: CaseStudy[] = [
  {
    title: "Blog Otomasyonu",
    company: "Fal Periniz",
    description:
      "Blog yazılarının marka kimliğine uygun olarak otomatik oluşturulması ve yayınlanması.",
    stats: [
      { label: "Aylık Ziyaretçi Sayısı", value: "↑35%" },
      { label: "Sitede Geçirilen Süre", value: "↑40%" },
    ],
    tags: ["E-ticaret", "AI", "Blog", "Otomasyon"],
    image: "/images/case-studies/falperiniz.png",
  },
  {
    title: "Blog Otomasyonu",
    company: "Evdeki Dostun",
    description:
      "Blog yazılarının marka kimliğine uygun olarak otomatik oluşturulması ve yayınlanması.",
    stats: [
      { label: "Aylık Ziyaretçi Sayısı", value: "↑40%" },
      { label: "Sitede Geçirilen Süre", value: "↑45%" },
    ],
    tags: ["E-ticaret", "AI", "Blog", "Otomasyon"],
    image: "/images/case-studies/evdekidostun.png",
  },
  {
    title: "Blog Otomasyonu",
    company: "Wilderness Haven",
    description:
      "Blog yazılarının marka kimliğine uygun olarak otomatik oluşturulması ve yayınlanması.",
    stats: [
      { label: "Aylık Ziyaretçi Sayısı", value: "↑50%" },
      { label: "Sitede Geçirilen Süre", value: "↑60%" },
    ],
    tags: ["E-ticaret", "AI", "Blog", "Otomasyon"],
    image: "/images/case-studies/wildernesshaven.png",
  },
  {
    title: "Kahve Falı ve Rüya Yorumları",
    company: "Fal Periniz",
    description: "Rüya ve fal yorumlarının AI destekli otomatik oluşturulması ve yayınlanması.",
    stats: [
      { label: "Müşteri Memnuniyeti", value: "↑45%" },
      { label: "Sipariş Hazırlama Süresi", value: "↓80%" },
    ],
    tags: ["Servis", "AI"],
    image: "/images/case-studies/falperiniz.png",
  }
];

export const useCaseStudyStore = create<CaseStudyStore>((set) => ({
  caseStudies: initialCaseStudies,
  setCaseStudies: (caseStudies) => set({ caseStudies }),
  addCaseStudy: (caseStudy) =>
    set((state) => ({ caseStudies: [...state.caseStudies, caseStudy] })),
  updateCaseStudy: (company, updatedCaseStudy) =>
    set((state) => ({
      caseStudies: state.caseStudies.map((caseStudy) =>
        caseStudy.company === company ? { ...caseStudy, ...updatedCaseStudy } : caseStudy
      ),
    })),
  deleteCaseStudy: (company) =>
    set((state) => ({
      caseStudies: state.caseStudies.filter((caseStudy) => caseStudy.company !== company),
    })),
})); 
