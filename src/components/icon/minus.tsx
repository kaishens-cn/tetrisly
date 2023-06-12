import React from 'react';

const Minus = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4 10C4 9.58579 4.33579 9.25 4.75 9.25H15.25C15.6642 9.25 16 9.58579 16 10C16 10.4142 15.6642 10.75 15.25 10.75H4.75C4.33579 10.75 4 10.4142 4 10Z"
        fill={fill}
      />
    </svg>
  );
};

export default Minus;