import React from 'react';

const Backward = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10.3609 4.09255C10.6009 4.22427 10.75 4.47626 10.75 4.75V8.63375L17.8473 4.11726C18.0783 3.97029 18.3709 3.96082 18.6109 4.09255C18.8509 4.22427 19 4.47627 19 4.75V15.25C19 15.5237 18.8509 15.7757 18.6109 15.9075C18.3709 16.0392 18.0783 16.0297 17.8473 15.8827L10.75 11.3663V15.25C10.75 15.5237 10.6009 15.7757 10.3609 15.9075C10.1209 16.0392 9.82828 16.0297 9.59734 15.8827L1.34734 10.6327C1.13101 10.4951 1 10.2564 1 10C1 9.74357 1.13101 9.50492 1.34734 9.36725L9.59734 4.11725C9.82828 3.97029 10.1209 3.96082 10.3609 4.09255ZM9.25 6.11626L3.14697 10L9.25 13.8837V6.11626ZM11.397 10L17.5 13.8837V6.11626L11.397 10Z"
        fill={fill}
      />
    </svg>
  );
};

export default Backward;
