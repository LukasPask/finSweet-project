import React from 'react';
// Components
import Text from '../components/Text';
import Button from '../components/Button';
import Bubble from '../components/Bubble';
import Input from '../components/Input';
import ServiceCard from '../components/ServiceCard';
// Icons
import { AiOutlineClockCircle } from 'react-icons/ai';
import {
  FaStar,
  FaStarHalfAlt,
  FaCar,
  FaOilCan,
  FaCarBattery,
} from 'react-icons/fa';
import { BsArrowRight, BsShieldFillCheck } from 'react-icons/bs';
import { GiAutoRepair, GiCarWheel } from 'react-icons/gi';
// Style
import {
  StyledMain,
  SectionOneWrapper,
  SectionOneLeftSide,
  OpenTimeBox,
  SectionOneRightSide,
  SectionOneRightSideBackground,
  TwentyFourHrBubbleStyle,
  ServiceBox,
  RatingBox,
  RatingNumbers,
  RatingStars,
  GreySection,
  SectionTwoWrapper,
  SectionTwoLeftSide,
  ConenientServiceIcon,
  ExpertMechanicsIcon,
  TransparentPricingIcon,
  ServicingBoxes,
  ServicingBoxesText,
  KnowMoreBox,
  SectionTwoRightSide,
  StyledForm,
  WhiteSection,
  SectionThreeWrapper,
  VerticalDashedSeperator,
  EclipseBubble,
  BubblesBox,
  BubbleWithHalfBubbleBox,
  SectionThreeRightSideText,
  SectionThreeLeftSide,
  StyledFourthSectionFlex,
  StyledTextBox,
  ServiceCardsBox,
  LinkToServices,
  BiggerIcon,
} from './Styles/HomePage.style';

const HomePage = () => {
  return (
    <StyledMain>
      <SectionOneWrapper>
        <SectionOneLeftSide>
          <Text
            headOne
            text='Get your vehicle service done online at one place'
          />
          <div>
            <Button
              primary
              text='Book a service'
              paddingX='15px'
              paddingY='40px'
            />
          </div>
          <OpenTimeBox>
            <AiOutlineClockCircle />
            <div>
              <Text caption text='We are open' textColor='grey' />
              <Text parOne text='Monday to Friday 9:00AM to 10:00 AM' />
            </div>
          </OpenTimeBox>
        </SectionOneLeftSide>
        <SectionOneRightSide>
          <SectionOneRightSideBackground>
            <ServiceBox>
              <Bubble
                color='var(--greenish-color)'
                size='70px'
                margin=' 0 10px 0 0'
                text={
                  <TwentyFourHrBubbleStyle>
                    <Text titleTwo text='24' textColor='var(--light-color)' />
                    <Text parTwo text='hr' textColor='var(--light-color)' />
                  </TwentyFourHrBubbleStyle>
                }
              />
              <Text titleTwo text='Quick service' textWeight='600' />
            </ServiceBox>
            <RatingBox>
              <RatingNumbers>
                <Text titleTwo text='4.5/5' textWeight='600' />
                <Text parTwo text='Rating' textColor='500' />
              </RatingNumbers>
              <RatingStars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </RatingStars>
            </RatingBox>
          </SectionOneRightSideBackground>
        </SectionOneRightSide>
      </SectionOneWrapper>
      <GreySection>
        <SectionTwoWrapper>
          <SectionTwoLeftSide>
            <div>
              <Text
                headTwo
                text='We are taking car servicing seriously'
                textWeight='800'
              />
            </div>
            <div>
              <ServicingBoxes>
                <Bubble
                  size='47px'
                  color='var(--light-color)'
                  text={<ConenientServiceIcon />}
                />
                <ServicingBoxesText>
                  <Text titleTwo textWeight='600' text='Convenient Store' />
                  <Text
                    parTwo
                    textColor='grey'
                    text='Through True Rich Attended does no end it his mother since real had half every him.'
                  />
                </ServicingBoxesText>
              </ServicingBoxes>
              <ServicingBoxes>
                <Bubble
                  size='47px'
                  color='var(--light-color)'
                  text={<ExpertMechanicsIcon />}
                />
                <ServicingBoxesText>
                  <Text titleTwo textWeight='600' text='Expert mechanics' />
                  <Text
                    parTwo
                    textColor='grey'
                    text='Through True Rich Attended does no end it his mother since real had half every him.'
                  />
                </ServicingBoxesText>
              </ServicingBoxes>
              <ServicingBoxes>
                <Bubble
                  size='47px'
                  color='var(--light-color)'
                  text={<TransparentPricingIcon />}
                />
                <ServicingBoxesText>
                  <Text titleTwo textWeight='600' text='Transparent pricing' />
                  <Text
                    parTwo
                    textColor='grey'
                    text='Through True Rich Attended does no end it his mother since real had half every him.'
                  />
                </ServicingBoxesText>
              </ServicingBoxes>
              <KnowMoreBox>
                <Text parOne text='Know more about us ' /> <BsArrowRight />
              </KnowMoreBox>
            </div>
          </SectionTwoLeftSide>
          <SectionTwoRightSide>
            <Text
              headThree
              text='Get a quoute for the car service'
              textWeight='700'
            />
            <StyledForm>
              <Input placeholder='Enter your location' />
              <Input placeholder='Enter your location' />
              <Input placeholder='Enter your location' />
              <Input placeholder='Your phone number' />
            </StyledForm>
            <Button
              primary
              text='Get your qoute'
              paddingX='16px'
              paddingY='40px'
            />
          </SectionTwoRightSide>
        </SectionTwoWrapper>
      </GreySection>
      <WhiteSection>
        <SectionThreeWrapper>
          <SectionThreeLeftSide>
            <Text headTwo text='We follow a clear process to help you out.' />
            <Text
              parTwo
              text='Through True Rich Attended does no end it his mother since real had half every him.'
            />
            <div>
              <Button
                primary
                text='Learn more'
                paddingX='16px'
                paddingY='40px'
              />
            </div>
          </SectionThreeLeftSide>
          <BubblesBox>
            <BubbleWithHalfBubbleBox>
              <Bubble
                size='72px'
                color='var(--blueish-color)'
                text={
                  <Text titleOne textColor='var(--light-color)' text='01' />
                }
                textColor='var(--light-color)'
              />
              <EclipseBubble />
            </BubbleWithHalfBubbleBox>
            <VerticalDashedSeperator />
            <BubbleWithHalfBubbleBox>
              <Bubble
                size='72px'
                color='var(--blueish-color)'
                text={
                  <Text titleOne textColor='var(--light-color)' text='02' />
                }
                textColor='var(--light-color)'
              />
              <EclipseBubble />
            </BubbleWithHalfBubbleBox>
            <VerticalDashedSeperator />
            <BubbleWithHalfBubbleBox>
              <Bubble
                size='72px'
                color='var(--blueish-color)'
                text={
                  <Text titleOne textColor='var(--light-color)' text='03' />
                }
                textColor='var(--light-color)'
              />
              <EclipseBubble />
            </BubbleWithHalfBubbleBox>
          </BubblesBox>
          <SectionThreeRightSideText>
            <div>
              <Text titleOne text='Get a Quote' />
              <Text
                parOne
                text='Through True Rich Attended does no end it his mother since real had half every.'
              />
            </div>
            <div>
              <Text titleOne text='Book an Appointment' />
              <Text
                parOne
                text='Through True Rich Attended does no end it his mother since real had half every.'
              />
            </div>
            <div>
              <Text titleOne text='Get your Service Done' />
              <Text
                parOne
                text='Through True Rich Attended does no end it his mother since real had half every.'
              />
            </div>
          </SectionThreeRightSideText>
        </SectionThreeWrapper>
      </WhiteSection>
      <GreySection>
        <StyledFourthSectionFlex>
          <StyledTextBox>
            <Text titleTwo text='What we Offer' />
            <Text
              headTwo
              text='We offer full service auto repair & maintenance'
            />
          </StyledTextBox>
          <ServiceCardsBox>
            <ServiceCard
              width='20%'
              height='200px'
              text={
                <BiggerIcon>
                  <GiAutoRepair />
                  <Text titleTwo text='Diagnostics' />
                </BiggerIcon>
              }
              direction='column'
            />
            <ServiceCard
              width='20%'
              height='200px'
              text={
                <BiggerIcon>
                  <FaCar />
                  <Text titleTwo text='Engine Repair' />
                </BiggerIcon>
              }
              direction='column'
            />
            <ServiceCard
              width='20%'
              height='200px'
              text={
                <BiggerIcon>
                  <GiCarWheel />
                  <Text titleTwo text='Wheel Repair' />
                </BiggerIcon>
              }
              direction='column'
            />
            <ServiceCard
              width='20%'
              height='200px'
              text={
                <BiggerIcon>
                  <FaOilCan />
                  <Text titleTwo text='Oil Filter' />
                </BiggerIcon>
              }
              direction='column'
            />
            <ServiceCard
              width='20%'
              height='200px'
              text={
                <BiggerIcon>
                  <FaCar />
                  <Text titleTwo text='Body Work' />
                </BiggerIcon>
              }
              direction='column'
            />
            <ServiceCard
              width='20%'
              height='200px'
              text={
                <BiggerIcon>
                  <FaCarBattery />
                  <Text titleTwo text='Batteries' />
                </BiggerIcon>
              }
              direction='column'
            />
            <ServiceCard
              width='20%'
              height='200px'
              text={
                <BiggerIcon>
                  <BsShieldFillCheck />
                  <Text titleTwo text='Insurance Claim' />
                </BiggerIcon>
              }
              direction='column'
            />
            <ServiceCard
              width='20%'
              height='200px'
              text={
                <BiggerIcon>
                  <GiAutoRepair />
                  <Text titleTwo text='Custom Service' />
                </BiggerIcon>
              }
              direction='column'
            />
          </ServiceCardsBox>
          <LinkToServices>
            <Text parOne text='Learn about services   ' /> <BsArrowRight />
          </LinkToServices>
        </StyledFourthSectionFlex>
      </GreySection>
    </StyledMain>
  );
};

export default HomePage;
