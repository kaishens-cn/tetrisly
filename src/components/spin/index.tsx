import React from 'react';

import { SpinCircle, SpinContainer, SpinProgress, SpinStyleProps } from './style';

interface SpinProps extends SpinStyleProps {}

const Spin = (props: SpinProps) => {
  const { size, color = '#3566D5' } = props;

  return (
    <SpinContainer size={size} color={color}>
      <SpinProgress size={size} color={color}>
        <div style={{ width: '79%', height: '79%', borderRadius: '50%', background: '#fff' }} />
      </SpinProgress>
      <SpinCircle color={color} />
    </SpinContainer>
  );
};

export default Spin;
