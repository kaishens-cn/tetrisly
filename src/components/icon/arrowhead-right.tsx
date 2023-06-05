import React from 'react';

const ArrowheadRight = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M7.55352 6.10546C7.8923 5.93606 8.29771 5.97262 8.60073 6.19988L12.6007 9.19988C12.8525 9.38874 13.0007 9.68513 13.0007 9.99988C13.0007 10.3146 12.8525 10.611 12.6007 10.7999L8.60073 13.7999C8.29771 14.0271 7.8923 14.0637 7.55352 13.8943C7.21473 13.7249 7.00073 13.3787 7.00073 12.9999V6.99988C7.00073 6.62111 7.21473 6.27485 7.55352 6.10546Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowheadRight;
