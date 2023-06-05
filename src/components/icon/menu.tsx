import React from 'react';

const Menu = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 4.75C1 4.33579 1.33579 4 1.75 4H18.25C18.6642 4 19 4.33579 19 4.75C19 5.16421 18.6642 5.5 18.25 5.5H1.75C1.33579 5.5 1 5.16421 1 4.75ZM1 10C1 9.58579 1.33579 9.25 1.75 9.25H18.25C18.6642 9.25 19 9.58579 19 10C19 10.4142 18.6642 10.75 18.25 10.75H1.75C1.33579 10.75 1 10.4142 1 10ZM1 15.25C1 14.8358 1.33579 14.5 1.75 14.5H18.25C18.6642 14.5 19 14.8358 19 15.25C19 15.6642 18.6642 16 18.25 16H1.75C1.33579 16 1 15.6642 1 15.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default Menu;
