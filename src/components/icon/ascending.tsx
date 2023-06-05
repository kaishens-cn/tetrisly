import React from 'react';

const Ascending = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M9.48598 4.20385C9.77477 3.93205 10.2252 3.93205 10.514 4.20385L13.764 7.20385C14.0657 7.48774 14.08 7.96239 13.7962 8.26402C13.5123 8.56565 13.0376 8.58004 12.736 8.29615L10.75 6.48582L10.75 15.25C10.75 15.6642 10.4142 16 10 16C9.58579 16 9.25 15.6642 9.25 15.25L9.25 6.48582L7.26403 8.29615C6.9624 8.58004 6.48774 8.56565 6.20385 8.26402C5.91996 7.96239 5.93435 7.48774 6.23598 7.20385L9.48598 4.20385Z"
        fill={fill}
      />
    </svg>
  );
};

export default Ascending;
