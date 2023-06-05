import React from 'react';

const MoreVertical = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 4.75C9.17157 4.75 8.5 4.07843 8.5 3.25C8.5 2.42157 9.17157 1.75 10 1.75C10.8284 1.75 11.5 2.42157 11.5 3.25C11.5 4.07843 10.8284 4.75 10 4.75ZM10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10C11.5 10.8284 10.8284 11.5 10 11.5ZM8.5 16.75C8.5 17.5784 9.17157 18.25 10 18.25C10.8284 18.25 11.5 17.5784 11.5 16.75C11.5 15.9216 10.8284 15.25 10 15.25C9.17157 15.25 8.5 15.9216 8.5 16.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default MoreVertical;
