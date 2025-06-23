import { create } from 'zustand';

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export interface FooterContact {
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    platform: string;
    href: string;
    icon: string;
  }[];
}

interface NavigationStore {
  mainNav: NavItem[];
  footerSections: FooterSection[];
  footerContact: FooterContact;
  setMainNav: (nav: NavItem[]) => void;
  setFooterSections: (sections: FooterSection[]) => void;
  setFooterContact: (contact: FooterContact) => void;
  updateMainNavItem: (index: number, item: Partial<NavItem>) => void;
  updateFooterSection: (index: number, section: Partial<FooterSection>) => void;
  updateFooterContact: (contact: Partial<FooterContact>) => void;
}

const initialMainNav: NavItem[] = [
  {
    title: "Çözümler",
    href: "/solutions",
    description: "Sektörel çözümlerimizi keşfedin.",
  },
  {
    title: "Hizmetler",
    href: "/services",
    description: "AI ve otomasyon hizmetlerimiz.",
  },
  {
    title: "Hazır Sistemler",
    href: "/tools",
    description: "Kullanıma hazır AI sistemlerimiz.",
  },
  {
    title: "Fiyatlandırma",
    href: "/pricing",
    description: "Fiyatlandırma planlarımız.",
  },
  {
    title: "İletişim",
    href: "/contact",
    description: "Bizimle iletişime geçin.",
  },
];

const initialFooterSections: FooterSection[] = [
  {
    title: "Yasal",
    items: [
      { title: "Gizlilik Politikası", href: "/privacy" },
      { title: "Kullanım Şartları", href: "/terms" },
      { title: "KVKK", href: "/kvkk" },
      { title: "Çerez Politikası", href: "/cookies" },
    ],
  },
  {
    title: "Şirket",
    items: [
      { title: "Hakkımızda", href: "/about" },
      { title: "Blog", href: "/blog" },
      { title: "Kariyer", href: "/careers" },
      { title: "İletişim", href: "/contact" },
    ],
  },
  {
    title: "Çözümler",
    items: [
      { title: "Kurumsal İşletmeler", href: "/solutions#enterprise" },
      { title: "E-ticaret", href: "/solutions#ecommerce" },
      { title: "Sağlık Sektörü", href: "/solutions#healthcare" },
      { title: "Eğitim Kurumları", href: "/solutions#education" },
      { title: "Lojistik", href: "/solutions#logistics" },
      { title: "Finans", href: "/solutions#finance" },
    ],
  },
  {
    title: "Hizmetler",
    items: [
      { title: "AI Süreç Otomasyonu", href: "/services#process-automation" },
      { title: "Makine Öğrenmesi", href: "/services#machine-learning" },
      { title: "RPA", href: "/services#rpa" },
      { title: "IoT Çözümleri", href: "/services#iot" },
      { title: "Veri Analizi", href: "/services#data-analytics" },
      { title: "AI Chatbot", href: "/services#chatbot" },
    ],
  },
];

const initialFooterContact: FooterContact = {
  email: "info@automateyourbusiness.co",
  phoneTR: "+90 545 122 41 70",
  phoneUS: "+1 213 579 9208",
  address: "7901 4th St N Ste 300, St. Petersburg, Florida, USA 33702",
  socialLinks: [
    {
      platform: "Facebook",
      href: "https://facebook.com/automateyourbusiness",
      icon: "facebook",
    },
    {
      platform: "Twitter",
      href: "https://twitter.com/automateyourbusiness",
      icon: "twitter",
    },
    {
      platform: "LinkedIn",
      href: "https://linkedin.com/company/automateyourbusiness",
      icon: "linkedin",
    },
    {
      platform: "Instagram",
      href: "https://instagram.com/automateyourbusiness",
      icon: "instagram",
    },
    {
      platform: "YouTube",
      href: "https://youtube.com/@automateyourbusiness",
      icon: "youtube",
    },
    {
      platform: "GitHub",
      href: "https://github.com/automateyourbusiness",
      icon: "github",
    },
  ],
};

export const useNavigationStore = create<NavigationStore>((set) => ({
  mainNav: initialMainNav,
  footerSections: initialFooterSections,
  footerContact: initialFooterContact,
  setMainNav: (mainNav) => set({ mainNav }),
  setFooterSections: (footerSections) => set({ footerSections }),
  setFooterContact: (footerContact) => set({ footerContact }),
  updateMainNavItem: (index, item) =>
    set((state) => ({
      mainNav: state.mainNav.map((nav, i) =>
        i === index ? { ...nav, ...item } : nav
      ),
    })),
  updateFooterSection: (index, section) =>
    set((state) => ({
      footerSections: state.footerSections.map((sec, i) =>
        i === index ? { ...sec, ...section } : sec
      ),
    })),
  updateFooterContact: (contact) =>
    set((state) => ({
      footerContact: { ...state.footerContact, ...contact },
    })),
})); 
