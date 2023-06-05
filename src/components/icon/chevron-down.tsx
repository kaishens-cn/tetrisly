import React from 'react';

const ChevronDown = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4.23214 7.20748C4.53177 6.92148 5.00651 6.93252 5.29252 7.23214L10 12.1638L14.7075 7.23215C14.9935 6.93252 15.4682 6.92148 15.7679 7.20749C16.0675 7.49349 16.0785 7.96824 15.7925 8.26786L10.5425 13.7679C10.401 13.9161 10.205 14 10 14C9.79504 14 9.59901 13.9161 9.45748 13.7679L4.20748 8.26786C3.92148 7.96823 3.93252 7.49349 4.23214 7.20748Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronDown;
