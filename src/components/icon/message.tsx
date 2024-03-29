import React from 'react';

const Message = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 4.75C1 3.23122 2.23122 2 3.75 2H16.25C17.7688 2 19 3.23122 19 4.75V12.25C19 13.7688 17.7688 15 16.25 15H10.6199C10.5602 15 10.5025 15.0213 10.4572 15.0602L7.23809 17.8194C7.01571 18.0101 6.70271 18.0538 6.43661 17.9314C6.17051 17.809 6 17.5429 6 17.25V15.25C6 15.1119 5.88807 15 5.75 15H3.75C2.23122 15 1 13.7688 1 12.25V4.75ZM3.75 3.5C3.05964 3.5 2.5 4.05964 2.5 4.75V12.25C2.5 12.9404 3.05964 13.5 3.75 13.5H5.75C6.7165 13.5 7.5 14.2835 7.5 15.25V15.6193L9.48104 13.9213C9.79821 13.6494 10.2022 13.5 10.6199 13.5H16.25C16.9404 13.5 17.5 12.9404 17.5 12.25V4.75C17.5 4.05964 16.9404 3.5 16.25 3.5H3.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default Message;
