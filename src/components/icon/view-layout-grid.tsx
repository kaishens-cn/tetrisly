import React from 'react';

const ViewLayoutGrid = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 3.75C1 2.23122 2.23122 1 3.75 1H16.25C17.7688 1 19 2.23122 19 3.75V16.25C19 17.7688 17.7688 19 16.25 19H3.75C2.23122 19 1 17.7688 1 16.25V3.75ZM2.5 10.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H9.25V10.75H2.5ZM9.25 9.25H2.5V3.75C2.5 3.05964 3.05964 2.5 3.75 2.5H9.25V9.25ZM10.75 10.75V17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V10.75H10.75ZM17.5 9.25H10.75V2.5H16.25C16.9404 2.5 17.5 3.05964 17.5 3.75V9.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default ViewLayoutGrid;
