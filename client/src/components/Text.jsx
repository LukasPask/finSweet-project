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
  textWeight,
}) => {
  let textStyle;
  if (headOne)
    textStyle = (
      <HeadingOne style={{ color: textColor, fontWeight: textWeight }}>
        {text}
      </HeadingOne>
    );
  if (headTwo)
    textStyle = (
      <HeadingTwo style={{ color: textColor, fontWeight: textWeight }}>
        {text}
      </HeadingTwo>
    );
  if (headThree)
    textStyle = (
      <HeadingThree style={{ color: textColor, fontWeight: textWeight }}>
        {text}
      </HeadingThree>
    );
  if (headFour)
    textStyle = (
      <HeadingFour style={{ color: textColor, fontWeight: textWeight }}>
        {text}
      </HeadingFour>
    );
  if (headFive)
    textStyle = (
      <HeadingFive style={{ color: textColor, fontWeight: textWeight }}>
        {text}
      </HeadingFive>
    );
  if (headSix)
    textStyle = (
      <HeadingSix style={{ color: textColor, fontWeight: textWeight }}>
        {text}
      </HeadingSix>
    );
  if (titleOne)
    textStyle = (
      <TitleOne style={{ color: textColor, fontWeight: textWeight }}>
        {text}
      </TitleOne>
    );
  if (titleTwo)
    textStyle = (
      <TitleTwo style={{ color: textColor, fontWeight: textWeight }}>
        {text}
      </TitleTwo>
    );
  if (parOne)
    textStyle = (
      <ParagraphOne style={{ color: textColor, fontWeight: textWeight }}>
        {text}
      </ParagraphOne>
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
