import { useTranslation } from "react-i18next";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Currency } from "../utils/normalize-currency-list";

interface CurrencySelectorProps {
  currency: string;
  availableCurrencies: Currency[];
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
          <SelectItem key={curr?.name} value={curr?.name}>
            {curr?.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
