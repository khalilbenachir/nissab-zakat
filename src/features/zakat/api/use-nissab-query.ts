import { useQuery } from "@tanstack/react-query";

import { fetchNissabValues } from "./nissab";

export function useNissabQuery() {
  return useQuery({
    queryKey: ["nissab"],
    queryFn: () => fetchNissabValues(),
    staleTime: 1000 * 60 * 60 * 24,
    refetchInterval: 1000 * 60 * 60 * 24,
  });
}
