import styled from 'styled-components';

import { ColorConfig } from '../../styles/color';

export const ProgressContainer = styled.div`
  width: 48px;
  display: flex;
  height: 4px;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${ColorConfig.InteractionNeutralSubtleNormal};
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 6px;
  background-color: ${ColorConfig.InteractionNormal};
`;
