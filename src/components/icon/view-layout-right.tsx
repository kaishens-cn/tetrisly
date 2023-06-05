import React from 'react';

const ViewLayoutRight = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 3.75C1 2.23122 2.23122 1 3.75 1H16.25C17.7688 1 19 2.23122 19 3.75V16.25C19 17.7688 17.7688 19 16.25 19H3.75C2.23122 19 1 17.7688 1 16.25V3.75ZM14 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5H14V17.5ZM12.5 2.5V17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V3.75C2.5 3.05964 3.05964 2.5 3.75 2.5H12.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default ViewLayoutRight;
