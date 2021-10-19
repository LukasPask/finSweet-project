import React from 'react';
// Style
import { StyledBubble, StyledText } from './Styles/Bubble.style';

const Bubble = ({ size, color, text, textColor, textSize }) => {
  return (
    <StyledBubble
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        color: textColor,
        fontSize: textSize,
      }}
    >
      <StyledText>{text}</StyledText>
    </StyledBubble>
  );
};

export default Bubble;
