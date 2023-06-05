import React from 'react';

const TimeClock = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10ZM9.75 5C10.1642 5 10.5 5.33579 10.5 5.75V9.5H12.25C12.6642 9.5 13 9.83579 13 10.25C13 10.6642 12.6642 11 12.25 11H9.75C9.33579 11 9 10.6642 9 10.25V5.75C9 5.33579 9.33579 5 9.75 5Z"
        fill={fill}
      />
    </svg>
  );
};

export default TimeClock;
