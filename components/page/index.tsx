import { NavigationBar } from "@/components/layout/navbar";
import { HeroPage } from "@/components/page/hero";
import { CompanyTrust } from "@/components/page/company-trust";
import { About } from "@/components/page/about";
import { Features } from "@/components/page/feature";
import { Service } from "@/components/page/service";
import { Testimonial } from "@/components/page/testimonial";
import { Footer } from "@/components/layout/footer";

export const HomePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      <HeroPage />
      <CompanyTrust />
      <About />
      <Features />
      <Service />
      <Testimonial />
      <Footer />
    </main>
  );
};
