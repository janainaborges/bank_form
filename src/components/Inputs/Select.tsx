import React, { useState } from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa6";

interface Props {
  active?: boolean
  disabled?: boolean
}
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const DropdownButton = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? "red" : "#ccc")};
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "white")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownContent = styled.div<Props>`
  width: 100%;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  ${DropdownContainer}:hover & {
    display: ${(props) => (props.disabled ? "none" : "block")};
  }
`;

const OptionStyled = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ccc;
  }
`;


const Select = ({ options, placeholder, active,disabled,  ...props }: any) => {
  const [selected, setSelected] = useState("");

  return (
    <DropdownContainer>
      <DropdownButton active={active} disabled={disabled}{...props}>{selected || placeholder}<FaCaretDown /></DropdownButton>
      <DropdownContent disabled={disabled}>
        {options.map((option: any) => (
          <OptionStyled key={option.value} onClick={() => setSelected(option.label)}>
            {option.label}
          </OptionStyled>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Select;
