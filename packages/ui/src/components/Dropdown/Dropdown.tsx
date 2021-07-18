import React, { useRef } from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useCallback } from "react";

export interface DropdownProps {
  children: React.ReactNode;
  items: React.ReactNodeArray;
}

export const Dropdown = ({
  children,
  items,
}: DropdownProps): React.ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  const itemList = items.map((item: React.ReactNode, index: number) => (
    <DropdownItem key={`dropdown-item-${index}`}>{item}</DropdownItem>
  ));

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownContent onClick={onClick}>{children}</DropdownContent>
      {isOpen && (
        <DropdownItemList ref={contentRef}>{itemList}</DropdownItemList>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownContent = styled.div``;

const DropdownItemList = styled.div`
  position: absolute;
`;

const DropdownItem = styled.div``;
