import styled from 'styled-components';

export const PrimaryButton = styled.button`
  border: none;
  border-radius: 12px;
  background-color: var(--orangeish-color);
  color: var(--light-color);
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const SecondaryButton = styled.button`
  border: none;
  border-radius: 12px;
  background-color: var(--dark-color);
  color: var(--light-color);
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
