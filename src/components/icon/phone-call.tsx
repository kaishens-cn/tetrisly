import React from 'react';

const PhoneCall = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M12.25 1.75C12.25 1.33579 12.5858 1 13 1C16.3137 1 19 3.68629 19 7C19 7.41421 18.6642 7.75 18.25 7.75C17.8358 7.75 17.5 7.41421 17.5 7C17.5 4.51472 15.4853 2.5 13 2.5C12.5858 2.5 12.25 2.16421 12.25 1.75ZM11.25 4.75C11.25 4.33579 11.5858 4 12 4C14.2091 4 16 5.79086 16 8C16 8.41421 15.6642 8.75 15.25 8.75C14.8358 8.75 14.5 8.41421 14.5 8C14.5 6.61929 13.3807 5.5 12 5.5C11.5858 5.5 11.25 5.16421 11.25 4.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default PhoneCall;
