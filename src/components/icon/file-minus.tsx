import React from 'react';

const FileMinus = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M5.75 2.5C5.05964 2.5 4.5 3.05964 4.5 3.75V16.25C4.5 16.9404 5.05964 17.5 5.75 17.5H9.25C9.66421 17.5 10 17.8358 10 18.25C10 18.6642 9.66421 19 9.25 19H5.75C4.23122 19 3 17.7688 3 16.25V3.75C3 2.23122 4.23122 1 5.75 1H11.25C11.4489 1 11.6397 1.07902 11.7803 1.21967L16.7803 6.21967C16.921 6.36032 17 6.55109 17 6.75V9.25C17 9.66421 16.6642 10 16.25 10C15.8358 10 15.5 9.66421 15.5 9.25V7.5H11.25C10.8358 7.5 10.5 7.16421 10.5 6.75V2.5H5.75ZM12 3.56066L14.4393 6H12V3.56066ZM12 15.75C12 15.3358 12.3358 15 12.75 15H19.25C19.6642 15 20 15.3358 20 15.75C20 16.1642 19.6642 16.5 19.25 16.5H12.75C12.3358 16.5 12 16.1642 12 15.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default FileMinus;
