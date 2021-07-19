import { useMemo } from "react";
import { CSSInterpolation } from "@emotion/serialize";
import {
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps,
  Global as EmotionGlobal,
  css,
} from "@emotion/react";
import normalize from "./normalize";

export type CustomThemeColors = { [key: string]: string };
export type CustomThemeComponents = {
  [theme: string]: React.CSSProperties;
};

export type CustomTheme = {
  colors: CustomThemeColors;
  button: CustomThemeComponents;
  text: CustomThemeComponents;
  icon: CustomThemeComponents;
  // [key: string]: string | { [theme: string]: string | React.CSSProperties };
};

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}

export interface ThemeProviderProps extends EmotionThemeProviderProps {
  theme: CustomTheme;
  global?: CSSInterpolation;
}

export const createGlobal = (props: CSSInterpolation) =>
  css`
    ${`${normalize}${props}` || `${normalize}`}
  `;

export const ThemeProvider = ({
  global,
  theme,
  children,
}: ThemeProviderProps) => {
  const globalStyles = useMemo(() => createGlobal(global), [global]);

  return (
    <EmotionThemeProvider theme={theme}>
      <EmotionGlobal styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
};
