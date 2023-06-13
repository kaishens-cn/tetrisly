import React, { CSSProperties } from 'react';

import { ColorConfig, Typography } from '../../';
import { DividerLineStyle, DividerStyle } from './style';

interface DividerProps {
  title?: string;
  type?: 'horizontal' | 'vertical'; // No title is displayed when vertical
  className?: string;
  style?: CSSProperties;
  fillUp?: boolean; // fill up parent container
}

const Divider = (props: DividerProps) => {
  const { type = 'horizontal' } = props;

  return (
    <DividerStyle
      className={props.className}
      style={{
        height: props.title && type !== 'vertical' ? 'auto' : 'unset',
        paddingLeft: props.fillUp ? 0 : 16,
        paddingRight: props.fillUp ? 0 : 16,
        ...props.style,
      }}
    >
      {props.title && type !== 'vertical' && (
        <Typography.Normal size={75} color={ColorConfig.ContentTertiary}>
          {props.title}
        </Typography.Normal>
      )}
      <DividerLineStyle type={type} />
    </DividerStyle>
  );
};

export default Divider;
