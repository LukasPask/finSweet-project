import React from 'react';

import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  HeadingSix,
  TitleOne,
  TitleTwo,
  ParagraphOne,
  ParagraphTwo,
  Caption,
} from './Styles/Text.style';

const Text = ({
  text,
  headOne,
  headTwo,
  headThree,
  headFour,
  headFive,
  headSix,
  titleOne,
  titleTwo,
  parOne,
  parTwo,
  caption,
  textColor,
}) => {
  let textStyle;
  if (headOne)
    textStyle = <HeadingOne style={{ color: textColor }}>{text}</HeadingOne>;
  if (headTwo)
    textStyle = <HeadingTwo style={{ color: textColor }}>{text}</HeadingTwo>;
  if (headThree)
    textStyle = (
      <HeadingThree style={{ color: textColor }}>{text}</HeadingThree>
    );
  if (headFour)
    textStyle = <HeadingFour style={{ color: textColor }}>{text}</HeadingFour>;
  if (headFive)
    textStyle = <HeadingFive style={{ color: textColor }}>{text}</HeadingFive>;
  if (headSix)
    textStyle = <HeadingSix style={{ color: textColor }}>{text}</HeadingSix>;
  if (titleOne)
    textStyle = <TitleOne style={{ color: textColor }}>{text}</TitleOne>;
  if (titleTwo)
    textStyle = <TitleTwo style={{ color: textColor }}>{text}</TitleTwo>;
  if (parOne)
    textStyle = (
      <ParagraphOne style={{ color: textColor }}>{text}</ParagraphOne>
    );
  if (parTwo)
    textStyle = (
      <ParagraphTwo style={{ color: textColor }}>{text}</ParagraphTwo>
    );
  if (caption)
    textStyle = <Caption style={{ color: textColor }}>{text}</Caption>;
  return textStyle;
};

export default Text;
