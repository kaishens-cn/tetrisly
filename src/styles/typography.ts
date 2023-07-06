import styled from 'styled-components';

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
  size?: '25' | '50' | '75' | '100' | '200' | '300' | '400' | '500' | '600';
}

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
    if (props.size === '25') {
      return fontSize25 + 'px';
    }
    if (props.size === '50') {
      return fontSize50 + 'px';
    }
    if (props.size === '75') {
      return fontSize75 + 'px';
    }
    if (props.size === '100') {
      return fontSize100 + 'px';
    }
    if (props.size === '200') {
      return fontSize200 + 'px';
    }
    if (props.size === '300') {
      return fontSize300 + 'px';
    }
    if (props.size === '400') {
      return fontSize400 + 'px';
    }
    if (props.size === '500') {
      return fontSize500 + 'px';
    }
    if (props.size === '600') {
      return fontSize600 + 'px';
    }
    return fontSize75 + 'px';
  }};
  line-height: ${props => {
    if (props.size === '25') {
      return fontLineHeight25 + 'px';
    }
    if (props.size === '50') {
      return fontLineHeight50 + 'px';
    }
    if (props.size === '75') {
      return fontLineHeight75 + 'px';
    }
    if (props.size === '100') {
      return fontLineHeight100 + 'px';
    }
    if (props.size === '200') {
      return fontLineHeight200 + 'px';
    }
    if (props.size === '300') {
      return fontLineHeight300 + 'px';
    }
    if (props.size === '400') {
      return fontLineHeight400 + 'px';
    }
    if (props.size === '500') {
      return fontLineHeight500 + 'px';
    }
    if (props.size === '600') {
      return fontLineHeight600 + 'px';
    }
    return fontLineHeight75 + 'px';
  }};
`;
