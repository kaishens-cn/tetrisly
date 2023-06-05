import React from 'react';

const Unlock = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M6 5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5V5.25C14 5.66421 13.6642 6 13.25 6C12.8358 6 12.5 5.66421 12.5 5.25V5C12.5 3.61929 11.3807 2.5 10 2.5C8.61929 2.5 7.5 3.61929 7.5 5V8H15.25C16.7688 8 18 9.23122 18 10.75V16.25C18 17.7688 16.7688 19 15.25 19H4.75C3.23122 19 2 17.7688 2 16.25V10.75C2 9.23122 3.23122 8 4.75 8H6V5ZM4.75 9.5C4.05964 9.5 3.5 10.0596 3.5 10.75V16.25C3.5 16.9404 4.05964 17.5 4.75 17.5H15.25C15.9404 17.5 16.5 16.9404 16.5 16.25V10.75C16.5 10.0596 15.9404 9.5 15.25 9.5H4.75ZM10 12C10.4142 12 10.75 12.3358 10.75 12.75V14.25C10.75 14.6642 10.4142 15 10 15C9.58579 15 9.25 14.6642 9.25 14.25V12.75C9.25 12.3358 9.58579 12 10 12Z"
        fill={fill}
      />
    </svg>
  );
};

export default Unlock;
