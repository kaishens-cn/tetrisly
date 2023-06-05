import React from 'react';

const ArrowDownRight = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4.21967 4.21967C4.51256 3.92678 4.98744 3.92678 5.28033 4.21967L14.5 13.4393V9.75C14.5 9.33579 14.8358 9 15.25 9C15.6642 9 16 9.33579 16 9.75V15.25C16 15.6642 15.6642 16 15.25 16H9.75C9.33579 16 9 15.6642 9 15.25C9 14.8358 9.33579 14.5 9.75 14.5H13.4393L4.21967 5.28033C3.92678 4.98744 3.92678 4.51256 4.21967 4.21967Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowDownRight;
