import React, { useState } from 'react';

import { ButtonStyle, ButtonStyleProps, ButtonTextStyle } from './style';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, Omit<ButtonStyleProps, 'status'> {}

const Button = (props: ButtonProps) => {
  const {
    children,
    inline,
    button = 'default',
    appearance = 'primary',
    intent = 'none',
    size = 'normal',
    ...resetProps
  } = props;

  const [status, setStatus] = useState<ButtonStyleProps['status']>('normal');

  return (
    <ButtonStyle
      inline={inline}
      status={status}
      button={button}
      appearance={appearance}
      intent={intent}
      size={size}
      {...resetProps}
      onMouseEnter={e => {
        setStatus('hover');
        props.onMouseEnter?.(e);
      }}
      onMouseLeave={e => {
        setStatus('normal');
        props.onMouseLeave?.(e);
      }}
      onMouseDown={e => {
        setStatus('press');
        props.onMouseDown?.(e);
      }}
      onMouseUp={e => {
        setStatus('hover');
        props.onMouseUp?.(e);
      }}
    >
      <ButtonTextStyle button={button} appearance={appearance} intent={intent} size={size === 'large' ? 100 : 75}>
        {children}
      </ButtonTextStyle>
    </ButtonStyle>
  );
};

export default Button;
