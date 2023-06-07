import './index.scss';

import React, { FC, PropsWithChildren } from 'react';

interface SpaceProps {
  align?: 'start' | 'end' | 'center';
  direction?: 'vertical' | 'horizontal';
  gap?: number;
  split?: React.ReactNode;
}

const Space: FC<PropsWithChildren<SpaceProps>> = props => {
  const { align = 'center', direction = 'horizontal', gap = 0, split } = props;

  return (
    <div className={`space space-${direction}`} style={{ gap: `${gap}px`, '--align': align }}>
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
};

export default Space;
