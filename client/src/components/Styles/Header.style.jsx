import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--light-color);
  width: 100%;
`;

export const StyledHeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DisplayFlexRow = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;

export const DisplayFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledNavigation = styled.nav`
  width: 60%;
  display: flex;
  align-items: center;
`;

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledLink = styled.li`
  & a {
    text-decoration: none;
    color: var(--dark-color);
    font-weight: 600;
  }
  & a:hover {
    color: var(--darker-grey-color);
  }
`;

export const VerticalSeperator = styled.div`
  width: 1px;
  height: 42px;
  border-radius: 10px;
  background-color: var(--lighter-grey-color);
  margin-right: 15px;
  margin-left: 15px;
`;
