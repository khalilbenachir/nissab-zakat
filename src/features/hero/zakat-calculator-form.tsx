import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { NumberInput } from "@/components/ui/number-input"

const formSchema = z.object({
  // Assets
  goldValue: z.string().min(1, "Required"),
  silverValue: z.string().min(1, "Required"),
  // Cash
  cashInHand: z.string().min(1, "Required"),
  depositedCash: z.string().min(1, "Required"),
  loanedCash: z.string().min(1, "Required"),
  investments: z.string().min(1, "Required"),
  // Trade Goods
  stockValue: z.string().min(1, "Required"),
  // Liabilities
  shortTermLoan: z.string().min(1, "Required"),
  longTermLoan: z.string().min(1, "Required"),
  overdraft: z.string().min(1, "Required"),
  creditCard: z.string().min(1, "Required"),
})

export function ZakatCalculatorForm() {
  const { t } = useTranslation()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goldValue: "",
      silverValue: "",
      cashInHand: "",
      depositedCash: "",
      loanedCash: "",
      investments: "",
      stockValue: "",
      shortTermLoan: "",
      longTermLoan: "",
      overdraft: "",
      creditCard: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Assets Section */}
        <div className="space-y-4">
          <h3 className="font-semibold">{t('zakat.form.assets.title')}</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="goldValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('zakat.form.assets.goldValue')}</FormLabel>
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
                  <FormLabel>{t('zakat.form.assets.silverValue')}</FormLabel>
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

        {/* Cash Section */}
        <div className="space-y-4">
          <h3 className="font-semibold">{t('zakat.form.cash.title')}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="cashInHand"
                render={({ field }) => (
                  <FormItem>
                    <div className="h-12">
                      <FormLabel>{t('zakat.form.cash.inHand')}</FormLabel>
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
                      <FormLabel>{t('zakat.form.cash.deposited')}</FormLabel>
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
                      <FormLabel>{t('zakat.form.cash.loans')}</FormLabel>
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
                      <FormLabel>{t('zakat.form.cash.investments')}</FormLabel>
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

        {/* Trade Goods Section */}
        <div className="space-y-4">
          <h3 className="font-semibold">{t('zakat.form.tradeGoods.title')}</h3>
          <FormField
            control={form.control}
            name="stockValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('zakat.form.tradeGoods.stockValue')}</FormLabel>
                <FormControl>
                  <NumberInput placeholder="0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Separator />

        {/* Liabilities Section */}
        <div className="space-y-4">
          <h3 className="font-semibold">{t('zakat.form.liabilities.title')}</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="shortTermLoan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('zakat.form.liabilities.shortTerm')}</FormLabel>
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
                  <FormLabel>{t('zakat.form.liabilities.longTerm')}</FormLabel>
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
                  <FormLabel>{t('zakat.form.liabilities.overdraft')}</FormLabel>
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
                  <FormLabel>{t('zakat.form.liabilities.creditCard')}</FormLabel>
                  <FormControl>
                    <NumberInput placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          {t('zakat.form.submit')}
        </Button>
      </form>
    </Form>
  )
}
