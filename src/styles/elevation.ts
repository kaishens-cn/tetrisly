import styled from 'styled-components';

const bottom100 = '0 1px 2px rgba(27, 36, 44, 0.12)';
const bottom200 = '0 2px 2px -1px rgba(27, 36, 44, 0.04), 0 2px 8px -1px rgba(27, 36, 44, 0.08)';
const bottom300 = '0 2px 2px -1px rgba(27, 35, 44, 0.04), 0 8px 16px -2px rgba(27, 36, 44, 0.12)';
const bottom400 = '0 2px 2px -1px rgba(27, 36, 44, 0.04), 0 16px 24px -6px rgba(27, 36, 44, 0.16)';

const top100 = '0 -1px 2px rgba(27, 36, 44, 0.12)';
const top200 = '0 -2px 2px -1px rgba(27, 36, 44, 0.04), 0 -2px 8px -1px rgba(27, 36, 44, 0.08)';
const top300 = '0 -2px 2px -1px rgba(27, 35, 44, 0.04), 0 -8px 16px -2px rgba(27, 36, 44, 0.12)';
const top400 = '0 -2px 2px -1px rgba(27, 36, 44, 0.04), 0 -16px 24px -6px rgba(27, 36, 44, 0.16)';

type ElevationType = 'bottom' | 'top';
type ElevationHeight = '100' | '200' | '300' | '400';

export const elevation = (type?: ElevationType, height?: ElevationHeight) => {
  if (type === 'bottom' && height === '100') {
    return bottom100;
  }
  if (type === 'bottom' && height === '200') {
    return bottom200;
  }
  if (type === 'bottom' && height === '300') {
    return bottom300;
  }
  if (type === 'bottom' && height === '400') {
    return bottom400;
  }
  if (type === 'top' && height === '100') {
    return top100;
  }
  if (type === 'top' && height === '200') {
    return top200;
  }
  if (type === 'top' && height === '300') {
    return top300;
  }
  if (type === 'top' && height === '400') {
    return top400;
  }
  return bottom100;
};
