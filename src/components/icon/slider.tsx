import React from 'react';

const Slider = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M16.25 2.5C15.5596 2.5 15 3.05964 15 3.75C15 4.44036 15.5596 5 16.25 5C16.9404 5 17.5 4.44036 17.5 3.75C17.5 3.05964 16.9404 2.5 16.25 2.5ZM13.6035 3C13.93 1.84575 14.9912 1 16.25 1C17.7688 1 19 2.23122 19 3.75C19 5.26878 17.7688 6.5 16.25 6.5C14.9912 6.5 13.93 5.65425 13.6035 4.5H1.75C1.33579 4.5 1 4.16421 1 3.75C1 3.33579 1.33579 3 1.75 3H13.6035ZM6 8.75C5.30964 8.75 4.75 9.30964 4.75 10C4.75 10.6904 5.30964 11.25 6 11.25C6.69036 11.25 7.25 10.6904 7.25 10C7.25 9.30964 6.69036 8.75 6 8.75ZM3.35352 9.25C3.67998 8.09575 4.74122 7.25 6 7.25C7.25878 7.25 8.32002 8.09575 8.64648 9.25H18.25C18.6642 9.25 19 9.58579 19 10C19 10.4142 18.6642 10.75 18.25 10.75H8.64648C8.32002 11.9043 7.25878 12.75 6 12.75C4.74122 12.75 3.67998 11.9043 3.35352 10.75H1.75C1.33579 10.75 1 10.4142 1 10C1 9.58579 1.33579 9.25 1.75 9.25H3.35352ZM11.75 15C11.0596 15 10.5 15.5596 10.5 16.25C10.5 16.9404 11.0596 17.5 11.75 17.5C12.4404 17.5 13 16.9404 13 16.25C13 15.5596 12.4404 15 11.75 15ZM9.10352 15.5C9.42998 14.3457 10.4912 13.5 11.75 13.5C13.0088 13.5 14.07 14.3457 14.3965 15.5H18.25C18.6642 15.5 19 15.8358 19 16.25C19 16.6642 18.6642 17 18.25 17H14.3965C14.07 18.1543 13.0088 19 11.75 19C10.4912 19 9.42998 18.1543 9.10352 17H1.75C1.33579 17 1 16.6642 1 16.25C1 15.8358 1.33579 15.5 1.75 15.5H9.10352Z"
        fill={fill}
      />
    </svg>
  );
};

export default Slider;