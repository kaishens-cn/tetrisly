import { Property } from 'csstype';
import React, { FC } from 'react';

import { ColorConfig } from '../../';
import { Font } from '../../styles/typography';
import UserSelect = Property.UserSelect;

export interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 25 | 50 | 75 | 100 | 200 | 300 | 400 | 500 | 600;
  underline?: boolean;
  color?: string;
  userSelect?: UserSelect;
}

const withTypography = (type: 'strong' | 'medium' | 'normal'): FC<TypographyProps> => {
  return props => {
    const { size = 25, underline = false, style, color = ColorConfig.ContentPrimary, ...resetProps } = props;
    return (
      <Font
        style={{
          color: color,
          textDecorationLine: underline ? 'underline' : 'unset',
          cursor: underline ? 'pointer' : 'unset',
          userSelect: props.userSelect || 'auto',
          ...style,
        }}
        weight={type}
        size={`${size}`}
        className={props.className}
        {...resetProps}
      >
        {props.children}
      </Font>
    );
  };
};

export default {
  Strong: withTypography('strong'),
  Medium: withTypography('medium'),
  Normal: withTypography('normal'),
};
