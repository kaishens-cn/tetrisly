import React from 'react';

const MoreHorizontal = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4.75 10C4.75 10.8284 4.07843 11.5 3.25 11.5C2.42157 11.5 1.75 10.8284 1.75 10C1.75 9.17157 2.42157 8.5 3.25 8.5C4.07843 8.5 4.75 9.17157 4.75 10ZM11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10ZM16.75 11.5C17.5784 11.5 18.25 10.8284 18.25 10C18.25 9.17157 17.5784 8.5 16.75 8.5C15.9216 8.5 15.25 9.17157 15.25 10C15.25 10.8284 15.9216 11.5 16.75 11.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default MoreHorizontal;
