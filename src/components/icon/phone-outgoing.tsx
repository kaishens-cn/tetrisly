import React from 'react';

const PhoneOutgoing = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M12 2.75C12 2.33579 12.3358 2 12.75 2L17.25 2C17.4489 2 17.6397 2.07902 17.7803 2.21967C17.921 2.36032 18 2.55109 18 2.75V7.25C18 7.66421 17.6642 8 17.25 8C16.8358 8 16.5 7.66421 16.5 7.25L16.5 4.56066L12.2803 8.78033C11.9874 9.07322 11.5126 9.07322 11.2197 8.78033C10.9268 8.48744 10.9268 8.01256 11.2197 7.71967L15.4393 3.5L12.75 3.5C12.3358 3.5 12 3.16421 12 2.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default PhoneOutgoing;
