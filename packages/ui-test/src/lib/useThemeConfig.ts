import { useTheme, css } from "@emotion/react";
import { CustomTheme } from "./provider";

export interface ComponentProps {
  className?: string;
  themeCSS?: string;
  [key: string]: any;
}

interface ThemeConfigProps {
  [key: string]: string | boolean | keyof JSX.IntrinsicElements;
  tag: string;
}

export const useThemeConfig = ({ tag, ...props }: ThemeConfigProps) => {
  // 테마에 해당하는 태그 없으면 무시
  const theme: CustomTheme = useTheme();
  const colors = theme.colors;
  if (!theme[tag]) return ``;

  // 태그에 해당하는 테마 찾기
  let objectKey;
  Object.entries(props).forEach(([key, value]: [string, any]) => {
    if (value) objectKey = key;
  });
  if (!objectKey || !theme[tag][objectKey]) return ``;

  // 색깔 테마에서 찾고 있으면 지정
  const style: { [key: string]: string } = theme[tag][objectKey];
  Object.entries(style).forEach(([key, value]: [string, any]) => {
    if (colors[value]) style[key] = colors[value];
  });
  return css(style)?.styles || "";
};
