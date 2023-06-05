import React from 'react';

const Descending = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 4C10.4142 4 10.75 4.33579 10.75 4.75V13.5142L12.736 11.7038C13.0376 11.42 13.5123 11.4343 13.7962 11.736C14.08 12.0376 14.0657 12.5123 13.764 12.7962L10.514 15.7962C10.2252 16.068 9.77477 16.068 9.48598 15.7962L6.23598 12.7962C5.93435 12.5123 5.91996 12.0376 6.20385 11.736C6.48774 11.4343 6.9624 11.42 7.26403 11.7038L9.25 13.5142V4.75C9.25 4.33579 9.58579 4 10 4Z"
        fill={fill}
      />
    </svg>
  );
};

export default Descending;
