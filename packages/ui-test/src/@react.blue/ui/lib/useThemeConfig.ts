import React, { useMemo } from "react";
import { useTheme, css } from "@emotion/react";
import { CustomTheme } from "./themeProvider";

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode | React.ReactNodeArray;
  themeCSS?: string;
  [key: string]: any;
}

interface ThemeConfigProps {
  [key: string]:
    | string
    | boolean
    | keyof JSX.IntrinsicElements
    | React.ReactNode
    | React.ReactNodeArray;
  component: "button" | "text" | "icon" | "input" | "box";
}

export const useThemeConfig = ({ component, ...props }: ThemeConfigProps) => {
  // 테마에 해당하는 태그 없으면 무시
  const theme: CustomTheme = useTheme();
  const colors = theme.colors;

  const serializeStyle = useMemo(() => {
    if (!theme[component]) return ``;
    // 태그에 해당하는 테마 찾기
    let objectKey: any = undefined;
    Object.entries(props).forEach(([key, value]: [string, any]) => {
      if (value) objectKey = key;
    });
    if (!objectKey || !theme[component][objectKey]) return ``;

    // 색깔 테마에서 찾고 있으면 지정
    const style: any = theme[component][objectKey];
    Object.entries(style).forEach(([key, value]: [string, any]) => {
      if (colors[value]) style[key] = colors[value];
    });
    return css(style)?.styles || "";
  }, [props]);

  console.log(serializeStyle);

  return serializeStyle;
};
