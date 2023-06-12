import React from 'react';

const Navigation = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M8.18094 2.30179C8.80781 0.566075 11.1921 0.566067 11.819 2.30179L16.8739 16.2982C17.1917 17.1781 16.879 18.0361 16.2915 18.5362C15.699 19.0406 14.7906 19.2041 13.995 18.6701L10.2239 16.1388C10.0854 16.0458 9.91453 16.0458 9.77604 16.1388L6.00499 18.6701C5.20939 19.2041 4.30095 19.0406 3.70848 18.5362C3.12094 18.0361 2.80827 17.1781 3.12604 16.2982L8.18094 2.30179ZM10.4082 2.81131C10.2583 2.39623 9.74167 2.39623 9.59175 2.81131L4.53685 16.8077C4.44836 17.0527 4.53047 17.2661 4.68077 17.394C4.82615 17.5178 4.9986 17.539 5.16899 17.4246L8.94005 14.8933C9.58419 14.461 10.4158 14.461 11.0599 14.8933L14.8309 17.4246C15.0013 17.539 15.1738 17.5178 15.3192 17.394C15.4695 17.2661 15.5516 17.0527 15.4631 16.8077L10.4082 2.81131Z"
        fill={fill}
      />
    </svg>
  );
};

export default Navigation;