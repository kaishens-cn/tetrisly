import React from 'react';

const FormatUnderline = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4.75 1C5.16421 1 5.5 1.33579 5.5 1.75V11C5.5 13.4853 7.51472 15.5 10 15.5C12.4853 15.5 14.5 13.4853 14.5 11V1.75C14.5 1.33579 14.8358 1 15.25 1C15.6642 1 16 1.33579 16 1.75V11C16 14.3137 13.3137 17 10 17C6.68629 17 4 14.3137 4 11V1.75C4 1.33579 4.33579 1 4.75 1ZM3 19.25C3 18.8358 3.33579 18.5 3.75 18.5H16.25C16.6642 18.5 17 18.8358 17 19.25C17 19.6642 16.6642 20 16.25 20H3.75C3.33579 20 3 19.6642 3 19.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default FormatUnderline;
