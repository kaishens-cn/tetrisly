import React from 'react';

const Flag = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4.75 2.5C4.05964 2.5 3.5 3.05964 3.5 3.75V11.5H15.7357L12.6534 7.45453C12.4489 7.18604 12.4489 6.81396 12.6534 6.54547L15.7357 2.5H4.75ZM3.5 13V18.25C3.5 18.6642 3.16421 19 2.75 19C2.33579 19 2 18.6642 2 18.25V3.75C2 2.23122 3.23122 1 4.75 1H17.25C17.5351 1 17.7956 1.16165 17.9221 1.41713C18.0486 1.67262 18.0194 1.97775 17.8466 2.20453L14.1929 7L17.8466 11.7955C18.0194 12.0222 18.0486 12.3274 17.9221 12.5829C17.7956 12.8384 17.5351 13 17.25 13H3.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default Flag;
