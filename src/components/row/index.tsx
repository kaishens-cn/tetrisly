import { Property } from 'csstype';
import React from 'react';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: Property.AlignItems;
  justify?: Property.JustifyContent;
  reverse?: boolean;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { align = 'center', justify = 'center', reverse, style, ...resetProps } = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
      ref={ref}
      {...resetProps}
    >
      {props.children}
    </div>
  );
});

export default Row;
