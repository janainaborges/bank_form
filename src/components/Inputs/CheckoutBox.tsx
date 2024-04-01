import React from 'react';
import styled, { css } from 'styled-components';

interface CheckoutBoxProps {
  isSelected: boolean;
}

const CheckoutBoxStyles = css<CheckoutBoxProps>`
  width: 20px;
  height: 20px;
  border-radius: 8%;
  border: 1px solid #ccc;
  appearance: none;
  outline: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  background-color: ${(props) => props.isSelected ? '#2797BA' : 'transparent'};
  color: ${(props) => props.isSelected ? 'white' : 'black'};

  &:after {
    content: ${(props) => props.isSelected ? '"✓"' : '""'};
    position: absolute;
    font-size: 18px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: ${(props) => props.isSelected ? '#2797BA' : '#f0f0f0'};
  }
`;

export const Box = styled.section`
  display: flex;
  gap: 10px;
  padding: 8px 0;
  width: 100%;
`;

const CheckoutBox = styled.div<CheckoutBoxProps>`
  ${CheckoutBoxStyles}
`;

interface CheckoutOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const CheckoutOption: React.FC<CheckoutOptionProps> = ({ label, selected, onClick }) => {
  return (
    <Box>
    <CheckoutBox isSelected={selected} onClick={onClick}>
    
    </CheckoutBox>
     {label}
     </Box>
  );
};

export default CheckoutOption;
