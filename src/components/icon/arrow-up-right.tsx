import React from 'react';

const ArrowUpRight = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M9.75 5.5C9.33579 5.5 9 5.16421 9 4.75C9 4.33579 9.33579 4 9.75 4H15.25C15.6642 4 16 4.33579 16 4.75V10.25C16 10.6642 15.6642 11 15.25 11C14.8358 11 14.5 10.6642 14.5 10.25V6.56066L5.28033 15.7803C4.98744 16.0732 4.51256 16.0732 4.21967 15.7803C3.92678 15.4874 3.92678 15.0126 4.21967 14.7197L13.4393 5.5H9.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowUpRight;
