import styled from 'styled-components';

export const StyledFooter = styled.footer`
  bottom: 0;
  width: 100%;
  height: 706px;
  background-color: var(--dark-color);
`;

export const FooterWrapper = styled.footer`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80%;
`;

export const TopFooterLeftSide = styled.div`
  width: 40%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopFooterRightSide = styled.div`
  width: 40%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopFooterRightSideInfoBox = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SocialIconsBox = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  color: var(--light-color);
  & svg {
    font-size: 20px;
  }
  & svg:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const StyledNavigation = styled.nav`
  width: 40%;
  display: flex;
  align-items: center;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  max-width: 1200px;
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
    color: var(--light-color);
    font-weight: 600;
  }
  & a:hover {
    color: var(--darker-grey-color);
  }
`;
