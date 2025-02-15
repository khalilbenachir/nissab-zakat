import { useTranslation } from "react-i18next";
import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNissabStore } from "../store/use-nissab-store";
import { NissabType } from "../store/use-nissab-store";
import { useNissabInformation } from "../hooks/use-nissab-information";
import { NissabSelector } from "./nissab-selector";
import { CurrencySelector } from "./currency-selector";
import { NissabOptions } from "./nissab-options";

export function NissabInformation() {
  const { t } = useTranslation();
  const { selectedNissab, setSelectedNissab, currency, setCurrency } =
    useNissabStore();
  const { nessabDetails, currencies, hasError } = useNissabInformation();

  if (hasError) {
    return (
      <Card className="row-start-1 md:row-auto md:sticky md:top-5 h-fit">
        <CardContent className="p-6">
          <p className="text-destructive">{t("zakat.errors.fetchNissab")}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="row-start-1 md:row-auto md:sticky md:top-5 h-fit">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {t("nissab_zakat_title")}
          {nessabDetails?.currency_exchange_rates && (
            <CurrencySelector
              currency={currency}
              availableCurrencies={currencies}
              onCurrencyChange={setCurrency}
            />
          )}
        </CardTitle>
        <CardDescription>{t("nissab_zakat_description")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <NissabSelector
          selectedNissab={selectedNissab}
          onNissabChange={(value: NissabType) => setSelectedNissab(value)}
        />

        <NissabOptions />
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          {t("nissab_zakat_last_updated", {
            date: nessabDetails
              ? format(
                  new Date(nessabDetails.last_metal_price_update_date),
                  "PPpp"
                )
              : new Date().toLocaleDateString(),
          })}
        </p>
      </CardFooter>
    </Card>
  );
}
