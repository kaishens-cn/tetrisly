import React from 'react';

const FormatBold = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4 2.75C4 1.7835 4.7835 1 5.75 1H9.5C12.1631 1 14.5 3.15392 14.5 5.875C14.5 7.35953 13.8044 8.67524 12.7398 9.56448C14.6037 10.2572 16 12.0217 16 14.125C16 16.8461 13.6631 19 11 19H5.75C4.7835 19 4 18.2165 4 17.25V2.75ZM9.5 9.25C11.3932 9.25 13 7.71027 13 5.875C13 4.03973 11.3932 2.5 9.5 2.5H5.75C5.61193 2.5 5.5 2.61193 5.5 2.75V9.25H9.5ZM5.5 10.75H11C12.8932 10.75 14.5 12.2897 14.5 14.125C14.5 15.9603 12.8932 17.5 11 17.5H5.75C5.61193 17.5 5.5 17.3881 5.5 17.25V10.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default FormatBold;
