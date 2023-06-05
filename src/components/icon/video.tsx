import React from 'react';

const Video = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 4.75C1 3.23122 2.23122 2 3.75 2H16.25C17.7688 2 19 3.23122 19 4.75V15.25C19 16.7688 17.7688 18 16.25 18H3.75C2.23122 18 1 16.7688 1 15.25V4.75ZM2.5 7.25V9.25H5V7.25H2.5ZM5 5.75H2.5V4.75C2.5 4.05964 3.05964 3.5 3.75 3.5H5V5.75ZM6.5 16.5H13.5V3.5H6.5V16.5ZM15 3.5V5.75H17.5V4.75C17.5 4.05964 16.9404 3.5 16.25 3.5H15ZM17.5 7.25H15V9.25H17.5V7.25ZM17.5 10.75H15V12.75H17.5V10.75ZM17.5 14.25H15V16.5H16.25C16.9404 16.5 17.5 15.9404 17.5 15.25V14.25ZM5 16.5V14.25H2.5V15.25C2.5 15.9404 3.05964 16.5 3.75 16.5H5ZM2.5 12.75H5V10.75H2.5V12.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default Video;
