import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NissabInformation() {
  const { t } = useTranslation();

  return (
    <Card className="sticky top-5 h-fit">
      <CardHeader>
        <CardTitle>{t("nissab_zakat_title")}</CardTitle>
        <CardDescription>{t("nissab_zakat_description")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-medium">Gold Nissab (87.48g)</h4>
          <p className="text-2xl font-bold">$5,831.38</p>
          <p className="text-sm text-muted-foreground">
            Based on gold price: $66.66/g
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Silver Nissab (612.36g)</h4>
          <p className="text-2xl font-bold">$458.91</p>
          <p className="text-sm text-muted-foreground">
            Based on silver price: $0.75/g
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          {t("nissab_zakat_last_updated", {
            date: new Date().toLocaleDateString(),
          })}
        </p>
      </CardContent>
    </Card>
  );
}
