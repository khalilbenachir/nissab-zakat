import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

import { useNissabStore } from "../use-nissab-store"; 
import { NissabResponse } from "../../api/nissab";

describe("useNissabStore", () => {
  beforeEach(() => {
    // Reset the store before each test
    useNissabStore.setState({
      selectedNissab: null,
      currency: "USD",
    });
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useNissabStore());

    expect(result.current.selectedNissab).toBeNull();
    expect(result.current.currency).toBe("USD");
  });

  it("should set selectedNissab", () => {
    const { result } = renderHook(() => useNissabStore());

    act(() => {
      result.current.setSelectedNissab("gold");
    });

    expect(result.current.selectedNissab).toBe("gold");
  });

  it("should set currency", () => {
    const { result } = renderHook(() => useNissabStore());

    act(() => {
      result.current.setCurrency("EUR");
    });

    expect(result.current.currency).toBe("EUR");
  });

  it("should get nissab value for gold", () => {
    const { result } = renderHook(() => useNissabStore());

    act(() => {
      result.current.setSelectedNissab("gold");
    });

    const testData: NissabResponse = {
      nissab_gold_threshold: 100,
      nissab_silver_threshold: 50,
    };

    const nissabValue = result.current.getNissabValue(testData);
    expect(nissabValue).toBe(100);
  });

  it("should get nissab value for silver", () => {
    const { result } = renderHook(() => useNissabStore());

    act(() => {
      result.current.setSelectedNissab("silver");
    });

    const testData: NissabResponse = {
      nissab_gold_threshold: 100,
      nissab_silver_threshold: 50,
    };

    const nissabValue = result.current.getNissabValue(testData);
    expect(nissabValue).toBe(50);
  });

  it("should return undefined if no nissab type is selected", () => {
    const { result } = renderHook(() => useNissabStore());

    const testData: NissabResponse = {
      nissab_gold_threshold: 100,
      nissab_silver_threshold: 50,
    };

    const nissabValue = result.current.getNissabValue(testData);
    expect(nissabValue).toBeUndefined();
  });

  it("should return undefined if no data is provided", () => {
    const { result } = renderHook(() => useNissabStore());

    act(() => {
      result.current.setSelectedNissab("gold");
    });

    const nissabValue = result.current.getNissabValue(undefined);
    expect(nissabValue).toBeUndefined();
  });
});