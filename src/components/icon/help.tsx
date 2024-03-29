import React from 'react';

const Help = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10ZM10 6.5C9.17157 6.5 8.5 7.17157 8.5 8C8.5 8.41421 8.16421 8.75 7.75 8.75C7.33579 8.75 7 8.41421 7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8C13 9.39788 12.0439 10.5725 10.75 10.9055V11.25C10.75 11.6642 10.4142 12 10 12C9.58579 12 9.25 11.6642 9.25 11.25V10.25C9.25 9.83579 9.58579 9.5 10 9.5C10.8284 9.5 11.5 8.82843 11.5 8C11.5 7.17157 10.8284 6.5 10 6.5ZM10 13C10.4142 13 10.75 13.3358 10.75 13.75V14.25C10.75 14.6642 10.4142 15 10 15C9.58579 15 9.25 14.6642 9.25 14.25V13.75C9.25 13.3358 9.58579 13 10 13Z"
        fill={fill}
      />
    </svg>
  );
};

export default Help;
