import React from "react";
import styled from "@emotion/styled";

import { useThemeConfig, ComponentProps } from "theme/config";

export interface ButtonProps extends ComponentProps {
  children: React.ReactNode | React.ReactNodeArray;
}

export const Button = ({
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const themeCSS = useThemeConfig({ ...props, tag: "button" });
  return (
    <ButtonJSX className={className} themeCSS={themeCSS} {...props}>
      {children}
    </ButtonJSX>
  );
};

const ButtonJSX = styled.button<ButtonProps>`
  outline: none;
  border: 0;
  background-color: transparent;
  ${(props) => props.themeCSS};
`;
