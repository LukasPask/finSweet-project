import React from 'react';
// Style
import { StyledInput } from './Styles/Input.style';

const Input = ({ placeholder, type }) => {
  return <StyledInput placeholder={placeholder} type={type} />;
};

export default Input;
