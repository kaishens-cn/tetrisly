import React from 'react';

const ArrowDown = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 3C10.4142 3 10.75 3.33579 10.75 3.75V14.5142L13.736 11.7038C14.0376 11.42 14.5123 11.4343 14.7962 11.736C15.08 12.0376 15.0657 12.5123 14.764 12.7962L10.514 16.7962C10.2252 17.068 9.77477 17.068 9.48598 16.7962L5.23598 12.7962C4.93435 12.5123 4.91996 12.0376 5.20385 11.736C5.48774 11.4343 5.9624 11.42 6.26403 11.7038L9.25 14.5142V3.75C9.25 3.33579 9.58579 3 10 3Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowDown;
