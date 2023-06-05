import React from 'react';

const ChevronRightSmall = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M8.20041 6.23966C8.48226 5.93613 8.95681 5.91856 9.26034 6.20041L12.7603 9.45041C12.9132 9.59232 13 9.79145 13 10C13 10.2086 12.9132 10.4077 12.7603 10.5496L9.26034 13.7996C8.95681 14.0815 8.48226 14.0639 8.20041 13.7603C7.91856 13.4568 7.93613 12.9823 8.23966 12.7004L11.1478 10L8.23966 7.2996C7.93613 7.01775 7.91856 6.5432 8.20041 6.23966Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronRightSmall;
