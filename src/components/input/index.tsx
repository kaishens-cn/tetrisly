import React from 'react';

import { After, InputContainer, InputStyle, Prefix } from './style';

interface InputProps {
  prefix?: React.ReactNode;
  after?: React.ReactNode;
  size?: 'normal' | 'small';
}

const Input = (props: InputProps & React.HTMLAttributes<HTMLInputElement>) => {
  const { prefix, after, size, ...resetProps } = props;

  return (
    <InputContainer size={size} align="center">
      {prefix && <Prefix>{prefix}</Prefix>}
      <InputStyle {...resetProps} />
      {after && <After>{after}</After>}
    </InputContainer>
  );
};

export default Input;
