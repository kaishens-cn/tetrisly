import React from 'react';

const Delete = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M6 3.75C6 2.23122 7.23122 1 8.75 1H11.25C12.7688 1 14 2.23122 14 3.75V4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H16.9595L16.3538 16.4025C16.2728 17.8598 15.0675 19 13.608 19H6.39197C4.93245 19 3.72717 17.8598 3.64621 16.4025L3.04051 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75C2 4.33579 2.33579 4 2.75 4H6V3.75ZM4.54282 5.5L5.1439 16.3193C5.1807 16.9817 5.72856 17.5 6.39197 17.5H13.608C14.2714 17.5 14.8193 16.9817 14.8561 16.3193L15.4572 5.5H4.54282ZM12.5 4H7.5V3.75C7.5 3.05964 8.05964 2.5 8.75 2.5H11.25C11.9404 2.5 12.5 3.05964 12.5 3.75V4ZM7.75 8C8.16421 8 8.5 8.33579 8.5 8.75V14.25C8.5 14.6642 8.16421 15 7.75 15C7.33579 15 7 14.6642 7 14.25V8.75C7 8.33579 7.33579 8 7.75 8ZM12.25 8C12.6642 8 13 8.33579 13 8.75V14.25C13 14.6642 12.6642 15 12.25 15C11.8358 15 11.5 14.6642 11.5 14.25V8.75C11.5 8.33579 11.8358 8 12.25 8Z"
        fill={fill}
      />
    </svg>
  );
};

export default Delete;