import styled from 'styled-components';

import { ColorConfig } from '../../styles/color';

export type HandleStatus = 'normal' | 'hover' | 'press';

interface TreeNodeRowProps {
  nodeLevel: number;
  status: HandleStatus;
}

export const TreeNodeRow = styled.div<TreeNodeRowProps>`
  position: relative;
  padding-left: ${props => {
    return `${props.nodeLevel * 10}px`;
  }};
  background-color: ${props => {
    if (props.status === 'hover') {
      return ColorConfig.BackgroundNeutralOnSubtle;
    }
    if (props.status === 'press') {
      return ColorConfig.BackgroundNeutralMuted;
    }
    return ColorConfig.Transparent;
  }};
  border-radius: 5px;
`;
