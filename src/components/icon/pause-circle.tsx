import React from 'react';

const PauseCircle = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10ZM7.75 6C8.16421 6 8.5 6.33579 8.5 6.75V13.25C8.5 13.6642 8.16421 14 7.75 14C7.33579 14 7 13.6642 7 13.25V6.75C7 6.33579 7.33579 6 7.75 6ZM12.25 6C12.6642 6 13 6.33579 13 6.75V13.25C13 13.6642 12.6642 14 12.25 14C11.8358 14 11.5 13.6642 11.5 13.25V6.75C11.5 6.33579 11.8358 6 12.25 6Z"
        fill={fill}
      />
    </svg>
  );
};

export default PauseCircle;
