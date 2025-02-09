import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { useZakatCalculator, ZakatFormValues } from "@/features/zakat/hooks/use-zakat-calculator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { NumberInput } from "@/components/ui/number-input";

export function ZakatCalculatorForm() {
  const { t } = useTranslation();
  const { form, totalAssets, zakatPayable } = useZakatCalculator();

  function onSubmit(values: ZakatFormValues) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold">{t("zakat.form.assets.title")}</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="goldValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("zakat.form.assets.goldValue")}</FormLabel>
                  <FormControl>
                    <NumberInput placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="silverValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("zakat.form.assets.silverValue")}</FormLabel>
                  <FormControl>
                    <NumberInput placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold">{t("zakat.form.cash.title")}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="cashInHand"
                render={({ field }) => (
                  <FormItem>
                    <div className="h-12">
                      <FormLabel>{t("zakat.form.cash.inHand")}</FormLabel>
                    </div>
                    <FormControl>
                      <NumberInput placeholder="0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="depositedCash"
                render={({ field }) => (
                  <FormItem>
                    <div className="h-12">
                      <FormLabel>{t("zakat.form.cash.deposited")}</FormLabel>
                    </div>
                    <FormControl>
                      <NumberInput placeholder="0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="loanedCash"
                render={({ field }) => (
                  <FormItem>
                    <div className="h-12">
                      <FormLabel>{t("zakat.form.cash.loans")}</FormLabel>
                    </div>
                    <FormControl>
                      <NumberInput placeholder="0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="investments"
                render={({ field }) => (
                  <FormItem>
                    <div className="h-12">
                      <FormLabel>{t("zakat.form.cash.investments")}</FormLabel>
                    </div>
                    <FormControl>
                      <NumberInput placeholder="0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold">{t("zakat.form.tradeGoods.title")}</h3>
          <FormField
            control={form.control}
            name="stockValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("zakat.form.tradeGoods.stockValue")}</FormLabel>
                <FormControl>
                  <NumberInput placeholder="0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold">{t("zakat.form.liabilities.title")}</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="shortTermLoan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("zakat.form.liabilities.shortTerm")}</FormLabel>
                  <FormControl>
                    <NumberInput placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="longTermLoan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("zakat.form.liabilities.longTerm")}</FormLabel>
                  <FormControl>
                    <NumberInput placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="overdraft"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("zakat.form.liabilities.overdraft")}</FormLabel>
                  <FormControl>
                    <NumberInput placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="creditCard"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("zakat.form.liabilities.creditCard")}
                  </FormLabel>
                  <FormControl>
                    <NumberInput placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex justify-between items-center p-4">
            <h3 className="text-lg font-medium">
              {t("zakat.form.summary.totalAssets")}
            </h3>
            <p className="text-xl font-bold">
              ${totalAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
              ${zakatPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
}
