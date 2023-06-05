import React from 'react';

const Comment = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 3.75C1 2.23122 2.23122 1 3.75 1H16.25C17.7688 1 19 2.23122 19 3.75V13.25C19 14.7688 17.7688 16 16.25 16H13.25C12.8566 16 12.4861 16.1852 12.25 16.5L10.6 18.7C10.4584 18.8889 10.2361 19 10 19C9.76393 19 9.54164 18.8889 9.4 18.7L7.75 16.5C7.51393 16.1852 7.14345 16 6.75 16H3.75C2.23122 16 1 14.7688 1 13.25V3.75ZM3.75 2.5C3.05964 2.5 2.5 3.05964 2.5 3.75V13.25C2.5 13.9404 3.05964 14.5 3.75 14.5H6.75C7.61558 14.5 8.43065 14.9075 8.95 15.6L10 17L11.05 15.6C11.5693 14.9075 12.3844 14.5 13.25 14.5H16.25C16.9404 14.5 17.5 13.9404 17.5 13.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5H3.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default Comment;
