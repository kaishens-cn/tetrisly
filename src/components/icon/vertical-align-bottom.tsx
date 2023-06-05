import React from 'react';

const VerticalAlignBottom = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 1C10.4142 1 10.75 1.33579 10.75 1.75V13.5142L13.736 10.7038C14.0376 10.42 14.5123 10.4343 14.7962 10.736C15.08 11.0376 15.0657 11.5123 14.764 11.7962L10.514 15.7962C10.2252 16.068 9.77477 16.068 9.48598 15.7962L5.23598 11.7962C4.93435 11.5123 4.91996 11.0376 5.20385 10.736C5.48774 10.4343 5.96239 10.42 6.26402 10.7038L9.25 13.5142V1.75C9.25 1.33579 9.58579 1 10 1ZM1 18.25C1 17.8358 1.33579 17.5 1.75 17.5H18.25C18.6642 17.5 19 17.8358 19 18.25C19 18.6642 18.6642 19 18.25 19H1.75C1.33579 19 1 18.6642 1 18.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default VerticalAlignBottom;
