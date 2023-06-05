import React from 'react';

const Plus = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 4.00049C10.4142 4.00049 10.75 4.33627 10.75 4.75049V9.25061H15.25C15.6642 9.25061 16 9.5864 16 10.0006C16 10.4148 15.6642 10.7506 15.25 10.7506H10.75V15.2505C10.75 15.6647 10.4142 16.0005 10 16.0005C9.58579 16.0005 9.25 15.6647 9.25 15.2505V10.7506H4.75C4.33579 10.7506 4 10.4148 4 10.0006C4 9.5864 4.33579 9.25061 4.75 9.25061H9.25V4.75049C9.25 4.33627 9.58579 4.00049 10 4.00049Z"
        fill={fill}
      />
    </svg>
  );
};

export default Plus;
