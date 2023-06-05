import React from 'react';

const Notification = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M16 2.5C15.1716 2.5 14.5 3.17157 14.5 4C14.5 4.82843 15.1716 5.5 16 5.5C16.8284 5.5 17.5 4.82843 17.5 4C17.5 3.17157 16.8284 2.5 16 2.5ZM13 4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4C19 5.65685 17.6569 7 16 7C14.3431 7 13 5.65685 13 4ZM1 4.75C1 3.23122 2.23122 2 3.75 2H9C9.41421 2 9.75 2.33579 9.75 2.75C9.75 3.16421 9.41421 3.5 9 3.5H3.75C3.05964 3.5 2.5 4.05964 2.5 4.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H15.25C15.9404 17.5 16.5 16.9404 16.5 16.25V11C16.5 10.5858 16.8358 10.25 17.25 10.25C17.6642 10.25 18 10.5858 18 11V16.25C18 17.7688 16.7688 19 15.25 19H3.75C2.23122 19 1 17.7688 1 16.25V4.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default Notification;
