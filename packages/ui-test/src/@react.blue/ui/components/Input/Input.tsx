import React from "react";
import styled from "@emotion/styled";

import { useThemeConfig, ComponentProps } from "@react.blue/ui";

export interface InputProps extends ComponentProps {}

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  const themeCSS = useThemeConfig({ ...props, component: "input" });
  return <InputJSX className={className} {...props} />;
};

const InputJSX = styled.input``;
