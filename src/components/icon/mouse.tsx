import React from 'react';

const Mouse = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4 7C4 3.68629 6.68629 1 10 1C13.3137 1 16 3.68629 16 7V13C16 16.3137 13.3137 19 10 19C6.68629 19 4 16.3137 4 13V7ZM10 2.5C7.51472 2.5 5.5 4.51472 5.5 7V13C5.5 15.4853 7.51472 17.5 10 17.5C12.4853 17.5 14.5 15.4853 14.5 13V7C14.5 4.51472 12.4853 2.5 10 2.5ZM10 5C10.4142 5 10.75 5.33579 10.75 5.75V8.25C10.75 8.66421 10.4142 9 10 9C9.58579 9 9.25 8.66421 9.25 8.25V5.75C9.25 5.33579 9.58579 5 10 5Z"
        fill={fill}
      />
    </svg>
  );
};

export default Mouse;
