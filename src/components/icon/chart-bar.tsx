import React from 'react';

const ChartBar = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M6.75 2.75C6.75 1.7835 7.5335 1 8.5 1H11.5C12.4665 1 13.25 1.7835 13.25 2.75V10H16.25C17.2165 10 18 10.7835 18 11.75V17.25C18 18.2165 17.2165 19 16.25 19H3.75C2.7835 19 2 18.2165 2 17.25V7.75C2 6.7835 2.7835 6 3.75 6H6.75V2.75ZM6.75 7.5H3.75C3.61193 7.5 3.5 7.61193 3.5 7.75V17.25C3.5 17.3881 3.61193 17.5 3.75 17.5H6.75V7.5ZM8.25 17.5H11.75V2.75C11.75 2.61193 11.6381 2.5 11.5 2.5H8.5C8.36193 2.5 8.25 2.61193 8.25 2.75V17.5ZM13.25 17.5H16.25C16.3881 17.5 16.5 17.3881 16.5 17.25V11.75C16.5 11.6119 16.3881 11.5 16.25 11.5H13.25V17.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChartBar;
