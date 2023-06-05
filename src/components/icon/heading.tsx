import React from 'react';

const Heading = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M3 1.75C3 1.33579 3.33579 1 3.75 1H7.75C8.16421 1 8.5 1.33579 8.5 1.75C8.5 2.16421 8.16421 2.5 7.75 2.5H6.5V9.25H14V2.5H12.75C12.3358 2.5 12 2.16421 12 1.75C12 1.33579 12.3358 1 12.75 1H16.75C17.1642 1 17.5 1.33579 17.5 1.75C17.5 2.16421 17.1642 2.5 16.75 2.5H15.5V17.5H16.75C17.1642 17.5 17.5 17.8358 17.5 18.25C17.5 18.6642 17.1642 19 16.75 19H12.75C12.3358 19 12 18.6642 12 18.25C12 17.8358 12.3358 17.5 12.75 17.5H14V10.75H6.5V17.5H7.75C8.16421 17.5 8.5 17.8358 8.5 18.25C8.5 18.6642 8.16421 19 7.75 19H3.75C3.33579 19 3 18.6642 3 18.25C3 17.8358 3.33579 17.5 3.75 17.5H5V2.5H3.75C3.33579 2.5 3 2.16421 3 1.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default Heading;
