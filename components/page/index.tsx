import { NavigationBar } from "@/components/layout/navbar";
import { HeroPage } from "@/components/page/hero";
import { CompanyTrust } from "@/components/page/company-trust";
import { CompanyTrust } from "@/components/page/company-trust";

export const HomePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      <HeroPage />
      <CompanyTrust />
      <CompanyTrust />
    </main>
  );
};
