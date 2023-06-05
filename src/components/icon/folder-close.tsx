import React from 'react';

const FolderClose = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 4.75C1 3.23122 2.23122 2 3.75 2H9.75C10.0008 2 10.2349 2.12533 10.374 2.33397L12.1514 5H16.25C17.7688 5 19 6.23122 19 7.75V9.25C19 9.66421 18.6642 10 18.25 10C17.8358 10 17.5 9.66421 17.5 9.25V7.75C17.5 7.05964 16.9404 6.5 16.25 6.5H2.5V15.25C2.5 15.9404 3.05964 16.5 3.75 16.5H9.25C9.66421 16.5 10 16.8358 10 17.25C10 17.6642 9.66421 18 9.25 18H3.75C2.23122 18 1 16.7688 1 15.25V4.75ZM2.5 5H10.3486L9.34861 3.5H3.75C3.05964 3.5 2.5 4.05964 2.5 4.75V5ZM13.2197 13.2197C13.5126 12.9268 13.9874 12.9268 14.2803 13.2197L16 14.9393L17.7197 13.2197C18.0126 12.9268 18.4874 12.9268 18.7803 13.2197C19.0732 13.5126 19.0732 13.9874 18.7803 14.2803L17.0607 16L18.7803 17.7197C19.0732 18.0126 19.0732 18.4874 18.7803 18.7803C18.4874 19.0732 18.0126 19.0732 17.7197 18.7803L16 17.0607L14.2803 18.7803C13.9874 19.0732 13.5126 19.0732 13.2197 18.7803C12.9268 18.4874 12.9268 18.0126 13.2197 17.7197L14.9393 16L13.2197 14.2803C12.9268 13.9874 12.9268 13.5126 13.2197 13.2197Z"
        fill={fill}
      />
    </svg>
  );
};

export default FolderClose;
