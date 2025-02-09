import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

import { NissabType } from "../store/use-nissab-store";

interface NissabCardProps {
  type: NissabType;
  selectedNissab: NissabType | null;
  threshold: number;
  price: number;
}

export function NissabCard({ type, selectedNissab, threshold, price }: NissabCardProps) {
  const { t } = useTranslation();
  const isSelected = selectedNissab === type;

  return (
    <div
      className={cn(
        "space-y-2 p-4 rounded-lg transition-colors",
        isSelected && "bg-primary/10"
      )}
    >
      <h4
        className={cn(
          "font-medium",
          isSelected && "text-primary"
        )}
      >
        {t(`zakat.nissab.${type}.title`)}
      </h4>
      <p
        className={cn(
          "text-2xl font-bold",
          isSelected && "text-primary"
        )}
      >
        ${threshold.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}
      </p>
      <p className="text-sm text-muted-foreground">
        {t(`zakat.nissab.${type}.price`, {
          price: price.toFixed(2),
        })}
      </p>
    </div>
  );
} 