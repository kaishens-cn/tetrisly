import React from 'react';

const FolderMinus = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 4.75C1 3.23122 2.23122 2 3.75 2H9.75C10.0008 2 10.2349 2.12533 10.374 2.33397L12.1514 5H16.25C17.7688 5 19 6.23122 19 7.75V9.25C19 9.66421 18.6642 10 18.25 10C17.8358 10 17.5 9.66421 17.5 9.25V7.75C17.5 7.05964 16.9404 6.5 16.25 6.5H2.5V15.25C2.5 15.9404 3.05964 16.5 3.75 16.5H9.25C9.66421 16.5 10 16.8358 10 17.25C10 17.6642 9.66421 18 9.25 18H3.75C2.23122 18 1 16.7688 1 15.25V4.75ZM2.5 5H10.3486L9.34861 3.5H3.75C3.05964 3.5 2.5 4.05964 2.5 4.75V5ZM12 15.75C12 15.3358 12.3358 15 12.75 15H19.25C19.6642 15 20 15.3358 20 15.75C20 16.1642 19.6642 16.5 19.25 16.5H12.75C12.3358 16.5 12 16.1642 12 15.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default FolderMinus;
