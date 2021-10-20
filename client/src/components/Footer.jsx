import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Text from './Text';
// Icons
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
// Style
import {
  StyledFooter,
  FooterWrapper,
  FooterTop,
  SocialIconsBox,
  StyledNavigation,
  FooterBottom,
  StyledList,
  StyledLink,
  TopFooterLeftSide,
  TopFooterRightSide,
  TopFooterRightSideInfoBox,
} from './Styles/Footer.style';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterTop>
          <TopFooterLeftSide>
            <Text
              headThree
              textColor='var(--light-color)'
              text='Get in youch with us for your service'
            />
            <SocialIconsBox>
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
            </SocialIconsBox>
          </TopFooterLeftSide>
          <TopFooterRightSide>
            <TopFooterRightSideInfoBox>
              <Text
                textColor='var(--darker-grey-color)'
                parOne
                text='Help line number'
              />
              <Text
                textColor='var(--light-color)'
                titleTwo
                text='1800 265 24 52'
              />
            </TopFooterRightSideInfoBox>
            <TopFooterRightSideInfoBox>
              <Text
                textColor='var(--darker-grey-color)'
                parOne
                text='Address'
              />
              <Text
                textColor='var(--light-color)'
                titleTwo
                text='NH 234 Public Square San Francisco 65368'
              />
            </TopFooterRightSideInfoBox>
            <TopFooterRightSideInfoBox>
              <Text
                textColor='var(--darker-grey-color)'
                parOne
                text='We are open'
              />
              <Text
                textColor='var(--light-color)'
                titleTwo
                text='Monday to Friday 9:00 AM to 10:00 AM'
              />
            </TopFooterRightSideInfoBox>
          </TopFooterRightSide>
        </FooterTop>

        <FooterBottom>
          <Text textColor='var(--light-color)' headSix text='{finsweet' />
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
                <Link to='/contacts'>Contact us</Link>
              </StyledLink>
            </StyledList>
          </StyledNavigation>
          <Text
            caption
            textColor='var(--light-color)'
            text={`@ Copyright Finsweet ${new Date().getFullYear()} `}
          />
        </FooterBottom>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
