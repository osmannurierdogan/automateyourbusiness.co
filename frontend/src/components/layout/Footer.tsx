"use client";

import Link from "next/link";
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
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Automate Your Business
            </h3>
            <p className="text-sm text-muted-foreground">
              AI destekli otomasyon çözümleriyle işinizi geleceğe taşıyın.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              {navigation.main.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: <a href="mailto:info@automateyourbusiness.co">info@automateyourbusiness.co</a></li>
              <li>Tel (TR): <a href="tel:+905451224170">+90 545 122 41 70</a></li>
              <li>Tel (US): <a href="tel:+12135799208">+1 213 579 9208</a></li>
              <li>
                Adres: 7901 4TH ST N STE 300, ST. PETERSBURG, FLORIDA, US 33702
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
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
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Automate Your Business. Tüm
            hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

