import { animated } from '@react-spring/web';
import React from 'react';

import { ProgressBar, ProgressContainer } from './style';

interface ProgressProps {
  percent?: number;
}

const Progress = (props: ProgressProps) => {
  const { percent } = props;
  return (
    <ProgressContainer {...{}}>
      <animated.div style={{ width: `${percent || 0}%` }}>
        <ProgressBar {...{}} />
      </animated.div>
    </ProgressContainer>
  );
};

export default Progress;
