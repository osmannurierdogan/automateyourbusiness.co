import { create } from 'zustand';

export interface LegalContent {
  title: string;
  content: string;
}

interface LegalStore {
  legalContents: {
    privacy: LegalContent;
    terms: LegalContent;
    kvkk: LegalContent;
    cookies: LegalContent;
  };
  getCurrentContent: (type: keyof LegalStore['legalContents']) => LegalContent;
}

const initialLegalContents = {
  privacy: {
    title: "Gizlilik Politikası",
    content: `Automate Your Business olarak, kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz. Bu gizlilik politikası, web sitemizi (https://automateyourbusiness.co) ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda hangi verilerin toplandığını, nasıl kullanıldığını ve korunduğunu açıklamaktadır.

1. Toplanan Bilgiler
	•	Kişisel Bilgiler: Ad, soyad, e-posta adresi, fatura bilgileri, ödeme bilgileri (Stripe aracılığıyla)
	•	Otomatik Olarak Toplanan Bilgiler: IP adresi, tarayıcı türü, cihaz bilgisi, gezinme geçmişi, çerezler

2. Verilerin Kullanım Amaçları
	•	Siparişlerin işlenmesi ve ödeme alınması
	•	Müşteri desteği sağlamak
	•	Hizmetleri geliştirmek
	•	Pazarlama ve bilgilendirme amaçlı e-posta gönderimi (onayınızla)

3. Verilerin Paylaşımı
Kişisel veriler, yalnızca aşağıdaki durumlarda üçüncü kişilerle paylaşılır:
	•	Stripe gibi ödeme altyapı sağlayıcılarıyla
	•	Yasal zorunluluk durumunda resmi makamlarla

4. Veri Saklama Süresi
Veriler, yasal yükümlülükler doğrultusunda ve hizmet sağlama amacıyla gerekli olan süre boyunca saklanır.

5. Güvenlik
Kişisel verileriniz SSL şifreleme teknolojileriyle güvenli bir şekilde iletilir ve korunur.

6. Haklarınız
KVKK uyarınca, kişisel verilerinize ilişkin olarak bilgi alma, düzeltme, silme ve itiraz etme hakkına sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.`,
  },
  terms: {
    title: "Kullanım Şartları",
    content: `Bu kullanım şartları, Automate Your Business web sitesine erişiminizi ve bu site üzerinden sunulan hizmetlerin kullanımını düzenlemektedir. Siteye erişerek bu şartları kabul etmiş olursunuz.

1. Hizmet Tanımı
Sitemiz üzerinden otomasyon şablonları ve dijital içerikler sunulmakta olup, kullanıcılar bu içerikleri satın alabilir ve indirebilir.

2. Üyelik ve Satın Alma
Satın alma işlemleri sırasında doğru, güncel ve eksiksiz bilgi vermeniz zorunludur. Ödemeler Stripe altyapısı ile güvenli biçimde gerçekleştirilir.

3. Fikri Mülkiyet Hakları
Web sitesinde yer alan tüm içerikler, tasarımlar, metinler ve görseller Automate Your Business markasına aittir. İzinsiz kullanılamaz, çoğaltılamaz ve dağıtılamaz.

4. Sorumluluk Sınırlaması
Web sitesinde sunulan hizmetler "olduğu gibi" sunulmakta olup, hizmetlerin kesintisiz veya hatasız olacağına dair garanti verilmemektedir.

5. Değişiklik Hakkı
Şirket, kullanım şartlarını önceden bildirmeksizin değiştirme hakkını saklı tutar. Güncel şartlar bu sayfada yayınlandığı andan itibaren geçerli olacaktır.`,
  },
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    content: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, Automate Your Business olarak veri sorumlusu sıfatıyla kişisel verilerinizi aşağıda açıklandığı şekilde işlemekteyiz.

1. Veri Sorumlusu
Automate Your Business – https://automateyourbusiness.co

2. İşlenen Kişisel Veriler
	•	Kimlik Bilgisi (Ad, Soyad)
	•	İletişim Bilgisi (E-posta, fatura adresi)
	•	İşlem Güvenliği Bilgileri (IP, cihaz bilgileri)
	•	Finansal Bilgiler (Stripe üzerinden ödeme bilgileri)

3. İşleme Amaçları
	•	Sözleşmenin ifası (sipariş, ödeme, faturalandırma)
	•	Müşteri hizmetleri desteği
	•	Pazarlama (açık rıza alınması halinde)
	•	Yasal yükümlülüklerin yerine getirilmesi

4. Hukuki Sebep
Verileriniz, KVKK'nın 5. maddesi uyarınca;
	•	Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması
	•	Hukuki yükümlülüğün yerine getirilmesi
	•	Açık rızanızın bulunması
hallerinde işlenmektedir.

5. Haklarınız
KVKK'nın 11. maddesi uyarınca:
	•	Kişisel verilerin işlenip işlenmediğini öğrenme
	•	İşlenmişse buna ilişkin bilgi talep etme
	•	İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme
	•	Yurtiçinde veya yurtdışında aktarıldığı 3. kişileri bilme
	•	Verilerin silinmesini veya düzeltilmesini talep etme
	•	Zarara uğramanız halinde tazminat talep etme
haklarına sahipsiniz.

İlgili taleplerinizi info@automateyourbusiness.co üzerinden iletebilirsiniz.`,
  },
  cookies: {
    title: "Çerez Politikası",
    content: `Bu Çerez Politikası, Automate Your Business web sitesini ziyaret ettiğinizde kullanılan çerezlerin nasıl çalıştığını açıklar.

1. Çerez Nedir?
Çerezler, ziyaret ettiğiniz web sitesi tarafından tarayıcınıza gönderilen küçük metin dosyalarıdır. Cihazınıza kaydedilir ve sizi tanımaya yardımcı olur.

2. Kullanılan Çerez Türleri
	•	Zorunlu Çerezler: Web sitesinin çalışması için gereklidir.
	•	İstatistik Çerezleri: Site performansını analiz etmemizi sağlar (ör. Google Analytics).
	•	Pazarlama Çerezleri: İlginizi çekebilecek içerikleri ve reklamları sunmak için kullanılır.

3. Çerezleri Yönetme
Tarayıcınızın ayarlarından çerezleri yönetebilir veya tamamen devre dışı bırakabilirsiniz. Ancak bazı işlevler bu durumda çalışmayabilir.

4. Çerezleri Ne Süreyle Tutuyoruz?
Çerezler oturum süresince veya maksimum 12 ay süreyle saklanır.

5. Daha Fazla Bilgi
Detaylı bilgi ve talepleriniz için info@automateyourbusiness.co üzerinden bizimle iletişime geçebilirsiniz.`,
  },
};

export const useLegalStore = create<LegalStore>((set, get) => ({
  legalContents: initialLegalContents,
  getCurrentContent: (type) => get().legalContents[type],
})); 
