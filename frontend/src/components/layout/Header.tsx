"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useNavigationStore } from "@/lib/store/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mainNav = useNavigationStore((state) => state.mainNav);
  const footerContact = useNavigationStore((state) => state.footerContact);

  const buttonClassNames = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 py-4">
          <Image
            src="/images/logo.png"
            alt="Automate Your Business"
            width={150}
            height={100}
            priority
            style={{
              objectFit: 'contain',
              filter: 'brightness(0)'
            }}
            className="transition-all duration-200 hover:filter-none"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {mainNav.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <a
            href="https://cal.com/automateyourbusiness/15min"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClassNames}
          >
            Ücretsiz Danışmanlık
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0">
            <div className="flex flex-col h-full">
              {/* Scrollable Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="flex flex-col gap-6">
                  {mainNav.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-base text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <a
                    href="https://cal.com/automateyourbusiness/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    //className="text-base text-muted-foreground hover:text-primary transition-colors"
                    className={buttonClassNames}
                    onClick={() => setIsOpen(false)}
                  >
                    Ücretsiz Danışmanlık
                  </a>
                </nav>
              </div>

              {/* Fixed Bottom Section */}
              <div className="border-t bg-background">
                {/* Logo ve Slogan */}
                <div className="px-6 py-6 border-b">
                  <Image
                    src="/images/logo.png"
                    alt="Automate Your Business"
                    width={140}
                    height={80}
                    priority
                    style={{
                      objectFit: 'contain',
                      filter: 'brightness(0)'
                    }}
                    className="mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Yapay zeka destekli çözümlerimizle işlerinizi otomatikleştirin ve zamanınızı daha verimli hale getirin.
                  </p>
                </div>

                {/* İletişim Bilgileri */}
                <div className="px-6 py-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">İletişim</h3>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${footerContact.email}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {footerContact.email}
                      </a>
                      <a
                        href={`tel:${footerContact.phoneTR}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {footerContact.phoneTR}
                      </a>
                      <a
                        href={`tel:${footerContact.phoneUS}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {footerContact.phoneUS}
                      </a>
                      <p className="text-sm text-muted-foreground">
                        {footerContact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

