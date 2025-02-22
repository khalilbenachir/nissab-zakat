import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import ThemeProvider from '../theme-toggle/theme-provider'

describe('ThemeProvider', () => {
  it('renders children with default theme', () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Child Component</div>
      </ThemeProvider>
    )
    
    const child = screen.getByTestId('child')
    expect(child).toBeInTheDocument()
    console.log(document.documentElement.classList)
    expect(document.documentElement.classList.contains('light')).toBeTruthy()
  })

  it('applies dark theme when system preference is dark', () => {
    // Mock system dark mode preference
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    render(
      <ThemeProvider>
        <div>Child Component</div>
      </ThemeProvider>
    )

    expect(document.documentElement.classList.contains('dark')).toBeTruthy()
  })
}) 