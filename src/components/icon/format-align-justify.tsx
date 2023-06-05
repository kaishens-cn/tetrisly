import React from 'react';

const FormatAlignJustify = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 3.25C1 2.83579 1.33579 2.5 1.75 2.5H18.25C18.6642 2.5 19 2.83579 19 3.25C19 3.66421 18.6642 4 18.25 4H1.75C1.33579 4 1 3.66421 1 3.25ZM1 7.75C1 7.33579 1.33579 7 1.75 7H18.25C18.6642 7 19 7.33579 19 7.75C19 8.16421 18.6642 8.5 18.25 8.5H1.75C1.33579 8.5 1 8.16421 1 7.75ZM1 12.25C1 11.8358 1.33579 11.5 1.75 11.5H18.25C18.6642 11.5 19 11.8358 19 12.25C19 12.6642 18.6642 13 18.25 13H1.75C1.33579 13 1 12.6642 1 12.25ZM1 16.75C1 16.3358 1.33579 16 1.75 16H18.25C18.6642 16 19 16.3358 19 16.75C19 17.1642 18.6642 17.5 18.25 17.5H1.75C1.33579 17.5 1 17.1642 1 16.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default FormatAlignJustify;
