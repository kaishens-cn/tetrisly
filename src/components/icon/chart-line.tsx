import React from 'react';

const ChartLine = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1.75 1C2.16421 1 2.5 1.33579 2.5 1.75V12.9393L7.21967 8.21967C7.47247 7.96687 7.86856 7.92765 8.16603 8.12596L12.1131 10.7573L17.6806 4.26191C17.9501 3.94741 18.4236 3.91099 18.7381 4.18056C19.0526 4.45012 19.089 4.9236 18.8194 5.23809L12.8194 12.2381C12.5726 12.5261 12.1496 12.5844 11.834 12.374L7.84556 9.7151L2.5 15.0607C2.50001 15.6272 2.50073 16.0085 2.52476 16.3025C2.54822 16.5896 2.5901 16.7269 2.63624 16.8175C2.75608 17.0527 2.94731 17.2439 3.18251 17.3638C3.27307 17.4099 3.41036 17.4518 3.69748 17.4752C3.99336 17.4994 4.37757 17.5 4.95 17.5H17.25C17.6642 17.5 18 17.8358 18 18.25C18 18.6642 17.6642 19 17.25 19H4.91955C4.3854 19 3.93956 19 3.57533 18.9703C3.19545 18.9392 2.83879 18.8721 2.50153 18.7003C1.98408 18.4366 1.56338 18.0159 1.29973 17.4985C1.12789 17.1612 1.06078 16.8046 1.02974 16.4247C0.999981 16.0604 0.99999 15.6146 1 15.0804L1 1.75C1 1.33579 1.33579 1 1.75 1Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChartLine;
