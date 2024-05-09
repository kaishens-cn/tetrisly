import React from 'react';

const Scale = (props: React.SVGAttributes<SVGElement>) => {
  const { width = 20, height = 20, fill = '#272E35', ...resetProps } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...resetProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M849 95c44.183 0 80 35.817 80 80v674c0 44.183-35.817 80-80 80H175c-44.183 0-80-35.817-80-80V175c0-44.183 35.817-80 80-80h674z m0.25 72H175a8.006 8.006 0 0 0-8 7.75V849a8.006 8.006 0 0 0 7.75 8H849a8.006 8.006 0 0 0 8-7.75V175a8.006 8.006 0 0 0-7.75-8z"
        fill={fill}
      />
    </svg>
  );
};

export default Scale;
