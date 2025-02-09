import { useTranslation } from "react-i18next";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CurrencySelectorProps {
  currency: string;
  availableCurrencies: string[];
  onCurrencyChange: (currency: string) => void;
}

export function CurrencySelector({
  currency,
  availableCurrencies,
  onCurrencyChange,
}: CurrencySelectorProps) {
  const { t } = useTranslation();

  return (
    <Select value={currency} onValueChange={onCurrencyChange}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder={t("zakat.currency.select.placeholder")} />
      </SelectTrigger>
      <SelectContent>
        {availableCurrencies.map((curr) => (
          <SelectItem key={curr} value={curr}>
            {curr}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
} 