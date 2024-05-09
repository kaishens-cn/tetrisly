import React from 'react';

const Scale = (props: React.SVGAttributes<SVGElement>) => {
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
        d="m14.56,15.5H5.44c-.52,0-.94-.42-.94-.94V5.44c0-.52.42-.94.94-.94h9.11c.52,0,.94.42.94.94v9.11c0,.52-.42.94-.94.94Z"
        stroke={fill}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default Scale;
