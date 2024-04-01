import React from 'react';
import styled from 'styled-components';

interface Props {
  active: boolean
}

const InputStyled = styled.input<Props>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? "red" : "#ccc")};
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color:#2797BA;
    outline: none;
  }
`;

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  setValue: (value: string) => void;
  formatValue?: (value: string) => string; 
  active: boolean | any;
};

const Input: React.FC<InputProps> = ({ setValue, formatValue,active,  ...props }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatValue ? formatValue(rawValue) : rawValue;
    setValue(formattedValue);
  };

  return <InputStyled {...props} onChange={handleChange} active={active} />;
};

export default Input;
