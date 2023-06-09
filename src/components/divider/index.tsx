import './index.scss';

import classNames from 'classnames';
import React, { CSSProperties } from 'react';

import colorConfig from '../../styles/color.module.scss';
import Row from '../row';
import Typography from '../typography';

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
    <div
      className={classNames(
        'divider',
        props.title && type !== 'vertical' ? `divider-${type}-with-title` : undefined,
        props.className
      )}
      style={{
        paddingLeft: props.fillUp ? 0 : 16,
        paddingRight: props.fillUp ? 0 : 16,
        ...props.style,
      }}
    >
      {props.title && type !== 'vertical' && (
        <Typography.Normal size={75} color={colorConfig.ContentTertiary}>
          {props.title}
        </Typography.Normal>
      )}
      <div className={`divider-${type}`}></div>
    </div>
  );
};

export default Divider;
