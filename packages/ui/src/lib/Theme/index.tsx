import "@emotion/react";
import React from "react";
import {
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps,
} from "@emotion/react";

export type CustomTheme = {
  colors: {
    primary: string;
    primaryVariant?: string;
    secondary?: string;
    secondaryVariant?: string;
    text: string;
    info: string;
    background: string;
    error: string;
  };
  font: {
    primary: string;
    secondary: string;
  };
};

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}

interface ThemeProviderProps extends EmotionThemeProviderProps {
  children: React.ReactNode;
}

export const defaultTheme: CustomTheme = {
  colors: {
    primary: "#3562ff",
    primaryVariant: "",
    secondary: "",
    secondaryVariant: "",
    text: "#1a1a1a",
    info: "",
    background: "",
    error: "",
  },
  font: {
    primary: "Noto Sans KR",
    secondary: "",
  },
};

export const lightTheme: CustomTheme = {
  colors: {
    ...defaultTheme.colors,
  },
  font: {
    ...defaultTheme.font,
  },
};

export const darkTheme: CustomTheme = {
  colors: {
    ...defaultTheme.colors,
  },
  font: {
    ...defaultTheme.font,
  },
};

export const getTheme = (type: "light" | "dark"): CustomTheme =>
  type === "light" ? lightTheme : darkTheme;

export const ThemeProvider = ({
  children,
  theme,
  ...props
}: ThemeProviderProps) => {
  return (
    <EmotionThemeProvider theme={theme || defaultTheme} {...props}>
      {children}
    </EmotionThemeProvider>
  );
};
