import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { useTranslation } from 'react-i18next';

import LanguageToggle from '../language-toggle';

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: vi.fn(),
}));

describe('LanguageToggle', () => {
  const changeLanguageMock = vi.fn();

  beforeEach(() => {
    // Reset the mock implementation before each test
    vi.clearAllMocks();

    // Mock useTranslation to return a default implementation
    (useTranslation as Mock).mockReturnValue({
      i18n: {
        changeLanguage: changeLanguageMock,
        language: 'en', // Default language
      },
      t: (key: string) => key, // Mock translation function
    });
  });

  it('renders the component with the default language flag (English)', () => {
    render(<LanguageToggle />);

    // Check if the button with the UK flag is rendered
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.querySelector('.fi-gb')).toBeInTheDocument(); // UK flag
  });

  it('renders the French flag when the language is set to French', () => {
    // Override the mock to return French as the current language
    (useTranslation as Mock).mockReturnValue({
      i18n: {
        changeLanguage: changeLanguageMock,
        language: 'fr', // Set language to French
      },
      t: (key: string) => key,
    });

    render(<LanguageToggle />);

    // Check if the button with the French flag is rendered
    const button = screen.getByRole('button');
    expect(button.querySelector('.fi-fr')).toBeInTheDocument(); // French flag
  });

  it('opens the dropdown menu when the button is clicked', async () => {
    render(<LanguageToggle />);

    // Click the button to open the dropdown
    const button = screen.getByRole('button');
    await userEvent.click(button);

    // Check if the dropdown menu is visible
    const englishOption = screen.getByText('toggle_language.english');
    const frenchOption = screen.getByText('toggle_language.french');
    expect(englishOption).toBeInTheDocument();
    expect(frenchOption).toBeInTheDocument();
  });

  it('changes the language to English when the English option is clicked', async () => {
    render(<LanguageToggle />);

    // Open the dropdown
    const button = screen.getByRole('button');
    await userEvent.click(button);

    // Click the English option
    const englishOption = screen.getByText('toggle_language.english');
    await userEvent.click(englishOption);

    // Verify that changeLanguage was called with "en"
    expect(changeLanguageMock).toHaveBeenCalledWith('en');
  });

  it('changes the language to French when the French option is clicked', async () => {
    render(<LanguageToggle />);

    // Open the dropdown
    const button = screen.getByRole('button');
    await userEvent.click(button);

    // Click the French option
    const frenchOption = screen.getByText('toggle_language.french');
    await userEvent.click(frenchOption);

    // Verify that changeLanguage was called with "fr"
    expect(changeLanguageMock).toHaveBeenCalledWith('fr');
  });

  it('handles missing i18n instance gracefully', () => {
    // Override the mock to return null for i18n
    (useTranslation as Mock).mockReturnValue({
      i18n: null,
      t: (key: string) => key,
      language: 'en' 
    });

    render(<LanguageToggle />);

    // Verify that the button is still rendered
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});