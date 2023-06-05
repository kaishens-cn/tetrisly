import React from 'react';

const PhoneIncoming = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M17.7803 2.21967C18.0732 2.51256 18.0732 2.98744 17.7803 3.28033L13.5607 7.5H16.25C16.6642 7.5 17 7.83579 17 8.25C17 8.66421 16.6642 9 16.25 9H11.75C11.3358 9 11 8.66421 11 8.25V3.75C11 3.33579 11.3358 3 11.75 3C12.1642 3 12.5 3.33579 12.5 3.75V6.43934L16.7197 2.21967C17.0126 1.92678 17.4874 1.92678 17.7803 2.21967Z"
        fill={fill}
      />
    </svg>
  );
};

export default PhoneIncoming;
