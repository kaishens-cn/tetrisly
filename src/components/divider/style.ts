import styled from 'styled-components';

import { ColorConfig } from '../../styles/color';

interface DividerStyleProps {
  type?: 'horizontal' | 'vertical';
}

export const DividerStyle = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 16px;
`;

export const DividerLineStyle = styled.div<DividerStyleProps>`
  border-bottom: 1px solid ${ColorConfig.BorderDefault};
  width: ${props => {
    if (props.type === 'vertical') {
      return 0;
    }
    return 'unset';
  }};
  height: ${props => {
    if (props.type === 'horizontal') {
      return 0;
    }
    return 'unset';
  }};
`;
