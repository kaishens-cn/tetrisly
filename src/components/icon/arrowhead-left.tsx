import React from 'react';

const ArrowheadLeft = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M12.4472 13.8944C12.1084 14.0638 11.703 14.0273 11.4 13.8L7.4 10.8C7.14819 10.6112 7 10.3148 7 10C7 9.68525 7.14819 9.38886 7.4 9.20001L11.4 6.20001C11.703 5.97274 12.1084 5.93619 12.4472 6.10558C12.786 6.27497 13 6.62123 13 7.00001V13C13 13.3788 12.786 13.725 12.4472 13.8944Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowheadLeft;
