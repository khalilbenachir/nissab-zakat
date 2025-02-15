import { useEffect, useMemo } from "react";

import { useNissabQuery } from "../api/use-nissab-query";
import { useNissabStore } from "../store/use-nissab-store";
import {
  getCurrentCurrency,
  normalizeCurrencyList,
} from "../utils/normalize-currency-list";

export const useNissabInformation = () => {
  const { setSelectedNissab, currency } = useNissabStore();
  const { data, isLoading, isError } = useNissabQuery();

  const currencies = useMemo(() => {
    if (data?.currency_exchange_rates) {
      return normalizeCurrencyList(data.currency_exchange_rates);
    }
    return [];
  }, [data?.currency_exchange_rates]);
  const currentCurrency = useMemo(
    () => getCurrentCurrency(currencies, { name: currency }),
    [currencies, currency]
  );

  useEffect(() => {
    if (data?.gold_price) {
      setSelectedNissab("gold");
    }
  }, [data?.gold_price, setSelectedNissab]);

  return {
    currencies,
    loading: isLoading,
    hasError: isError,
    nessabDetails: data,
    currentCurrency,
  };
};
