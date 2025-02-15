import { useFormContext, useWatch } from "react-hook-form";

import { useNissabStore } from "../store/use-nissab-store";
import { useNissabQuery } from "../api/use-nissab-query";

export function useZakatCalculator() {
  const { control } = useFormContext();
  const values = useWatch({ control });
  const { data } = useNissabQuery();
  const getNissabValue = useNissabStore((state) => state.getNissabValue);

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
    totalAssets: calculateTotal(),
    zakatPayable: calculateZakat(),
  };
}
