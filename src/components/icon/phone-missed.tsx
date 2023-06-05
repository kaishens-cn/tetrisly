import React from 'react';

const PhoneMissed = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M12.2197 2.21967C12.5126 1.92678 12.9874 1.92678 13.2803 2.21967L15 3.93934L16.7197 2.21967C17.0126 1.92678 17.4874 1.92678 17.7803 2.21967C18.0732 2.51256 18.0732 2.98744 17.7803 3.28033L16.0607 5L17.7803 6.71967C18.0732 7.01256 18.0732 7.48744 17.7803 7.78033C17.4874 8.07322 17.0126 8.07322 16.7197 7.78033L15 6.06066L13.2803 7.78033C12.9874 8.07322 12.5126 8.07322 12.2197 7.78033C11.9268 7.48744 11.9268 7.01256 12.2197 6.71967L13.9393 5L12.2197 3.28033C11.9268 2.98744 11.9268 2.51256 12.2197 2.21967Z"
        fill={fill}
      />
    </svg>
  );
};

export default PhoneMissed;
