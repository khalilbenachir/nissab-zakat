import { create } from "zustand";
import { useQuery } from "@tanstack/react-query";

import { fetchNissabValues, NissabResponse } from "../api/nissab";

export type NissabType = "gold" | "silver";

interface NissabStore {
  selectedNissab: NissabType | null;
  currency: string;
  setSelectedNissab: (type: NissabType) => void;
  setCurrency: (currency: string) => void;
  getNissabValue: (data: NissabResponse | undefined) => number | undefined;
}

export const useNissabStore = create<NissabStore>((set, get) => ({
  selectedNissab: null,
  currency: "USD",
  setSelectedNissab: (type) => set({ selectedNissab: type }),
  setCurrency: (currency) => set({ currency }),
  getNissabValue: (data) => {
    const { selectedNissab } = get();
    if (!data || !selectedNissab) return undefined;

    return selectedNissab === "gold"
      ? data.nissab_gold_threshold
      : data.nissab_silver_threshold;
  },
}));

export function useNissabQuery() {
  return useQuery({
    queryKey: ["nissab"],
    queryFn: () => fetchNissabValues(),
    staleTime: 1000 * 60 * 60 * 24,
    refetchInterval: 1000 * 60 * 60 * 24,
  });
}
