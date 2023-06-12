import React from 'react';

const ChartBarBox = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 3.75C1 2.23122 2.23122 1 3.75 1H16.25C17.7688 1 19 2.23122 19 3.75V16.25C19 17.7688 17.7688 19 16.25 19H3.75C2.23122 19 1 17.7688 1 16.25V3.75ZM3.75 2.5C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5H3.75ZM10 5C10.4142 5 10.75 5.33579 10.75 5.75V14.25C10.75 14.6642 10.4142 15 10 15C9.58579 15 9.25 14.6642 9.25 14.25V5.75C9.25 5.33579 9.58579 5 10 5ZM6.75 8C7.16421 8 7.5 8.33579 7.5 8.75V14.25C7.5 14.6642 7.16421 15 6.75 15C6.33579 15 6 14.6642 6 14.25V8.75C6 8.33579 6.33579 8 6.75 8ZM13.25 10C13.6642 10 14 10.3358 14 10.75V14.25C14 14.6642 13.6642 15 13.25 15C12.8358 15 12.5 14.6642 12.5 14.25V10.75C12.5 10.3358 12.8358 10 13.25 10Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChartBarBox;