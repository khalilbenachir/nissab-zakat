export interface NissabResponse {
  nissab_value: number;
  base_currency: string;
  base_weight_unit: string;
  gold_price: number;
  silver_price: number;
  nissab_gold_threshold: number;
  nissab_silver_threshold: number;
  last_metal_price_update_date: string;
  last_currency_update_date: string;
  currency_exchange_rates: Record<string, number>;
}

export async function fetchNissabValues(currency: string = "USD"): Promise<NissabResponse> {
  const response = await fetch(`${import.meta.env.VITE_NISSAB_API_URL}?currency=${currency}`);
  if (!response.ok) {
    throw new Error('Failed to fetch nissab values');
  }
  return response.json();
} 