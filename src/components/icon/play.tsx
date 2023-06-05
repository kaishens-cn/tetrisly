import React from 'react';

const Play = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M5.39409 3.08983C5.63684 2.95896 5.93182 2.97187 6.16221 3.12344L15.6622 9.37344C15.8731 9.51215 16 9.74762 16 10C16 10.2524 15.8731 10.4878 15.6622 10.6266L6.16221 16.8766C5.93182 17.0281 5.63684 17.041 5.39409 16.9102C5.15135 16.7793 5 16.5258 5 16.25V3.75C5 3.47422 5.15135 3.22069 5.39409 3.08983ZM6.5 5.14118V14.8588L13.8854 10L6.5 5.14118Z"
        fill={fill}
      />
    </svg>
  );
};

export default Play;
