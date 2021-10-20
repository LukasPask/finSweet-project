// imports
import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { FaPhoneAlt } from 'react-icons/fa';
// Components
import Bubble from './Bubble';
import Text from './Text';
// Style
import {
  StyledHeader,
  StyledHeaderWrapper,
  VerticalSeperator,
  StyledNavigation,
  StyledList,
  StyledLink,
  DisplayFlexRow,
  DisplayFlexColumn,
} from './Styles/Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <div>
          <Text headSix text='{finsweet' />
        </div>
        <DisplayFlexRow>
          <StyledNavigation>
            <StyledList>
              <StyledLink>
                <Link to='/'>Home</Link>
              </StyledLink>
              <StyledLink>
                <Link to='/about'>About</Link>
              </StyledLink>
              <StyledLink>
                <Link to='/services'>Services</Link>
              </StyledLink>
              <StyledLink>
                <Link to='/blog'>Blog</Link>
              </StyledLink>
              <StyledLink>
                <Link to='/contacts'>Contact</Link>
              </StyledLink>
            </StyledList>
          </StyledNavigation>
          <VerticalSeperator></VerticalSeperator>
          <Bubble
            size='42px'
            color='var(--greenish-color)'
            text={<FaPhoneAlt />}
            textColor='var(--light-color)'
            textSize='20px'
          />
          <DisplayFlexColumn>
            <Text parTwo text='Road assistance' />
            <Text parOne text='1800 265 24 52' />
          </DisplayFlexColumn>
        </DisplayFlexRow>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
