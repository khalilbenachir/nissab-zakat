export type Currency = {
  name: string;
  symbol: string;
  nissab?: number;
};

type AvailableCurrencies = {
  [key: string]: number;
};

export type NormalizedCurrencyList = {
  [key: string]: Currency;
};

const CURRENCY_LIST: Currency[] = [
  { name: "USD", symbol: "$" },
  { name: "AED", symbol: "د.إ" },
  { name: "AFN", symbol: "؋" },
  { name: "ALL", symbol: "L" },
  { name: "AMD", symbol: "֏" },
  { name: "ANG", symbol: "ƒ" },
  { name: "AOA", symbol: "Kz" },
  { name: "ARS", symbol: "$" },
  { name: "AUD", symbol: "$" },
  { name: "AWG", symbol: "ƒ" },
  { name: "AZN", symbol: "₼" },
  { name: "BAM", symbol: "KM" },
  { name: "BBD", symbol: "$" },
  { name: "BDT", symbol: "৳" },
  { name: "BGN", symbol: "лв" },
  { name: "BHD", symbol: ".د.ب" },
  { name: "BIF", symbol: "FBu" },
  { name: "BMD", symbol: "$" },
  { name: "BND", symbol: "$" },
  { name: "BOB", symbol: "Bs" },
  { name: "BRL", symbol: "R$" },
  { name: "BSD", symbol: "$" },
  { name: "BTN", symbol: "Nu." },
  { name: "BWP", symbol: "P" },
  { name: "BYN", symbol: "Br" },
  { name: "BZD", symbol: "$" },
  { name: "CAD", symbol: "$" },
  { name: "CDF", symbol: "FC" },
  { name: "CHF", symbol: "CHF" },
  { name: "CLP", symbol: "$" },
  { name: "CNY", symbol: "¥" },
  { name: "COP", symbol: "$" },
  { name: "CRC", symbol: "₡" },
  { name: "CUP", symbol: "$" },
  { name: "CVE", symbol: "$" },
  { name: "CZK", symbol: "Kč" },
  { name: "DJF", symbol: "Fdj" },
  { name: "DKK", symbol: "kr" },
  { name: "DOP", symbol: "$" },
  { name: "DZD", symbol: "د.ج" },
  { name: "EGP", symbol: "£" },
  { name: "ERN", symbol: "Nfk" },
  { name: "ETB", symbol: "Br" },
  { name: "EUR", symbol: "€" },
  { name: "FJD", symbol: "$" },
  { name: "FKP", symbol: "£" },
  { name: "FOK", symbol: "kr" },
  { name: "GBP", symbol: "£" },
  { name: "GEL", symbol: "₾" },
  { name: "GGP", symbol: "£" },
  { name: "GHS", symbol: "₵" },
  { name: "GIP", symbol: "£" },
  { name: "GMD", symbol: "D" },
  { name: "GNF", symbol: "FG" },
  { name: "GTQ", symbol: "Q" },
  { name: "GYD", symbol: "$" },
  { name: "HKD", symbol: "$" },
  { name: "HNL", symbol: "L" },
  { name: "HRK", symbol: "kn" },
  { name: "HTG", symbol: "G" },
  { name: "HUF", symbol: "Ft" },
  { name: "IDR", symbol: "Rp" },
  { name: "ILS", symbol: "₪" },
  { name: "IMP", symbol: "£" },
  { name: "INR", symbol: "₹" },
  { name: "IQD", symbol: "ع.د" },
  { name: "IRR", symbol: "﷼" },
  { name: "ISK", symbol: "kr" },
  { name: "JEP", symbol: "£" },
  { name: "JMD", symbol: "$" },
  { name: "JOD", symbol: "د.ا" },
  { name: "JPY", symbol: "¥" },
  { name: "KES", symbol: "Ksh" },
  { name: "KGS", symbol: "с" },
  { name: "KHR", symbol: "៛" },
  { name: "KID", symbol: "$" },
  { name: "KMF", symbol: "CF" },
  { name: "KRW", symbol: "₩" },
  { name: "KWD", symbol: "د.ك" },
  { name: "KYD", symbol: "$" },
  { name: "KZT", symbol: "₸" },
  { name: "LAK", symbol: "₭" },
  { name: "LBP", symbol: "ل.ل" },
  { name: "LKR", symbol: "Rs" },
  { name: "LRD", symbol: "$" },
  { name: "LSL", symbol: "L" },
  { name: "LYD", symbol: "ل.د" },
  { name: "MAD", symbol: "د.م." },
  { name: "MDL", symbol: "L" },
  { name: "MGA", symbol: "Ar" },
  { name: "MKD", symbol: "ден" },
  { name: "MMK", symbol: "K" },
  { name: "MNT", symbol: "₮" },
  { name: "MOP", symbol: "MOP$" },
  { name: "MRU", symbol: "UM" },
  { name: "MUR", symbol: "₨" },
  { name: "MVR", symbol: "ރ." },
  { name: "MWK", symbol: "MK" },
  { name: "MXN", symbol: "$" },
  { name: "MYR", symbol: "RM" },
  { name: "MZN", symbol: "MT" },
  { name: "NAD", symbol: "$" },
  { name: "NGN", symbol: "₦" },
  { name: "NIO", symbol: "C$" },
  { name: "NOK", symbol: "kr" },
  { name: "NPR", symbol: "₨" },
  { name: "NZD", symbol: "$" },
  { name: "OMR", symbol: "﷼" },
  { name: "PAB", symbol: "B/." },
  { name: "PEN", symbol: "S/." },
  { name: "PGK", symbol: "K" },
  { name: "PHP", symbol: "₱" },
  { name: "PKR", symbol: "₨" },
  { name: "PLN", symbol: "zł" },
  { name: "PYG", symbol: "₲" },
  { name: "QAR", symbol: "﷼" },
  { name: "RON", symbol: "lei" },
  { name: "RSD", symbol: "дин." },
  { name: "RUB", symbol: "₽" },
  { name: "RWF", symbol: "FRw" },
  { name: "SAR", symbol: "﷼" },
  { name: "SBD", symbol: "$" },
  { name: "SCR", symbol: "₨" },
  { name: "SDG", symbol: "ج.س." },
  { name: "SEK", symbol: "kr" },
  { name: "SGD", symbol: "$" },
  { name: "SHP", symbol: "£" },
  { name: "SLE", symbol: "Le" },
  { name: "SLL", symbol: "Le" },
  { name: "SOS", symbol: "S" },
  { name: "SRD", symbol: "$" },
  { name: "SSP", symbol: "£" },
  { name: "STN", symbol: "Db" },
  { name: "SYP", symbol: "£" },
  { name: "SZL", symbol: "L" },
  { name: "THB", symbol: "฿" },
  { name: "TJS", symbol: "ЅМ" },
  { name: "TMT", symbol: "T" },
  { name: "TND", symbol: "د.ت" },
  { name: "TOP", symbol: "T$" },
  { name: "TRY", symbol: "₺" },
  { name: "TTD", symbol: "$" },
  { name: "TVD", symbol: "$" },
  { name: "TWD", symbol: "NT$" },
  { name: "TZS", symbol: "TSh" },
  { name: "UAH", symbol: "₴" },
  { name: "UGX", symbol: "USh" },
  { name: "UYU", symbol: "$" },
  { name: "UZS", symbol: "so'm" },
  { name: "VES", symbol: "Bs.S" },
  { name: "VND", symbol: "₫" },
  { name: "VUV", symbol: "VT" },
  { name: "WST", symbol: "T" },
  { name: "XAF", symbol: "FCFA" },
  { name: "XCD", symbol: "$" },
  { name: "XDR", symbol: "SDR" },
  { name: "XOF", symbol: "CFA" },
  { name: "XPF", symbol: "₣" },
  { name: "YER", symbol: "﷼" },
  { name: "ZAR", symbol: "R" },
  { name: "ZMW", symbol: "ZK" },
  { name: "ZWL", symbol: "$" },
];

export const normalizeCurrencyList = (
  availableCurrencies: AvailableCurrencies
): Currency[] => {
  return CURRENCY_LIST.reduce((acc, currency) => {
    if (availableCurrencies?.[currency.name]) {
      acc.push({
        name: currency.name,
        symbol: currency.symbol,
        nissab: availableCurrencies[currency.name],
      });
    }
    return acc;
  }, [] as Currency[]);
};

export const getCurrentCurrency = (
  currencies: Currency[],
  currency: Pick<Currency, "name">
) => {
  if (!currencies?.length || !currency) {
    return CURRENCY_LIST.find((curr) => curr?.name === "USD");
  }

  return currencies.find((curr) => curr.name === currency.name);
};
