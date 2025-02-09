import { useTranslation } from "react-i18next";

import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { SectionHeader } from "@/components/ui/section-header";
import { ZakatCalculator } from "@/features/zakat";

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
        <ZakatCalculator />
      </main>
    </div>
  );
};

export default Hero;
