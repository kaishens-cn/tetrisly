import React from 'react';

const Pause = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M7.75 4C8.16421 4 8.5 4.33579 8.5 4.75V15.25C8.5 15.6642 8.16421 16 7.75 16C7.33579 16 7 15.6642 7 15.25V4.75C7 4.33579 7.33579 4 7.75 4ZM12.25 4C12.6642 4 13 4.33579 13 4.75V15.25C13 15.6642 12.6642 16 12.25 16C11.8358 16 11.5 15.6642 11.5 15.25V4.75C11.5 4.33579 11.8358 4 12.25 4Z"
        fill={fill}
      />
    </svg>
  );
};

export default Pause;
