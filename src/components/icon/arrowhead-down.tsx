import React from 'react';

const ArrowheadDown = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 12.9998C9.68524 12.9998 9.38885 12.8516 9.2 12.5998L6.20001 8.59976C5.97274 8.29674 5.93619 7.89133 6.10558 7.55254C6.27497 7.21376 6.62123 6.99976 7 6.99976H13C13.3788 6.99976 13.725 7.21376 13.8944 7.55254C14.0638 7.89133 14.0273 8.29674 13.8 8.59976L10.8 12.5998C10.6111 12.8516 10.3148 12.9998 10 12.9998Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowheadDown;
