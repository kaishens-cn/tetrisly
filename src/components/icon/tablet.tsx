import React from 'react';

const Tablet = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 5.75C1 4.23122 2.23122 3 3.75 3H16.25C17.7688 3 19 4.23122 19 5.75V14.25C19 15.7688 17.7688 17 16.25 17H3.75C2.23122 17 1 15.7688 1 14.25V5.75ZM3.75 4.5C3.05964 4.5 2.5 5.05964 2.5 5.75V14.25C2.5 14.9404 3.05964 15.5 3.75 15.5H16.25C16.9404 15.5 17.5 14.9404 17.5 14.25V5.75C17.5 5.05964 16.9404 4.5 16.25 4.5H3.75ZM9 13.25C9 12.8358 9.33579 12.5 9.75 12.5H10.25C10.6642 12.5 11 12.8358 11 13.25C11 13.6642 10.6642 14 10.25 14H9.75C9.33579 14 9 13.6642 9 13.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default Tablet;
