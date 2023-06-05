import React from 'react';

const EmojiSmile = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10ZM6 8.25C6 7.83579 6.33579 7.5 6.75 7.5H7.75C8.16421 7.5 8.5 7.83579 8.5 8.25C8.5 8.66421 8.16421 9 7.75 9H6.75C6.33579 9 6 8.66421 6 8.25ZM11.5 8.25C11.5 7.83579 11.8358 7.5 12.25 7.5H13.25C13.6642 7.5 14 7.83579 14 8.25C14 8.66421 13.6642 9 13.25 9H12.25C11.8358 9 11.5 8.66421 11.5 8.25ZM6.91459 12.0792C7.28507 11.8939 7.73558 12.0441 7.92082 12.4146C8.25581 13.0846 9.06287 13.5 10 13.5C10.9371 13.5 11.7442 13.0846 12.0792 12.4146C12.2644 12.0441 12.7149 11.8939 13.0854 12.0792C13.4559 12.2644 13.6061 12.7149 13.4208 13.0854C12.7558 14.4154 11.3129 15 10 15C8.68713 15 7.24419 14.4154 6.57918 13.0854C6.39394 12.7149 6.54411 12.2644 6.91459 12.0792Z"
        fill={fill}
      />
    </svg>
  );
};

export default EmojiSmile;
