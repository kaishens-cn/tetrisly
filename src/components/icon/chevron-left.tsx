import React from 'react';

const ChevronLeft = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M12.7925 4.23214C13.0785 4.53177 13.0675 5.00651 12.7679 5.29252L7.83621 10L12.7679 14.7075C13.0675 14.9935 13.0785 15.4682 12.7925 15.7679C12.5065 16.0675 12.0318 16.0785 11.7321 15.7925L6.23214 10.5425C6.08388 10.401 6 10.205 6 10C6 9.79504 6.08388 9.59901 6.23214 9.45748L11.7321 4.20748C12.0318 3.92148 12.5065 3.93252 12.7925 4.23214Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronLeft;
