import React from 'react';

const DragDropHorizontal = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M5.75 3.25C5.75 4.07843 6.42157 4.75 7.25 4.75C8.07843 4.75 8.75 4.07843 8.75 3.25C8.75 2.42157 8.07843 1.75 7.25 1.75C6.42157 1.75 5.75 2.42157 5.75 3.25ZM11.25 3.25C11.25 4.07843 11.9216 4.75 12.75 4.75C13.5784 4.75 14.25 4.07843 14.25 3.25C14.25 2.42157 13.5784 1.75 12.75 1.75C11.9216 1.75 11.25 2.42157 11.25 3.25ZM11.25 10C11.25 10.8284 11.9216 11.5 12.75 11.5C13.5784 11.5 14.25 10.8284 14.25 10C14.25 9.17157 13.5784 8.5 12.75 8.5C11.9216 8.5 11.25 9.17157 11.25 10ZM12.75 18.25C11.9216 18.25 11.25 17.5784 11.25 16.75C11.25 15.9216 11.9216 15.25 12.75 15.25C13.5784 15.25 14.25 15.9216 14.25 16.75C14.25 17.5784 13.5784 18.25 12.75 18.25ZM7.25 11.5C6.42157 11.5 5.75 10.8284 5.75 10C5.75 9.17157 6.42157 8.5 7.25 8.5C8.07843 8.5 8.75 9.17157 8.75 10C8.75 10.8284 8.07843 11.5 7.25 11.5ZM5.75 16.75C5.75 17.5784 6.42157 18.25 7.25 18.25C8.07843 18.25 8.75 17.5784 8.75 16.75C8.75 15.9216 8.07843 15.25 7.25 15.25C6.42157 15.25 5.75 15.9216 5.75 16.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default DragDropHorizontal;
