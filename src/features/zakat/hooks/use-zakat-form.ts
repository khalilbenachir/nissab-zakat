import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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

export function useZakatForm() {
  const { data } = useNissabQuery();

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

  return {
    form,
    availableCurrencies,
  };
}
