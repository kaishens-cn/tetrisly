import './index.scss';

import classNames from 'classnames';
import React, { FC } from 'react';

import colorConfig from '../../styles/color.module.scss';

interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 25 | 50 | 75 | 100 | 200 | 300 | 400 | 500 | 600;
  underline?: boolean;
  color?: string;
}

const withTypography = (type: string): FC<TypographyProps> => {
  return props => {
    const { size = 25, underline = false, style, color = colorConfig.ContentPrimary, ...resetProps } = props;
    return (
      <div
        style={{
          color: color,
          ...style,
        }}
        className={classNames(`font-${type}-${size}${underline ? ' font-underline' : ''}`, props.className)}
        {...resetProps}
      >
        {props.children}
      </div>
    );
  };
};

export default {
  Strong: withTypography('strong'),
  Medium: withTypography('medium'),
  Normal: withTypography('normal'),
};
