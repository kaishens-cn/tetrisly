import React from 'react';

const Forward = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M9.63909 4.09255C9.87905 3.96082 10.1717 3.97029 10.4027 4.11725L18.6527 9.36725C18.869 9.50492 19 9.74357 19 10C19 10.2564 18.869 10.4951 18.6527 10.6327L10.4027 15.8827C10.1717 16.0297 9.87905 16.0392 9.63909 15.9075C9.39914 15.7757 9.25 15.5237 9.25 15.25V11.3663L2.15266 15.8827C1.92172 16.0297 1.62905 16.0392 1.38909 15.9075C1.14913 15.7757 1 15.5237 1 15.25V4.75C1 4.47627 1.14913 4.22427 1.38909 4.09255C1.62905 3.96082 1.92172 3.97029 2.15266 4.11726L9.25 8.63375V4.75C9.25 4.47626 9.39914 4.22427 9.63909 4.09255ZM10.75 13.8837L16.853 10L10.75 6.11626V13.8837ZM8.60303 10L2.5 6.11626V13.8837L8.60303 10Z"
        fill={fill}
      />
    </svg>
  );
};

export default Forward;
