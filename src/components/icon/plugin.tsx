import React from 'react';

const Plugin = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M7.75 1C8.16421 1 8.5 1.33579 8.5 1.75V4H11.5V1.75C11.5 1.33579 11.8358 1 12.25 1C12.6642 1 13 1.33579 13 1.75V4H14.25C15.7688 4 17 5.23122 17 6.75V9.25C17 12.8097 14.2444 15.7259 10.75 15.9818V18.25C10.75 18.6642 10.4142 19 10 19C9.58579 19 9.25 18.6642 9.25 18.25V15.9818C5.75556 15.7259 3 12.8097 3 9.25V6.75C3 5.23122 4.23122 4 5.75 4H7V1.75C7 1.33579 7.33579 1 7.75 1ZM5.75 5.5C5.05964 5.5 4.5 6.05964 4.5 6.75V9.25C4.5 12.1495 6.85051 14.5 9.75 14.5H10.25C13.1495 14.5 15.5 12.1495 15.5 9.25V6.75C15.5 6.05964 14.9404 5.5 14.25 5.5H5.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default Plugin;
