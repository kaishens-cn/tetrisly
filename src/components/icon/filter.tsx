import React from 'react';

const Filter = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 4.75C1 4.33579 1.33579 4 1.75 4H18.25C18.6642 4 19 4.33579 19 4.75C19 5.16421 18.6642 5.5 18.25 5.5H1.75C1.33579 5.5 1 5.16421 1 4.75ZM4 10C4 9.58579 4.33579 9.25 4.75 9.25H15.25C15.6642 9.25 16 9.58579 16 10C16 10.4142 15.6642 10.75 15.25 10.75H4.75C4.33579 10.75 4 10.4142 4 10ZM7 15.25C7 14.8358 7.33579 14.5 7.75 14.5H12.25C12.6642 14.5 13 14.8358 13 15.25C13 15.6642 12.6642 16 12.25 16H7.75C7.33579 16 7 15.6642 7 15.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default Filter;
