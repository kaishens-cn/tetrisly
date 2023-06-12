import React from 'react';

const Heart = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M13.5114 3.52466C12.5339 3.64836 11.4821 4.25635 10.6381 5.62276C10.5014 5.84396 10.26 5.97861 10 5.97862C9.74001 5.97862 9.49856 5.84397 9.36192 5.62277C8.51788 4.25639 7.46611 3.6484 6.48858 3.52469C5.49958 3.39953 4.48262 3.75591 3.68466 4.51782C2.10476 6.04032 2.10511 8.60636 3.68571 10.1284L10 16.2088L16.3143 10.1284C17.8949 8.60636 17.8952 6.04034 16.3154 4.51783C15.5174 3.75591 14.5004 3.39951 13.5114 3.52466ZM13.3231 2.03653C14.8073 1.84872 16.2635 2.39361 17.3526 3.4343L17.3548 3.43632C19.5484 5.54873 19.5484 9.09648 17.3548 11.2089L10.5202 17.7902C10.2298 18.0699 9.77021 18.0699 9.47977 17.7902L2.64525 11.2089C0.451585 9.09648 0.451585 5.54873 2.64525 3.43632L2.64735 3.4343L2.64735 3.4343C3.73653 2.3936 5.19273 1.84874 6.6769 2.03656C7.88681 2.18967 9.04816 2.82046 9.99999 3.94947C10.9518 2.82043 12.1132 2.18963 13.3231 2.03653Z"
        fill={fill}
      />
    </svg>
  );
};

export default Heart;