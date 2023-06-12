import styled from 'styled-components';

const bottom100 = '0 1px 2px rgba(27, 36, 44, 0.12)';
const bottom200 = '0 2px 2px -1px rgba(27, 36, 44, 0.04), 0 2px 8px -1px rgba(27, 36, 44, 0.08)';
const bottom300 = '0 2px 2px -1px rgba(27, 35, 44, 0.04), 0 8px 16px -2px rgba(27, 36, 44, 0.12)';
const bottom400 = '0 2px 2px -1px rgba(27, 36, 44, 0.04), 0 16px 24px -6px rgba(27, 36, 44, 0.16)';

const top100 = '0 -1px 2px rgba(27, 36, 44, 0.12)';
const top200 = '0 -2px 2px -1px rgba(27, 36, 44, 0.04), 0 -2px 8px -1px rgba(27, 36, 44, 0.08)';
const top300 = '0 -2px 2px -1px rgba(27, 35, 44, 0.04), 0 -8px 16px -2px rgba(27, 36, 44, 0.12)';
const top400 = '0 -2px 2px -1px rgba(27, 36, 44, 0.04), 0 -16px 24px -6px rgba(27, 36, 44, 0.16)';

interface ElevationProps {
  type?: 'bottom' | 'top';
  height?: '100' | '200' | '300' | '400';
}

const Elevation = styled.div<ElevationProps>`
  box-shadow: ${props => {
    if (props.type === 'bottom' && props.height === '100') {
      return bottom100;
    }
    if (props.type === 'bottom' && props.height === '200') {
      return bottom200;
    }
    if (props.type === 'bottom' && props.height === '300') {
      return bottom300;
    }
    if (props.type === 'bottom' && props.height === '400') {
      return bottom400;
    }
    if (props.type === 'top' && props.height === '100') {
      return top100;
    }
    if (props.type === 'top' && props.height === '200') {
      return top200;
    }
    if (props.type === 'top' && props.height === '300') {
      return top300;
    }
    if (props.type === 'top' && props.height === '400') {
      return top400;
    }
    return bottom100;
  }};
`;
