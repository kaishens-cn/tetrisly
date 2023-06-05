import React from 'react';

const CheckSmall = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M15.7713 5.71076C16.0691 5.99865 16.0771 6.47345 15.7892 6.77127L8.53924 14.2713C8.39611 14.4193 8.1984 14.502 7.99248 14.5C7.78655 14.4979 7.59054 14.4112 7.45041 14.2603L4.20041 10.7603C3.91856 10.4568 3.93613 9.98226 4.23966 9.7004C4.5432 9.41855 5.01775 9.43613 5.2996 9.73966L8.01095 12.6596L14.7108 5.72873C14.9987 5.43092 15.4735 5.42287 15.7713 5.71076Z"
        fill={fill}
      />
    </svg>
  );
};

export default CheckSmall;
