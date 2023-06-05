import React from 'react';

const FormatAlignCenter = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 3.25C1 2.83579 1.33579 2.5 1.75 2.5H18.25C18.6642 2.5 19 2.83579 19 3.25C19 3.66421 18.6642 4 18.25 4H1.75C1.33579 4 1 3.66421 1 3.25ZM5 7.75C5 7.33579 5.33579 7 5.75 7H14.25C14.6642 7 15 7.33579 15 7.75C15 8.16421 14.6642 8.5 14.25 8.5H5.75C5.33579 8.5 5 8.16421 5 7.75ZM1 12.25C1 11.8358 1.33579 11.5 1.75 11.5H18.25C18.6642 11.5 19 11.8358 19 12.25C19 12.6642 18.6642 13 18.25 13H1.75C1.33579 13 1 12.6642 1 12.25ZM5 16.75C5 16.3358 5.33579 16 5.75 16H14.25C14.6642 16 15 16.3358 15 16.75C15 17.1642 14.6642 17.5 14.25 17.5H5.75C5.33579 17.5 5 17.1642 5 16.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default FormatAlignCenter;
