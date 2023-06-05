import React from 'react';

const FormatItalic = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M11.2366 1.00001H5.75C5.33579 1.00001 5 1.3358 5 1.75001C5 2.16423 5.33579 2.50001 5.75 2.50001H10.3778L8.10508 17.5H3.75C3.33579 17.5 3 17.8358 3 18.25C3 18.6642 3.33579 19 3.75 19H8.73845C8.74679 19.0002 8.75511 19.0002 8.76341 19H14.25C14.6642 19 15 18.6642 15 18.25C15 17.8358 14.6642 17.5 14.25 17.5H9.6222L11.8949 2.50001H16.25C16.6642 2.50001 17 2.16423 17 1.75001C17 1.3358 16.6642 1.00001 16.25 1.00001H11.2615C11.2532 0.999874 11.2449 0.999874 11.2366 1.00001Z"
        fill={fill}
      />
    </svg>
  );
};

export default FormatItalic;
