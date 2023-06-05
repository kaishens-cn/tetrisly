import React from 'react';

const OpenInNew = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M14 1.75C14 1.33579 14.3358 1 14.75 1H18.25C18.6642 1 19 1.33579 19 1.75V5.25C19 5.66421 18.6642 6 18.25 6C17.8358 6 17.5 5.66421 17.5 5.25V3.56066L11.5303 9.53033C11.2374 9.82322 10.7626 9.82322 10.4697 9.53033C10.1768 9.23744 10.1768 8.76256 10.4697 8.46967L16.4393 2.5H14.75C14.3358 2.5 14 2.16421 14 1.75ZM1 4.75C1 3.23122 2.23122 2 3.75 2H9C9.41421 2 9.75 2.33579 9.75 2.75C9.75 3.16421 9.41421 3.5 9 3.5H3.75C3.05964 3.5 2.5 4.05964 2.5 4.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H15.25C15.9404 17.5 16.5 16.9404 16.5 16.25V11C16.5 10.5858 16.8358 10.25 17.25 10.25C17.6642 10.25 18 10.5858 18 11V16.25C18 17.7688 16.7688 19 15.25 19H3.75C2.23122 19 1 17.7688 1 16.25V4.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default OpenInNew;
