import React from 'react';

const InfoFill = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1ZM10 5C10.4142 5 10.75 5.33579 10.75 5.75V7.25C10.75 7.66421 10.4142 8 10 8C9.58579 8 9.25 7.66421 9.25 7.25V5.75C9.25 5.33579 9.58579 5 10 5ZM10 10C10.4142 10 10.75 10.3358 10.75 10.75L10.75 14.25C10.75 14.6642 10.4142 15 10 15C9.58579 15 9.25 14.6642 9.25 14.25L9.25 10.75C9.25 10.3358 9.58579 10 10 10Z"
        fill={fill}
      />
    </svg>
  );
};

export default InfoFill;
