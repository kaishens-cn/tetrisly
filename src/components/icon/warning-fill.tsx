import React from 'react';

const WarningFill = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M12.4484 3.38605C11.3612 1.53799 8.62982 1.53798 7.54256 3.38605L1.37892 13.8627C0.273527 15.7416 1.70153 18 3.83184 18H16.1591C18.2894 18 19.7174 15.7416 18.612 13.8627L12.4484 3.38605ZM9.25 15.25C9.25 15.6642 9.58579 16 10 16C10.4142 16 10.75 15.6642 10.75 15.25V13.75C10.75 13.3358 10.4142 13 10 13C9.58579 13 9.25 13.3358 9.25 13.75V15.25ZM9.25 10.25C9.25 10.6642 9.58579 11 10 11C10.4142 11 10.75 10.6642 10.75 10.25L10.75 6.75C10.75 6.33579 10.4142 6 10 6C9.58579 6 9.25 6.33579 9.25 6.75L9.25 10.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default WarningFill;
