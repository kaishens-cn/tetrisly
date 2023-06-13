import styled from 'styled-components';

import { ColorConfig } from '../../';
import Icon from '../icon';
import Row from '../row';

interface AlertStyleProps {
  type?: 'normal' | 'success' | 'warning' | 'negative';
}

export const AlertStyle = styled(Row)<AlertStyleProps>`
  position: relative;
  width: 100%;
  height: 56px;
  background-color: ${props => {
    if (props.type === 'normal') {
      return ColorConfig.BackgroundNeutralStrong;
    }
    if (props.type === 'success') {
      return ColorConfig.BackgroundPositiveStrong;
    }
    if (props.type === 'warning') {
      return ColorConfig.BackgroundWarningStrong;
    }
    if (props.type === 'negative') {
      return ColorConfig.BackgroundNegativeStrong;
    }
  }};
`;

export const AlertCloseStyle = styled(Icon.Close)`
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
`;
