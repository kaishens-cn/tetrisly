import React from 'react';

const Placeholder = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 2.50024C5.85786 2.50024 2.5 5.85811 2.5 10.0002C2.5 14.1424 5.85786 17.5002 10 17.5002C14.1421 17.5002 17.5 14.1424 17.5 10.0002C17.5 5.85811 14.1421 2.50024 10 2.50024ZM1 10.0002C1 5.02968 5.02944 1.00024 10 1.00024C14.9706 1.00024 19 5.02968 19 10.0002C19 14.9708 14.9706 19.0002 10 19.0002C5.02944 19.0002 1 14.9708 1 10.0002Z"
        fill={fill}
      />
    </svg>
  );
};

export default Placeholder;
