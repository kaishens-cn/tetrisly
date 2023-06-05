import React from 'react';

const TrendDown = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1.26988 4.17385C1.58809 3.90868 2.06101 3.95167 2.32618 4.26988L6.87004 9.7225L10.3 7.15002C10.5986 6.92608 11.0164 6.95577 11.2803 7.21969L17.5 13.4394V9.75002C17.5 9.3358 17.8358 9.00002 18.25 9.00002C18.6642 9.00002 19 9.3358 19 9.75002V15.25C19 15.6642 18.6642 16 18.25 16H12.75C12.3358 16 12 15.6642 12 15.25C12 14.8358 12.3358 14.5 12.75 14.5H16.4394L10.6796 8.7403L7.20002 11.35C6.88059 11.5896 6.42947 11.5369 6.17385 11.2302L1.17385 5.23016C0.90868 4.91195 0.951673 4.43903 1.26988 4.17385Z"
        fill={fill}
      />
    </svg>
  );
};

export default TrendDown;
