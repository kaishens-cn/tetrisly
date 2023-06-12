import styled from 'styled-components';

interface SpaceContainerProps {
  type?: 'vertical' | 'horizontal';
}

export const SpaceContainer = styled.div<SpaceContainerProps>`
  display: inline-flex;
  flex-direction: ${props => {
    if (props.type === 'vertical') {
      return 'column';
    }
    if (props.type === 'horizontal') {
      return 'row';
    }
    return 'row';
  }};
`;
