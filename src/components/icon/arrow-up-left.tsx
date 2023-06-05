import React from 'react';

const ArrowUpLeft = (props: React.SVGAttributes<SVGElement>) => {
  const { width = 20, height = 20, fill = '#272E35', ...resetProps } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...resetProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4.75C4 4.33579 4.33579 4 4.75 4H10.25C10.6642 4 11 4.33579 11 4.75C11 5.16421 10.6642 5.5 10.25 5.5H6.56066L15.7803 14.7197C16.0732 15.0126 16.0732 15.4874 15.7803 15.7803C15.4874 16.0732 15.0126 16.0732 14.7197 15.7803L5.5 6.56066V10.25C5.5 10.6642 5.16421 11 4.75 11C4.33579 11 4 10.6642 4 10.25V4.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowUpLeft;
