import React from 'react';

const Calendar = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M6.75 1C7.16421 1 7.5 1.33579 7.5 1.75V3H12.5V1.75C12.5 1.33579 12.8358 1 13.25 1C13.6642 1 14 1.33579 14 1.75V3H16.25C17.7688 3 19 4.23122 19 5.75V16.25C19 17.7688 17.7688 19 16.25 19H3.75C2.23122 19 1 17.7688 1 16.25V5.75C1 4.23122 2.23122 3 3.75 3H6V1.75C6 1.33579 6.33579 1 6.75 1ZM6 4.5H3.75C3.05964 4.5 2.5 5.05964 2.5 5.75V8H17.5V5.75C17.5 5.05964 16.9404 4.5 16.25 4.5H14V5.25C14 5.66421 13.6642 6 13.25 6C12.8358 6 12.5 5.66421 12.5 5.25V4.5H7.5V5.25C7.5 5.66421 7.16421 6 6.75 6C6.33579 6 6 5.66421 6 5.25V4.5ZM17.5 9.5H2.5V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V9.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default Calendar;
