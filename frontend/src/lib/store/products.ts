import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  comparePrice: number;
  features: string[];
}

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
}

const initialProducts: Product[] = [
  {
    id: "blog-automation",
    name: "Blog Fabrikası",
    description: "Shopify websiteniz için AI destekli otomatik blog yazıları oluşturarak Google'da üst sıralara yükselin.",
    price: 29.99,
    comparePrice: 39.99,
    features: [
      "AI destekli içerik üretimi",
      "AI destekli görsel üretimi",
      "Marka kimliğinize uygun içerik üretimi",
      "Otomatik yayınlama",
      "SEO optimizasyonu",
      "Özelleştirilebilir yazı şablonları",
      "Detaylı kullanım dokümanı ve videosu",
    ],
  },
  {
    id: "social-automation",
    name: "İçerik Otomasyonu",
    description: "Sosyal medya hesaplarınız için otomatik içerik üretimi ve paylaşım yönetimi.",
    price: 19.99,
    comparePrice: 39.99,
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
    price: 14.99,
    comparePrice: 29.99,
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
    price: 24.99,
    comparePrice: 49.99,
    features: [
      "Ürün açıklaması üretimi",
      "SEO optimizasyonu",
      "Fiyat takibi",
      "Stok yönetimi",
      "Pazaryeri entegrasyonu",
    ],
  },
];

export const useProductStore = create<ProductStore>((set) => ({
  products: initialProducts,
  setProducts: (products) => set({ products }),
  addProduct: (product) => 
    set((state) => ({ products: [...state.products, product] })),
  updateProduct: (id, updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
})); 
