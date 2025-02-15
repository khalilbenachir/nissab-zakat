import { create } from "zustand";
import { persist } from "zustand/middleware";

import { NissabResponse } from "../api/nissab";

export type NissabType = "gold" | "silver";

const DEFAULT_CURRENCY = "USD";
const DEFAULT_NISSAB_TYPE = "gold";

interface NissabStore {
  selectedNissab: NissabType | null;
  currency: string;
  setSelectedNissab: (type: NissabType) => void;
  setCurrency: (currency: string) => void;
  getNissabValue: (data: NissabResponse | undefined) => number | undefined;
}

export const useNissabStore = create<NissabStore>()(
  persist(
    (set, get) => ({
      selectedNissab: null,
      currency: DEFAULT_CURRENCY,
      setSelectedNissab: (type) => set({ selectedNissab: type }),
      setCurrency: (currency) => set({ currency }),
      getNissabValue: (data) => {
        const { selectedNissab } = get();
        if (!data || !selectedNissab) return undefined;

        return selectedNissab === DEFAULT_NISSAB_TYPE
          ? data.nissab_gold_threshold
          : data.nissab_silver_threshold;
      },
    }),
    {
      name: "nissab-store",
    }
  )
);
