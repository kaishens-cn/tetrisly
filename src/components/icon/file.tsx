import React from 'react';

const File = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M5.75 2.5C5.05964 2.5 4.5 3.05964 4.5 3.75V16.25C4.5 16.9404 5.05964 17.5 5.75 17.5H14.25C14.9404 17.5 15.5 16.9404 15.5 16.25V7.5H11.25C10.8358 7.5 10.5 7.16421 10.5 6.75V2.5H5.75ZM12 3.56066L14.4393 6H12V3.56066ZM3 3.75C3 2.23122 4.23122 1 5.75 1H11.25C11.4489 1 11.6397 1.07902 11.7803 1.21967L16.7803 6.21967C16.921 6.36032 17 6.55109 17 6.75V16.25C17 17.7688 15.7688 19 14.25 19H5.75C4.23122 19 3 17.7688 3 16.25V3.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default File;
