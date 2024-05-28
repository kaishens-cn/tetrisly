import styled from 'styled-components';

import { ColorConfig } from '../../styles/color';
import Row from '../row';

export const InputStyle = styled.input`
  border: none;
  outline: medium;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.2px;
  padding: 0;
  width: 100%;
  //height: 100%;
  background-color: ${ColorConfig.Transparent};
  flex: 1;

  &::-webkit-input-placeholder {
    color: ${ColorConfig.ContentTertiary};
    font-size: 14px;
    line-height: 24px;
  }
`;

export const InputContainer = styled(Row)`
  padding: 8px 16px;
  border: 0 solid #000;
  border-radius: 8px;
  cursor: text;
  box-shadow: inset 0 0 0 1px ${ColorConfig.BorderNeutralSubtle};

  &:hover {
    box-shadow: inset 0 0 0 1px ${ColorConfig.InteractionBorderHover};
  }

  &:focus-within {
    outline-color: ${ColorConfig.InteractionBorderHover};
  }
  &:has(input:focus) {
    outline-width: 2px;
    outline-style: solid;
  }
`;

export const Prefix = styled.div`
  margin-right: 8px;
`;

export const After = styled.div`
  margin-left: 8px;
`;
