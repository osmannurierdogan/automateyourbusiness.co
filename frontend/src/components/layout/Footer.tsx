"use client";

import Link from "next/link";
import Image from "next/image";
import { useNavigationStore } from "@/lib/store/navigation";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github, LucideIcon } from "lucide-react";

type SocialIconsType = {
  [key: string]: LucideIcon;
};

const socialIcons: SocialIconsType = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  github: Github,
};

export function Footer() {
  const { footerSections, footerContact } = useNavigationStore();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-1 gap-8">
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

          {/* Navigasyon Bölümleri */}
          {footerSections.slice(0, 4).map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* İletişim ve Sosyal Medya */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <a
                href={`mailto:${footerContact.email}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm block"
              >
                Email: {footerContact.email}
              </a>
              <a
                href={`tel:${footerContact.phoneTR}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm block"
              >
                Telefon (TR): {footerContact.phoneTR}
              </a>
              <a
                href={`tel:${footerContact.phoneUS}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm block"
              >
                Telefon (US): {footerContact.phoneUS}
              </a>
              <p className="text-muted-foreground text-sm">
                Adres: {footerContact.address}
              </p>
            </div>
            <div className="flex justify-finish md:justify-end space-x-4 sm:justify-between flex-col">
              <div className="flex justify-finish align-center items-center md:justify-end gap-6 sm:gap-2 sm:items-center justify-center">
              {footerContact.socialLinks.map((social, index) => {
                const Icon = socialIcons[social.icon.toLowerCase()];
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="sr-only">{social.platform}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
              </div>
              <div className="mt-8 flex justify-end">
                <p className="text-center text-muted-foreground text-sm">
                  © {new Date().getFullYear()} Automate Your Business. Tüm hakları saklıdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

