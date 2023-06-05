import React from 'react';

const InfoCircle = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10ZM10 5C10.4142 5 10.75 5.33579 10.75 5.75V7.25C10.75 7.66421 10.4142 8 10 8C9.58579 8 9.25 7.66421 9.25 7.25V5.75C9.25 5.33579 9.58579 5 10 5ZM10 10C10.4142 10 10.75 10.3358 10.75 10.75V14.25C10.75 14.6642 10.4142 15 10 15C9.58579 15 9.25 14.6642 9.25 14.25V10.75C9.25 10.3358 9.58579 10 10 10Z"
        fill={fill}
      />
    </svg>
  );
};

export default InfoCircle;
