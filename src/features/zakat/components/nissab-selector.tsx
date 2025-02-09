import { useTranslation } from "react-i18next";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NissabType } from "../store/use-nissab-store";

interface NissabSelectorProps {
  selectedNissab: NissabType | null;
  onNissabChange: (value: NissabType) => void;
}

export function NissabSelector({ selectedNissab, onNissabChange }: NissabSelectorProps) {
  const { t } = useTranslation();

  return (
    <Select
      value={selectedNissab ?? "gold"}
      onValueChange={onNissabChange}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={t("zakat.nissab.select.placeholder")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gold">
          {t("zakat.nissab.select.gold")}
        </SelectItem>
        <SelectItem value="silver">
          {t("zakat.nissab.select.silver")}
        </SelectItem>
      </SelectContent>
    </Select>
  );
} 