import { animated, useSpring } from '@react-spring/web';
import React from 'react';

import { ProgressBar, ProgressContainer } from './style';

interface ProgressProps {
  percent?: number;
}

const Progress = (props: ProgressProps) => {
  return (
    <ProgressContainer>
      <animated.div style={{ width: `${props.percent || 0}%` }}>
        <ProgressBar />
      </animated.div>
    </ProgressContainer>
  );
};

export default Progress;
