import React from 'react';

const Redo = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M18.2501 7C18.6643 7 19.0001 7.33579 19.0001 7.75V12.25C19.0001 12.6642 18.6643 13 18.2501 13H13.7501C13.3359 13 13.0001 12.6642 13.0001 12.25C13.0001 11.8358 13.3359 11.5 13.7501 11.5H16.7066C15.0325 9.77062 12.5453 8.87501 10.0001 8.87501C6.9395 8.875 3.96268 10.17 2.38284 12.6527C2.16046 13.0021 1.69689 13.1051 1.34744 12.8827C0.997982 12.6604 0.894967 12.1968 1.11735 11.8473C3.03751 8.82994 6.56069 7.375 10.0001 7.37501C12.7279 7.37501 15.5084 8.29019 17.5001 10.1742V7.75C17.5001 7.33579 17.8359 7 18.2501 7Z"
        fill={fill}
      />
    </svg>
  );
};

export default Redo;
