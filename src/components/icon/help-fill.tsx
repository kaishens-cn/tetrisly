import React from 'react';

const HelpFill = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1ZM8.5 8C8.5 7.17157 9.17157 6.5 10 6.5C10.8284 6.5 11.5 7.17157 11.5 8C11.5 8.82843 10.8284 9.5 10 9.5C9.58579 9.5 9.25 9.83579 9.25 10.25V11.25C9.25 11.6642 9.58579 12 10 12C10.4142 12 10.75 11.6642 10.75 11.25V10.9055C12.0439 10.5725 13 9.39788 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 8.41421 7.33579 8.75 7.75 8.75C8.16421 8.75 8.5 8.41421 8.5 8ZM10.75 13.75C10.75 13.3358 10.4142 13 10 13C9.58579 13 9.25 13.3358 9.25 13.75V14.25C9.25 14.6642 9.58579 15 10 15C10.4142 15 10.75 14.6642 10.75 14.25V13.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default HelpFill;
