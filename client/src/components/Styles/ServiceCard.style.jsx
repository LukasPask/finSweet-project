import styled from 'styled-components';

export const StyledServiceCard = styled.div`
  background-color: var(--light-color);
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  &:hover {
    background-color: var(--orangeish-color);
    color: var(--light-color);
    cursor: pointer;
  }
`;
