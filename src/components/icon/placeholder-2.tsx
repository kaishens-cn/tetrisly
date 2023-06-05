import React from 'react';

const Placeholder2 = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M2.53703 9.25024H17.463C17.0867 5.46025 13.889 2.50024 10 2.50024C6.11099 2.50024 2.91332 5.46025 2.53703 9.25024ZM17.463 10.7502H2.53703C2.91332 14.5402 6.11099 17.5002 10 17.5002C13.889 17.5002 17.0867 14.5402 17.463 10.7502ZM1 10.0002C1 5.02968 5.02944 1.00024 10 1.00024C14.9706 1.00024 19 5.02968 19 10.0002C19 14.9708 14.9706 19.0002 10 19.0002C5.02944 19.0002 1 14.9708 1 10.0002Z"
        fill={fill}
      />
    </svg>
  );
};

export default Placeholder2;
