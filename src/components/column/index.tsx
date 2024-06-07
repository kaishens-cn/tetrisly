import { Property } from 'csstype';
import React from 'react';

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: Property.AlignItems;
  justify?: Property.JustifyContent;
  reverse?: boolean;
}

const Column = React.forwardRef<HTMLDivElement, ColumnProps>((props, ref) => {
  const { align = 'unset', justify = 'unset', reverse, style, ...resetProps } = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: reverse ? 'column-reverse' : 'column',
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

export default Column;
