import { useEffect } from "react";
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
import { useNissabStore, useNissabQuery } from "../store/use-nissab-store";
import { Skeleton } from "@/components/ui/skeleton";
import { NissabType } from "../store/use-nissab-store";
import { NissabSelector } from "./nissab-selector";
import { NissabCard } from "./nissab-card";
import { CurrencySelector } from "./currency-selector";

export function NissabInformation() {
  const { t } = useTranslation();
  const { selectedNissab, setSelectedNissab, currency, setCurrency } =
    useNissabStore();
  const { data, isLoading, isError } = useNissabQuery();

  useEffect(() => {
    if (data && !selectedNissab) {
      setSelectedNissab("gold");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.gold_price]);

  if (isError) {
    return (
      <Card className="sticky top-5 h-fit">
        <CardContent className="p-6">
          <p className="text-destructive">{t("zakat.errors.fetchNissab")}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="sticky top-5 h-fit">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {t("nissab_zakat_title")}
          {data?.currency_exchange_rates && (
            <CurrencySelector
              currency={currency}
              availableCurrencies={Object.keys(data.currency_exchange_rates)}
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

        <div className="grid gap-4">
          {isLoading ? (
            <Skeleton className="h-[200px] w-full" />
          ) : (
            <>
              <NissabCard
                type="gold"
                selectedNissab={selectedNissab}
                threshold={data?.nissab_gold_threshold ?? 0}
                price={data?.gold_price ?? 0}
              />
              <NissabCard
                type="silver"
                selectedNissab={selectedNissab}
                threshold={data?.nissab_silver_threshold ?? 0}
                price={data?.silver_price ?? 0}
              />
            </>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          {t("nissab_zakat_last_updated", {
            date: data
              ? format(new Date(data.last_metal_price_update_date), "PPpp")
              : new Date().toLocaleDateString(),
          })}
        </p>
      </CardFooter>
    </Card>
  );
}
