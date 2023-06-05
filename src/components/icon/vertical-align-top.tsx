import React from 'react';

const VerticalAlignTop = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 1.75C1 1.33579 1.33579 1 1.75 1H18.25C18.6642 1 19 1.33579 19 1.75C19 2.16421 18.6642 2.5 18.25 2.5H1.75C1.33579 2.5 1 2.16421 1 1.75ZM9.48598 4.20385C9.77477 3.93205 10.2252 3.93205 10.514 4.20385L14.764 8.20385C15.0657 8.48774 15.08 8.96239 14.7962 9.26402C14.5123 9.56565 14.0376 9.58004 13.736 9.29615L10.75 6.48582V18.25C10.75 18.6642 10.4142 19 10 19C9.58579 19 9.25 18.6642 9.25 18.25V6.48582L6.26402 9.29615C5.96239 9.58004 5.48774 9.56565 5.20385 9.26402C4.91996 8.96239 4.93435 8.48774 5.23598 8.20385L9.48598 4.20385Z"
        fill={fill}
      />
    </svg>
  );
};

export default VerticalAlignTop;
