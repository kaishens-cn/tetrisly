import React from 'react';

const SidebarShow = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 5.75C1 4.23122 2.23122 3 3.75 3H16.25C17.7688 3 19 4.23122 19 5.75V14.25C19 15.7688 17.7688 17 16.25 17H3.75C2.23122 17 1 15.7688 1 14.25V5.75ZM6.5 15.5H16.25C16.9404 15.5 17.5 14.9404 17.5 14.25V5.75C17.5 5.05964 16.9404 4.5 16.25 4.5H6.5V15.5ZM5 4.5V15.5H3.75C3.05964 15.5 2.5 14.9404 2.5 14.25V5.75C2.5 5.05964 3.05964 4.5 3.75 4.5H5ZM12.2517 7.18944C12.5613 6.91425 13.0354 6.94214 13.3106 7.25173L15.3106 9.50173C15.5631 9.78589 15.5631 10.2141 15.3106 10.4983L13.3106 12.7483C13.0354 13.0579 12.5613 13.0857 12.2517 12.8106C11.9421 12.5354 11.9143 12.0613 12.1894 11.7517L13.0799 10.75L9.25 10.75C8.83579 10.75 8.5 10.4142 8.5 10C8.5 9.58579 8.83579 9.25 9.25 9.25L13.0799 9.25L12.1894 8.24827C11.9143 7.93869 11.9421 7.46463 12.2517 7.18944Z"
        fill={fill}
      />
    </svg>
  );
};

export default SidebarShow;
