import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

import { useNissabInformation } from "../hooks/use-nissab-information";
import { useZakatCalculator } from "../hooks/use-zakat-calculator";

export const ZakatTotal = () => {
  const { t } = useTranslation();
  const { totalAssets, zakatPayable } = useZakatCalculator();
  const { currentCurrency } = useNissabInformation();

  return (
    <div className="space-y-4 pt-4">
      <div className="flex justify-between items-center p-4">
        <h3 className="text-lg font-medium">
          {t("zakat.form.summary.totalAssets")}
        </h3>
        <p className="text-xl font-bold">
          {currentCurrency?.symbol}{" "}
          {totalAssets.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <div
        className={cn(
          "flex justify-between items-center",
          "p-4 rounded-lg bg-primary/10"
        )}
      >
        <h3 className="text-lg font-medium text-primary">
          {t("zakat.form.summary.zakatPayable")}
        </h3>
        <p className="text-2xl font-bold text-primary">
          {currentCurrency?.symbol}{" "}
          {zakatPayable.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};
