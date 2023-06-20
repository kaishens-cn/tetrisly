import React, { useEffect, useState } from 'react';

import { SpinCircle, SpinContainer, SpinProgress, SpinStyleProps } from './style';

interface SpinProps extends SpinStyleProps {}

const Spin = (props: SpinProps) => {
  const { color = '#3566D5' } = props;
  const [size, setSize] = useState<string | number>('20px');

  useEffect(() => {
    if (typeof props.size === 'number') {
      setSize(`${props.size}px`);
    }
    setSize(props.size || '20px');
  }, [props.size]);

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
