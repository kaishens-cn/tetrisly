import React from 'react';

const Copy = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 3.75C1 2.23122 2.23122 1 3.75 1H12.25C13.7688 1 15 2.23122 15 3.75V5H16.25C17.7688 5 19 6.23122 19 7.75V16.25C19 17.7688 17.7688 19 16.25 19H7.75C6.23122 19 5 17.7688 5 16.25V15H3.75C2.23122 15 1 13.7688 1 12.25V3.75ZM5 13.5V7.75C5 6.23122 6.23122 5 7.75 5H13.5V3.75C13.5 3.05964 12.9404 2.5 12.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V12.25C2.5 12.9404 3.05964 13.5 3.75 13.5H5ZM7.75 6.5C7.05964 6.5 6.5 7.05964 6.5 7.75V16.25C6.5 16.9404 7.05964 17.5 7.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V7.75C17.5 7.05964 16.9404 6.5 16.25 6.5H7.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default Copy;
