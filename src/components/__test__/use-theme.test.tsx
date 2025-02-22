import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { useTheme } from "../theme-toggle/use-theme";
import ThemeProvider from "../theme-toggle/theme-provider";

describe("useTheme", () => {
  it("should initialize with the default theme", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider, // Wrap the hook with the provider
    });

    expect(result.current.theme).toBe("system"); // Replace with your default theme
  });

  it("should update the theme", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider, // Wrap the hook with the provider
    });

    act(() => {
      result.current.setTheme("dark"); // Update the theme
    });

    expect(result.current.theme).toBe("dark");
  });
});
