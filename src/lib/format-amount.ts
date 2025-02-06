type FormatAmountOptions = {
  currency?: string;
  locale?: string;
  decimals?: number;
};

export function formatAmount(
  amount: number,
  { currency = "USD", locale = "en-US", decimals = 2 }: FormatAmountOptions = {}
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: true,
  }).format(amount);
}
