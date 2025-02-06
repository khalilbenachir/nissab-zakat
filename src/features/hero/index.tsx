import { useTranslation } from "react-i18next";

import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { SectionHeader } from "@/components/ui/section-header";

import NissabInformation from "./nissab-information";
import ZakatCalculator from "./zakat-calculator";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background p-4">
      <header>
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
      </header>
      <main className="flex flex-col gap-4 items-center py-8">
        <SectionHeader title={t("hero_title")} subtitle={t("hero_subtitle")} />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <NissabInformation />
          <ZakatCalculator />
        </div>
      </main>
    </div>
  );
};

export default Hero;
