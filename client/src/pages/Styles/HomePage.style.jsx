import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
`;
// SECTION ONE

export const SectionOneWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 632px;
`;

export const SectionOneLeftSide = styled.div`
  width: 53%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const OpenTimeBox = styled.div`
  width: 58%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    font-size: 30px;
    color: var(--darker-grey-color);
  }
`;

export const SectionOneRightSide = styled.div`
  width: 48%;
`;

export const SectionOneRightSideBackground = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  background-position: center;
  background-size: cover;
  background-image: url('https://s3-alpha-sig.figma.com/img/9553/8f5b/14830d8e85a1f1a83f2f3898d84e44ce?Expires=1635724800&Signature=FSBn8Jau2B4N3IbZ47scZ9Kffet~tAoU8g~taG04PzxbbxS52LcjZurpNsa7l9sMZnd202nMF7sKC7v-spYLqZNHJ9jeTiR7b3WzDmKiHwBBIAEuWA0rn~~aH95Cknp7-oBRyrTPyVXe6m3m4n4P2UFJXiG4K-qsXJ3UOsGI0E0rpTmz3RauYE6VzW5~3kaC2mnMSry0ay9idlSwu-MJL6X5DconQlrfjdf5oeoh2RJ8YXYXSGZSnDq4btAUMiBk3vQHpZ1zPghd29yI2x8TXdPz-KzeQktHZT052BkYB02lR6GRYCmijE6Nqngt6Bqp8PEm3qosvCtOHTyFkRtiMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
`;

export const TwentyFourHrBubbleStyle = styled.div`
  display: flex;
`;

export const ServiceBox = styled.div`
  background: var(--light-color);
  position: absolute;
  top: 5%;
  left: -5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 36px;
  box-shadow: 0px 0px 0px 12px rgba(225, 225, 225, 0.4);
  border-radius: 59px;
`;

export const RatingBox = styled.div`
  background: var(--light-color);
  position: absolute;
  bottom: 5%;
  right: -4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 36px;
  box-shadow: 0px 0px 0px 12px rgba(225, 225, 225, 0.4);
  border-radius: 59px;
`;

export const RatingNumbers = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

export const RatingStars = styled.div`
  display: flex;
  & svg {
    color: #ffb648;
    border-radius: 3px;
    font-weight: 600;
    font-size: 25px;
  }
`;

// SECTION TWO
export const GreySection = styled.section`
  background-color: var(--darker-grey-color);
  width: 100%;
`;

export const SectionTwoWrapper = styled.div`
  padding: 100px 0;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
`;

export const SectionTwoLeftSide = styled.div`
  width: 50%;
`;

export const ConenientServiceIcon = styled.div`
  z-index: 1;
  background-image: url('https://s3-alpha-sig.figma.com/img/3ae0/6fb2/fdeab2d68ad610e5b5557fa1c434cd68?Expires=1635724800&Signature=cFRM5qnagVS9WNTiA8D-fcPzpGCH6heaT5q7fnPiMBD-EHo5BxY1YJPt4Ur0BKdilkfwehQCqabVqk1XFk4riJNh7f7jC5~9YdnB3Z9ddGLhlz9KTLmZ5IGhVoa6yiUHpp3wvUG8FgTguIaR2EDKtsckQWvPSfKcuIAVVI0Y4BoconJFWHUWxqo5rFY2gZwCTKvQIq04BHOdvcPdOmWeHYCRbpgcORrXieIpA8IrHLMuhGNFdrVe0iQNDSGSXJSlYea0qJggI1WYcKinVAdvTDYbCExSiC7sXS-lgxy~5~zynlHePS61BF-Ine5MzNN62I0ESbeb~KnxfLZBafxWMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
  background-position: center;
  background-size: cover;
  height: 24px;
  width: 24px;
`;

export const ExpertMechanicsIcon = styled.div`
  z-index: 1;
  background-image: url('https://s3-alpha-sig.figma.com/img/d189/808b/12047e278657a23e850ab0f74e4511b8?Expires=1635724800&Signature=dIpLNaDSG9ai0Iujs90k1MGXRG4oxYOvq3pQ1e3j-MpQZhUbN3cxrei~6ekGValzbZIFLiWD6MBvIzNaXjF6FlOzcSrW97pjRwpYikEnsGf428kcsRV2Uz7T8XPbOdJJkg6HS3IeMHRVoEqyYSxdlb4V1f4LYqNhyysC7IlGAgYjmdK8KmPW4mx~FLeFP1INHaqnD8koAAW-~eHp6mlWgg4PIQnyw7FywMun3wKPto6UlGRpm1y--diBF~BA~sQchZYCgWcCgMQEALG8m-g2THJCXR5~lQfpdiKvJRxjSKyHe8KyDFmjsP44-c0x-2vqnb0WNbizTnqj3g-wXxzNGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
  background-position: center;
  background-size: cover;
  height: 24px;
  width: 24px;
`;

export const TransparentPricingIcon = styled.div`
  z-index: 1;
  background-image: url('https://s3-alpha-sig.figma.com/img/bded/fa2c/ab76b7943c7f885af8df0e70691a6c5a?Expires=1635724800&Signature=KgaZ57ZlX33sw0Tv4nkpiSzXHdE1fyUG4w2eEJGFbXBGUqXclp24Khh2PlWpy7G3WMvyuxULNsH3doH1~tTfUn~1s0aVR9sdkyKPH-ubEcW0fuG~KXTgFXnBuylDixWenR6Iol9BtVat0DBhCyCrMeR7-IBV9KCsQTC4poTNPkgE61DgiKKDMXIl0w1aSjPmTEobaH~DDp7OYJROgCqFv4thPfh97vz7zGPiOAJVj-dMu1Im7g45aDg5oNKmycZU3asRj8cG9suIbLyCQjd8M26XmismMP~jzTsi9bkNnxuSoudeqCcVSP1ocWrW1rFzRHSPU-lJp1xKCryx1E513A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
  background-position: center;
  background-size: cover;
  height: 24px;
  width: 24px;
`;

export const ServicingBoxes = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 75%;
`;

export const ServicingBoxesText = styled.div`
  margin-left: 10px;
  width: 80%;
  margin-bottom: 25px;
`;

export const KnowMoreBox = styled.div`
  width: 35%;
  margin-left: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTwoRightSide = styled.div`
  width: 50%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  width: 100%;
  margin: 30px 0;
  height: 55%;
`;

// SECTION THREE
export const WhiteSection = styled.section`
  background-color: var(--light-color);
  width: 100%;
`;

export const SectionThreeWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 100px 0;
  display: flex;
`;

export const SectionThreeLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  margin-right: 50px;
`;

export const VerticalDashedSeperator = styled.div`
  border: 1px dashed var(--orangeish-color);
  height: 70px;
  width: 1px;
  margin-bottom: 15px;
`;

export const EclipseBubble = styled.div`
  position: relative;
  bottom: 15%;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const BubbleWithHalfBubbleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BubblesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SectionThreeRightSideText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  width: 40%;
`;

// SECTION FOUR

export const StyledFourthSectionFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 100px 0;
`;

export const StyledTextBox = styled.div`
  text-align: center;
`;

export const ServiceCardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LinkToServices = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BiggerIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & svg {
    width: 30px;
    height: 30px;
  }
`;
