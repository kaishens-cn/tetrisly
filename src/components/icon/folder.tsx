import React from 'react';

const Folder = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 4.75C1 3.23122 2.23122 2 3.75 2H9.75C10.0008 2 10.2349 2.12533 10.374 2.33397L12.1514 5H16.25C17.7688 5 19 6.23122 19 7.75V15.25C19 16.7688 17.7688 18 16.25 18H3.75C2.23122 18 1 16.7688 1 15.25V4.75ZM10.3486 5L9.34861 3.5H3.75C3.05964 3.5 2.5 4.05964 2.5 4.75V5H10.3486ZM2.5 6.5V15.25C2.5 15.9404 3.05964 16.5 3.75 16.5H16.25C16.9404 16.5 17.5 15.9404 17.5 15.25V7.75C17.5 7.05964 16.9404 6.5 16.25 6.5H2.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default Folder;
