import React from 'react';
// Style
import { PrimaryButton, SecondaryButton } from './Styles/Button.style';

const Button = ({ text, action, primary, secondary, paddingY, paddingX }) => {
  let button;
  if (primary)
    button = (
      <PrimaryButton
        style={{ padding: `${paddingX} ${paddingY} ` }}
        onClick={action}
      >
        {text}
      </PrimaryButton>
    );
  if (secondary)
    button = (
      <SecondaryButton
        style={{ padding: `${paddingX} ${paddingY} ` }}
        onClick={action}
      >
        {text}
      </SecondaryButton>
    );
  return button;
};

export default Button;
