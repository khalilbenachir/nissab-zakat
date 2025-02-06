import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatAmount } from "@/lib/format-amount";

const NissabInformation = () => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("nissab_zakat_title")}</CardTitle>
        <CardDescription>{t("nissab_zakat_subtitle")}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{t("nissab_zakat_description")}</p>
        <Separator className="my-4" />
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-lg font-bold">{t("nissab_zakat_value")}</h2>
          <h3 className="text-2xl font-bold">
            {formatAmount(100000, { currency: "EUR", locale: "fr-FR" })}
          </h3>
        </div>
        <Separator className="my-4" />
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          {t("nissab_zakat_last_updated", {
            date: new Date().toLocaleDateString(),
          })}
        </p>
      </CardFooter>
    </Card>
  );
};

export default NissabInformation;
