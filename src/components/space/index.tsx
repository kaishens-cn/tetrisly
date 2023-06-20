import { Property } from 'csstype';
import React from 'react';

import { SpaceContainer } from './style';

interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: Property.AlignItems;
  direction?: 'vertical' | 'horizontal';
  gap?: number;
  split?: React.ReactNode;
  wrap?: boolean;
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    wrap,
    align = 'flex-start',
    direction = 'horizontal',
    gap = 0,
    split,
    className,
    style,
    ...resetProps
  } = props;

  return (
    <SpaceContainer
      className={className}
      type={direction}
      style={{ gap: `${gap}px`, alignItems: align, flexWrap: wrap ? 'wrap' : 'nowrap', ...style }}
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
    </SpaceContainer>
  );
});

export default Space;
