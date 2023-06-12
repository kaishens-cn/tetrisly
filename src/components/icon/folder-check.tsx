import React from 'react';

const FolderCheck = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 4.75C1 3.23122 2.23122 2 3.75 2H9.75C10.0008 2 10.2349 2.12533 10.374 2.33397L12.1514 5H16.25C17.7688 5 19 6.23122 19 7.75V9.25C19 9.66421 18.6642 10 18.25 10C17.8358 10 17.5 9.66421 17.5 9.25V7.75C17.5 7.05964 16.9404 6.5 16.25 6.5H2.5V15.25C2.5 15.9404 3.05964 16.5 3.75 16.5H9.25C9.66421 16.5 10 16.8358 10 17.25C10 17.6642 9.66421 18 9.25 18H3.75C2.23122 18 1 16.7688 1 15.25V4.75ZM2.5 5H10.3486L9.34861 3.5H3.75C3.05964 3.5 2.5 4.05964 2.5 4.75V5ZM19.765 13.2047C20.0661 13.4891 20.0797 13.9638 19.7953 14.265L15.5453 18.765C15.4014 18.9173 15.2005 19.0025 14.991 18.9999C14.7815 18.9974 14.5827 18.9074 14.4425 18.7517L12.1925 16.2517C11.9154 15.9438 11.9404 15.4696 12.2483 15.1925C12.5562 14.9154 13.0304 14.9404 13.3075 15.2483L15.0133 17.1436L18.7047 13.235C18.9891 12.9339 19.4638 12.9203 19.765 13.2047Z"
        fill={fill}
      />
    </svg>
  );
};

export default FolderCheck;