"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const navigation = {
  main: [
    // { name: "Hakkımızda", href: "/about" },
    // { name: "Hizmetler", href: "/services" },
    { name: "Çözümler", href: "/solutions" },
    { name: "Hazır Sistemler", href: "/tools" },
    // { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/contact" },
    // { name: "Kariyer", href: "/careers" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/images/logo.png" 
                alt="Automate Your Business" 
                width={175} 
                height={100} 
                priority
                style={{ 
                  objectFit: 'contain',
                  filter: 'brightness(0)'
                }}
                className="transition-all duration-200 hover:filter-none"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Yapay zeka destekli çözümlerimizle işlerinizi otomatikleştirin ve zamanınızı daha verimli hale getirin.
            </p>
          </div>

          {/* Navigasyon */}
          <div className="space-y-4">
            <h3 className="font-semibold">Hızlı Erişim</h3>
            <ul className="space-y-2">
              {navigation.main.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li>
                <a
                  href="https://cal.com/automateyourbusiness/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Ücretsiz Danışmanlık
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h3 className="font-semibold">İletişim</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@automateyourbusiness.co"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@automateyourbusiness.co
                </a>
              </li>
              <li>
                <a
                  href="tel:+905451224170"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Tel (TR): +90 545 122 41 70
                </a>
              </li>
              <li>
                <a
                  href="tel:+12135799208"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Tel (US): +1 213 579 9208
                </a>
              </li>
              <li>
                <p className="text-muted-foreground text-sm">
                  7901 4th St N Ste 300, St. Petersburg, Florida, USA 33702
                </p>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="space-y-4">
            <h3 className="font-semibold">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Automate Your Business. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

