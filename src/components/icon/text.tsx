import React from 'react';

const Text = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M2 2.75C2 1.7835 2.7835 1 3.75 1H16.25C17.2165 1 18 1.7835 18 2.75V4.75C18 5.16421 17.6642 5.5 17.25 5.5C16.8358 5.5 16.5 5.16421 16.5 4.75V2.75C16.5 2.61193 16.3881 2.5 16.25 2.5H10.75V17.5H13.25C13.6642 17.5 14 17.8358 14 18.25C14 18.6642 13.6642 19 13.25 19H6.75C6.33579 19 6 18.6642 6 18.25C6 17.8358 6.33579 17.5 6.75 17.5H9.25V2.5H3.75C3.61193 2.5 3.5 2.61193 3.5 2.75V4.75C3.5 5.16421 3.16421 5.5 2.75 5.5C2.33579 5.5 2 5.16421 2 4.75V2.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default Text;
