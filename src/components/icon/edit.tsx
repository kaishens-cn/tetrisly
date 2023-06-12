import React from 'react';

const Edit = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M12.8912 2.0481C13.5623 1.37701 14.4725 1 15.4216 1C17.3979 1 19 2.60212 19 4.57843C19 5.52748 18.623 6.43767 17.9519 7.10876L6.28033 18.7803C6.13968 18.921 5.94891 19 5.75 19H1.75C1.33579 19 1 18.6642 1 18.25V14.25C1 14.0511 1.07902 13.8603 1.21967 13.7197L12.8912 2.0481ZM15.4216 2.5C14.8703 2.5 14.3417 2.71898 13.9519 3.10876L13.5607 3.5L16.5 6.43934L16.8912 6.0481C17.281 5.65832 17.5 5.12966 17.5 4.57843C17.5 3.43054 16.5695 2.5 15.4216 2.5ZM15.4393 7.5L12.5 4.56066L2.5 14.5607V17.5H5.43934L15.4393 7.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default Edit;