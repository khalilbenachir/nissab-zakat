import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ZakatCalculatorForm } from "./zakat-calculator-form";
import { NissabInformation } from "./nissab-information";

export const ZakatCalculator = () => {
  const { t } = useTranslation();
  return (
    <Card className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>{t("zakat_calculator_title")}</CardTitle>
          <CardDescription>{t("zakat_calculator_description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ZakatCalculatorForm />
        </CardContent>
      </Card>
      <NissabInformation />
    </Card>
  );
};
