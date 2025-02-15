import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useNissabStore } from "../store/use-nissab-store";
import { useNissabQuery } from "../api/use-nissab-query";

const formSchema = z.object({
  goldValue: z.string(),
  silverValue: z.string(),
  cashInHand: z.string(),
  depositedCash: z.string(),
  loanedCash: z.string(),
  investments: z.string(),
  stockValue: z.string(),
  shortTermLoan: z.string(),
  longTermLoan: z.string(),
  overdraft: z.string(),
  creditCard: z.string(),
});

export type ZakatFormValues = z.infer<typeof formSchema>;

export function useZakatCalculator() {
  const { data } = useNissabQuery();
  const getNissabValue = useNissabStore((state) => state.getNissabValue);

  const availableCurrencies = data
    ? Object.keys(data.currency_exchange_rates || {})
    : [];

  const form = useForm<ZakatFormValues>({
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
  });

  const values = form.watch();

  const calculateTotal = () => {
    const assets = [
      values.goldValue,
      values.silverValue,
      values.cashInHand,
      values.depositedCash,
      values.loanedCash,
      values.investments,
      values.stockValue,
    ].reduce((sum, value) => sum + (Number(value) || 0), 0);

    const liabilities = [
      values.shortTermLoan,
      values.longTermLoan,
      values.overdraft,
      values.creditCard,
    ].reduce((sum, value) => sum + (Number(value) || 0), 0);

    return assets - liabilities;
  };

  const calculateZakat = () => {
    const total = calculateTotal();
    const nissabValue = getNissabValue(data) ?? 0;

    if (total < nissabValue) {
      return 0;
    }

    return total * 0.025;
  };

  return {
    form,
    totalAssets: calculateTotal(),
    zakatPayable: calculateZakat(),
    availableCurrencies,
  };
}
