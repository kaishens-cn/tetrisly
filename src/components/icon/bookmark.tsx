import React from 'react';

const Bookmark = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M3 3.75C3 2.23122 4.23122 1 5.75 1H14.25C15.7688 1 17 2.23122 17 3.75V18.25C17 18.5078 16.8676 18.7475 16.6494 18.8848C16.4312 19.0221 16.1578 19.0377 15.9255 18.9261L10.5409 16.3416C10.199 16.1774 9.80102 16.1774 9.45909 16.3416L4.07455 18.9261C3.84215 19.0377 3.56875 19.0221 3.35057 18.8848C3.13239 18.7475 3 18.5078 3 18.25V3.75ZM5.75 2.5C5.05964 2.5 4.5 3.05964 4.5 3.75V17.0581L8.80999 14.9893C9.56224 14.6282 10.4378 14.6282 11.19 14.9893L15.5 17.0581V3.75C15.5 3.05964 14.9404 2.5 14.25 2.5H5.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default Bookmark;
