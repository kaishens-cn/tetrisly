import React from 'react';

const ArrowDownLeft = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M15.7803 4.21967C16.0732 4.51256 16.0732 4.98744 15.7803 5.28033L6.56066 14.5H10.25C10.6642 14.5 11 14.8358 11 15.25C11 15.6642 10.6642 16 10.25 16H4.75C4.33579 16 4 15.6642 4 15.25V9.75C4 9.33579 4.33579 9 4.75 9C5.16421 9 5.5 9.33579 5.5 9.75V13.4393L14.7197 4.21967C15.0126 3.92678 15.4874 3.92678 15.7803 4.21967Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowDownLeft;
