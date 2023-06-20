import styled, { keyframes } from 'styled-components';

export interface SpinStyleProps {
  color?: string;
  size?: number | string;
}

const rotate = keyframes`
    0% {
      transform: rotate(360deg);
    }
  100% {
    transform: rotate(0deg);
  }
`;

export const SpinContainer = styled.div<SpinStyleProps>`
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
  animation: ${rotate} 1s infinite linear;
`;

export const SpinProgress = styled.div<SpinStyleProps>`
  position: relative;
  margin: auto;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background: conic-gradient(${props => props.color} 50%, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 46.5%;
    width: 10.5%;
    height: 10.5%;
    border-radius: 50%;
    background: ${props => props.color};
    z-index: 1;
  }
`;
