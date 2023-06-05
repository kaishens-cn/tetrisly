import React from 'react';

const HorizontalAlignLeft = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1.75 1C2.16421 1 2.5 1.33579 2.5 1.75L2.5 18.25C2.5 18.6642 2.16421 19 1.75 19C1.33579 19 1 18.6642 1 18.25L1 1.75C1 1.33579 1.33579 1 1.75 1ZM9.26402 5.20385C9.56565 5.48774 9.58004 5.96239 9.29615 6.26402L6.48582 9.25L18.25 9.25C18.6642 9.25 19 9.58579 19 10C19 10.4142 18.6642 10.75 18.25 10.75L6.48582 10.75L9.29615 13.736C9.58004 14.0376 9.56565 14.5123 9.26402 14.7962C8.96239 15.08 8.48774 15.0657 8.20385 14.764L4.20385 10.514C3.93205 10.2252 3.93205 9.77477 4.20385 9.48598L8.20385 5.23598C8.48774 4.93435 8.96239 4.91996 9.26402 5.20385Z"
        fill={fill}
      />
    </svg>
  );
};

export default HorizontalAlignLeft;
