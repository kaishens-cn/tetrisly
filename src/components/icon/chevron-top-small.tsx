import React from 'react';

const ChevronTopSmall = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 7C10.2086 7 10.4077 7.08684 10.5496 7.23966L13.7996 10.7397C14.0815 11.0432 14.0639 11.5177 13.7603 11.7996C13.4568 12.0814 12.9823 12.0639 12.7004 11.7603L10 8.85221L7.2996 11.7603C7.01775 12.0639 6.5432 12.0814 6.23967 11.7996C5.93613 11.5177 5.91856 11.0432 6.20041 10.7397L9.45041 7.23966C9.59232 7.08684 9.79145 7 10 7Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronTopSmall;
