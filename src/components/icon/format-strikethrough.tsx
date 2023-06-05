import React from 'react';

const FormatStrikethrough = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M3 1.75C3 1.33579 3.33579 1 3.75 1H16.25C16.6642 1 17 1.33579 17 1.75C17 2.16421 16.6642 2.5 16.25 2.5H10.75V5.25C10.75 5.66421 10.4142 6 10 6C9.58579 6 9.25 5.66421 9.25 5.25V2.5H3.75C3.33579 2.5 3 2.16421 3 1.75ZM2 10C2 9.58579 2.33579 9.25 2.75 9.25H17.25C17.6642 9.25 18 9.58579 18 10C18 10.4142 17.6642 10.75 17.25 10.75H2.75C2.33579 10.75 2 10.4142 2 10ZM10 13C10.4142 13 10.75 13.3358 10.75 13.75V18.25C10.75 18.6642 10.4142 19 10 19C9.58579 19 9.25 18.6642 9.25 18.25V13.75C9.25 13.3358 9.58579 13 10 13Z"
        fill={fill}
      />
    </svg>
  );
};

export default FormatStrikethrough;
