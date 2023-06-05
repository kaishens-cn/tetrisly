import React from 'react';

const ArrowheadUp = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 6.99994C10.3148 6.99994 10.6112 7.14813 10.8 7.39994L13.8 11.3999C14.0273 11.703 14.0638 12.1084 13.8944 12.4472C13.725 12.7859 13.3788 12.9999 13 12.9999H7.00001C6.62123 12.9999 6.27497 12.7859 6.10558 12.4472C5.93619 12.1084 5.97274 11.703 6.20001 11.3999L9.20001 7.39994C9.38886 7.14813 9.68525 6.99994 10 6.99994Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowheadUp;
