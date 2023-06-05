import React from 'react';

const ArrowLeft = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M8.26402 5.20385C8.56565 5.48774 8.58004 5.9624 8.29615 6.26403L5.48582 9.25H16.25C16.6642 9.25 17 9.58579 17 10C17 10.4142 16.6642 10.75 16.25 10.75H5.48582L8.29615 13.736C8.58004 14.0376 8.56565 14.5123 8.26402 14.7962C7.96239 15.08 7.48774 15.0657 7.20385 14.764L3.20385 10.514C2.93205 10.2252 2.93205 9.77477 3.20385 9.48598L7.20385 5.23598C7.48774 4.93435 7.96239 4.91996 8.26402 5.20385Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowLeft;
