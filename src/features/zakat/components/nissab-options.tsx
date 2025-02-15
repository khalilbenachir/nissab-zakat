import { Skeleton } from "@/components/ui/skeleton";

import { useNissabInformation } from "../hooks/use-nissab-information";
import { useNissabStore } from "../store/use-nissab-store";
import { NissabCard } from "./nissab-card";

export const NissabOptions = () => {
  const { nessabDetails, loading, currentCurrency } = useNissabInformation();
  const { selectedNissab } = useNissabStore();

  if (loading) {
    return <Skeleton className="h-[200px] w-full" />;
  }

  return (
    <div className="grid gap-4">
      <NissabCard
        type="gold"
        selectedNissab={selectedNissab}
        threshold={
          (nessabDetails?.nissab_gold_threshold ?? 0) *
          (currentCurrency?.nissab ?? 1)
        }
        price={
          (nessabDetails?.gold_price ?? 0) * (currentCurrency?.nissab ?? 1)
        }
        currency={{ symbol: currentCurrency?.symbol || "" }}
      />
      <NissabCard
        type="silver"
        selectedNissab={selectedNissab}
        threshold={
          (nessabDetails?.nissab_silver_threshold ?? 0) *
          (currentCurrency?.nissab ?? 1)
        }
        price={
          (nessabDetails?.silver_price ?? 0) * (currentCurrency?.nissab ?? 1)
        }
        currency={{ symbol: currentCurrency?.symbol || "" }}
      />
    </div>
  );
};
