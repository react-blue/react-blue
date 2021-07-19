import React from "react";
import styled from "@emotion/styled";
import { useThemeConfig, ComponentProps } from "lib";

export interface IconProps extends ComponentProps {
  svg?: string;
}

export const Icon = ({
  className,
  svg,
  ...props
}: IconProps): JSX.Element | null => {
  const themeCSS = useThemeConfig({ ...props, tag: "icon" });
  if (!svg) return null;

  return (
    <IconJSX
      className={className}
      themeCSS={themeCSS}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...props}
    />
  );
};

const IconJSX = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.themeCSS};
`;
