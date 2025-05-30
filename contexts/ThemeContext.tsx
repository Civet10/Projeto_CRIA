import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme, Appearance } from 'react-native';

type ThemeType = 'light' | 'dark';

interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  background: string;
  cardBackground: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  error: string;
  warning: string;
  success: string;
}

export const lightColors: ThemeColors = {
  primary: '#5B8B67',     // Green
  secondary: '#9E7B6E',   // Earth brown
  tertiary: '#14B8A6',    // Teal
  accent: '#E6A919',      // Warm yellow
  background: '#F9F7F4',  // Off-white
  cardBackground: '#FFFFFF',
  textPrimary: '#333333',
  textSecondary: '#6B6B6B',
  textTertiary: '#999999',
  error: '#E53935',
  warning: '#FFB74D',
  success: '#43A047',
};

export const darkColors: ThemeColors = {
  primary: '#5B8B67',     // Green
  secondary: '#9E7B6E',   // Earth brown
  tertiary: '#14B8A6',    // Teal
  accent: '#E6A919',      // Warm yellow
  background: '#2C2721',  // Dark earth tone
  cardBackground: '#3C3732',
  textPrimary: '#FFFFFF',
  textSecondary: '#B3B3B3',
  textTertiary: '#808080',
  error: '#EF5350',
  warning: '#FFD54F',
  success: '#66BB6A',
};

interface ThemeContextType {
  theme: ThemeType;
  isDark: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  isDark: false,
  colors: lightColors,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeType>(colorScheme || 'light');

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme as ThemeType || 'light');
    });

    return () => subscription.remove();
  }, []);

  const isDark = theme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);