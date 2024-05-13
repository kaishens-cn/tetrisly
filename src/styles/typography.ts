import styled from 'styled-components';

import { TypographySize } from '../components/typography';

const fontWeightNormal = 400;
const fontWeightMedium = 450;
const fontWeightStrong = 600;

const fontLetterSpacingNormal = 0.2;
const fontLetterSpacingMedium = 0.2;
const fontLetterSpacingStrong = 0.1;

const fontSize25 = 10;
const fontLineHeight25 = 16;

const fontSize50 = 12;
const fontLineHeight50 = 20;

const fontSize75 = 14;
const fontLineHeight75 = 24;

const fontSize100 = 16;
const fontLineHeight100 = 28;

const fontSize200 = 18;
const fontLineHeight200 = 32;

const fontSize300 = 24;
const fontLineHeight300 = 36;

const fontSize400 = 32;
const fontLineHeight400 = 44;

const fontSize500 = 40;
const fontLineHeight500 = 56;

const fontSize600 = 48;
const fontLineHeight600 = 64;

interface FontProps {
  weight?: 'strong' | 'medium' | 'normal';
  size?: TypographySize;
}

export const getFontSize = (size: TypographySize) => {
  if (size === 25) {
    return fontSize25;
  }
  if (size === 50) {
    return fontSize50;
  }
  if (size === 75) {
    return fontSize75;
  }
  if (size === 100) {
    return fontSize100;
  }
  if (size === 200) {
    return fontSize200;
  }
  if (size === 300) {
    return fontSize300;
  }
  if (size === 400) {
    return fontSize400;
  }
  if (size === 500) {
    return fontSize500;
  }
  if (size === 600) {
    return fontSize600;
  }
  return fontSize75;
};

export const getFontHeight = (size: TypographySize) => {
  if (size === 25) {
    return fontLineHeight25;
  }
  if (size === 50) {
    return fontLineHeight50;
  }
  if (size === 75) {
    return fontLineHeight75;
  }
  if (size === 100) {
    return fontLineHeight100;
  }
  if (size === 200) {
    return fontLineHeight200;
  }
  if (size === 300) {
    return fontLineHeight300;
  }
  if (size === 400) {
    return fontLineHeight400;
  }
  if (size === 500) {
    return fontLineHeight500;
  }
  if (size === 600) {
    return fontLineHeight600;
  }
  return fontLineHeight75;
};

export const Font = styled.span<FontProps>`
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    Tahoma,
    Arial,
    'Hiragino Sans GB',
    'Microsoft YaHei',
    sans-serif;
  font-weight: ${props => {
    if (props.weight === 'strong') {
      return fontWeightStrong;
    }
    if (props.weight === 'medium') {
      return fontWeightMedium;
    }
    if (props.weight === 'normal') {
      return fontWeightNormal;
    }
    return fontWeightNormal;
  }};
  letter-spacing: ${props => {
    if (props.weight === 'strong') {
      return fontLetterSpacingStrong + 'px';
    }
    if (props.weight === 'medium') {
      return fontLetterSpacingMedium + 'px';
    }
    if (props.weight === 'normal') {
      return fontLetterSpacingNormal + 'px';
    }
    return fontLetterSpacingNormal + 'px';
  }};
  font-size: ${props => {
    return getFontSize(props.size) + 'px';
  }};
  line-height: ${props => {
    return getFontHeight(props.size) + 'px';
  }};
`;
