import React from 'react';

const CalendarEdit = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M6.75 1C7.16421 1 7.5 1.33579 7.5 1.75V3H12.5V1.75C12.5 1.33579 12.8358 1 13.25 1C13.6642 1 14 1.33579 14 1.75V3H16.25C17.7688 3 19 4.23122 19 5.75V8.75C19 9.16421 18.6642 9.5 18.25 9.5H2.5V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H8.75C9.16421 17.5 9.5 17.8358 9.5 18.25C9.5 18.6642 9.16421 19 8.75 19H3.75C2.23122 19 1 17.7688 1 16.25V5.75C1 4.23122 2.23122 3 3.75 3H6V1.75C6 1.33579 6.33579 1 6.75 1ZM6 4.5H3.75C3.05964 4.5 2.5 5.05964 2.5 5.75V8H17.5V5.75C17.5 5.05964 16.9404 4.5 16.25 4.5H14V5.25C14 5.66421 13.6642 6 13.25 6C12.8358 6 12.5 5.66421 12.5 5.25V4.5H7.5V5.25C7.5 5.66421 7.16421 6 6.75 6C6.33579 6 6 5.66421 6 5.25V4.5ZM18.286 13.714C18.0008 13.4287 17.5382 13.4287 17.253 13.714L13.5 17.4669V18.5H14.5331L18.286 14.747C18.5713 14.4618 18.5713 13.9992 18.286 13.714ZM16.1923 12.6533C17.0634 11.7822 18.4756 11.7822 19.3467 12.6533C20.2178 13.5244 20.2178 14.9366 19.3467 15.8077L15.3741 19.7803C15.2334 19.921 15.0427 20 14.8437 20H12.75C12.3358 20 12 19.6642 12 19.25V17.1563C12 16.9573 12.079 16.7666 12.2197 16.6259L16.1923 12.6533Z"
        fill={fill}
      />
    </svg>
  );
};

export default CalendarEdit;
