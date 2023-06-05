import React from 'react';

const Mobile = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M3 3.75C3 2.23122 4.23122 1 5.75 1H14.25C15.7688 1 17 2.23122 17 3.75V16.25C17 17.7688 15.7688 19 14.25 19H5.75C4.23122 19 3 17.7688 3 16.25V3.75ZM5.75 2.5C5.05964 2.5 4.5 3.05964 4.5 3.75V16.25C4.5 16.9404 5.05964 17.5 5.75 17.5H14.25C14.9404 17.5 15.5 16.9404 15.5 16.25V3.75C15.5 3.05964 14.9404 2.5 14.25 2.5H5.75ZM9 15.25C9 14.8358 9.33579 14.5 9.75 14.5H10.25C10.6642 14.5 11 14.8358 11 15.25C11 15.6642 10.6642 16 10.25 16H9.75C9.33579 16 9 15.6642 9 15.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default Mobile;
