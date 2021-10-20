import React from 'react';
import { StyledServiceCard } from './Styles/ServiceCard.style';

const ServiceCard = ({ text, direction, width, height }) => {
  return (
    <StyledServiceCard
      style={{ flexDirection: direction, width: width, height: height }}
    >
      {text}
    </StyledServiceCard>
  );
};

export default ServiceCard;
