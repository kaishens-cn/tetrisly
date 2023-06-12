import './style/index.scss';

import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'center' | 'unset';
  direction?: 'vertical' | 'horizontal';
  gap?: number;
  split?: React.ReactNode;
  wrap?: boolean;
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const { wrap, align = 'center', direction = 'horizontal', gap = 0, split, className, style, ...resetProps } = props;

  return (
    <div
      className={classNames(`space space-${direction}`, className)}
      style={{ gap: `${gap}px`, '--align': align, ...style, flexWrap: wrap ? 'wrap' : 'nowrap' }}
      {...resetProps}
      ref={ref}
    >
      {React.Children.map(props.children, (child, index) => {
        if (index === 0) {
          return child;
        }
        return (
          <>
            {split}
            {child}
          </>
        );
      })}
    </div>
  );
});

export default Space;
