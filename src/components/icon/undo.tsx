import React from 'react';

const Undo = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1.75 7C2.16421 7 2.5 7.33579 2.5 7.75V10.1742C4.4917 8.29019 7.27219 7.37501 10 7.37501C13.4394 7.375 16.9626 8.82994 18.8827 11.8473C19.1051 12.1968 19.0021 12.6604 18.6527 12.8827C18.3032 13.1051 17.8396 13.0021 17.6173 12.6527C16.0374 10.17 13.0606 8.875 10 8.87501C7.45481 8.87501 4.96755 9.77062 3.29345 11.5H6.25C6.66421 11.5 7 11.8358 7 12.25C7 12.6642 6.66421 13 6.25 13H1.75C1.33579 13 1 12.6642 1 12.25V7.75C1 7.33579 1.33579 7 1.75 7Z"
        fill={fill}
      />
    </svg>
  );
};

export default Undo;
