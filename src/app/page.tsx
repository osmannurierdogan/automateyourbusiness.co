import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CaseStudies />
      <Testimonials />
      <Pricing />
    </main>
  );
}

