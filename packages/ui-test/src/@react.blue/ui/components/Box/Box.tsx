import React from "react";
import styled from "@emotion/styled";

import { useThemeConfig, ComponentProps } from "@react.blue/ui";

export interface BoxProps extends ComponentProps {
  flex?: boolean;
  flexDirection?: "row" | "column";
  alignItems?: string;
  justifyContent?: string;

  grid?: boolean;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridGap?: string;
  gridRowGap?: string;
  gridColumnGap?: string;
}

export const Box = ({
  className,
  children,
  ...props
}: BoxProps): JSX.Element => {
  const themeCSS = useThemeConfig({ ...props, component: "box" });

  return (
    <BoxJSX className={className} themeCSS={themeCSS} {...props}>
      {children}
    </BoxJSX>
  );
};

const BoxJSX = styled.div<BoxProps>`
  ${(props) => props.themeCSS};
  ${(props) =>
    props.flex &&
    `
    display: flex;
    ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
    ${props.alignItems && `align-items: ${props.alignItems}`};
    ${props.justifyContent && `justify-content: ${props.justifyContent}`};
  `}
  ${(props) =>
    props.grid &&
    `
    display: grid;
    ${
      props.gridTemplateColumns
        ? `grid-template-columns: ${props.gridTemplateColumns};`
        : ""
    }
    ${
      props.gridTemplateRows
        ? `grid-template-rows: ${props.gridTemplateRows};`
        : ""
    }
    ${props.gridGap ? `gap: ${props.gridGap};` : ""}
    ${props.gridRowGap ? `row-gap: ${props.gridRowGap};` : ""}
    ${props.gridColumnGap ? `column-gap: ${props.gridColumnGap};` : ""}
  `};
`;
