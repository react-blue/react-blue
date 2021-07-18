import React, { useMemo } from 'react';
import styled from '@emotion/styled';

interface GetFontSizeProps {
  minWidth?: number;
  maxWidth?: number;
  minFont?: number;
  maxFont?: number;
}

interface TextProps extends GetFontSizeProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  p?: boolean;
  className?: string;
  children: React.ReactNode;
}

const MOBILE = 2;
const DESKTOP = MOBILE * 1.25;

export const Text = ({
  h1,
  h2,
  h3,
  p,
  className,
  children,
  ...props
}: TextProps) => {
  const type = useMemo(() => {
    if (h1) return 'h1';
    if (h2) return 'h2';
    if (h3) return 'h3';
    return 'p';
  }, [h1, h2, h3, p]);

  switch (type) {
    case 'h1':
      return (
        <StyledTextTitle1 className={className} {...props}>
          {children}
        </StyledTextTitle1>
      );
    case 'h2':
      return (
        <StyledTextTitle2 className={className} {...props}>
          {children}
        </StyledTextTitle2>
      );
    case 'h3':
      return (
        <StyledTextTitle3 className={className} {...props}>
          {children}
        </StyledTextTitle3>
      );
    default:
      return (
        <StyledTextNormal className={className} {...props}>
          {children}
        </StyledTextNormal>
      );
  }
};

const getStripUnit = (value: number): number => {
  return value * (value * 0 + 1);
};

const getFontSize = ({
  minWidth = 768,
  maxWidth = 1080,
  minFont = MOBILE * 10,
  maxFont = DESKTOP * 10,
}: GetFontSizeProps) =>
  `& {
    font-size: ${minFont}px;
    @media screen and (min-width: ${minWidth}px) {
      font-size: calc(${minFont}px + ${getStripUnit(
    maxFont - minFont
  )} * ((100vw - ${minWidth}px) / ${getStripUnit(maxWidth - minWidth)}));
    }
    @media screen and (min-width: ${maxWidth}px) {
      font-size: ${maxFont}px;
    }
  }`;

const StyledTextTitle1 = styled.h1<TextProps>`
  font-weight: 900;
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.4;

  ${(props) => {
    const { minWidth, maxWidth, minFont, maxFont } = props;

    return getFontSize({
      minWidth: minWidth || 400,
      maxWidth: maxWidth || 1160,
      minFont: minFont || MOBILE * 24,
      maxFont: maxFont || DESKTOP * 24,
    });
  }}
`;
const StyledTextTitle2 = styled.h2<TextProps>`
  font-weight: 700;
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.4;

  ${(props) => {
    const { minWidth, maxWidth, minFont, maxFont } = props;

    return getFontSize({
      minWidth: minWidth || 400,
      maxWidth: maxWidth || 1160,
      minFont: minFont || MOBILE * 20,
      maxFont: maxFont || DESKTOP * 20,
    });
  }}
`;
const StyledTextTitle3 = styled.h3<TextProps>`
  font-weight: 700;
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.4;

  ${(props) => {
    const { minWidth, maxWidth, minFont, maxFont } = props;

    return getFontSize({
      minWidth: minWidth || 400,
      maxWidth: maxWidth || 1160,
      minFont: minFont || MOBILE * 16,
      maxFont: maxFont || DESKTOP * 16,
    });
  }}
`;
const StyledTextNormal = styled.p<TextProps>`
  font-weight: 300;
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.2;

  ${(props) => {
    const { minWidth, maxWidth, minFont, maxFont } = props;

    return getFontSize({
      minWidth: minWidth || 400,
      maxWidth: maxWidth || 1160,
      minFont: minFont || MOBILE * 10,
      maxFont: maxFont || DESKTOP * 10,
    });
  }}
`;
