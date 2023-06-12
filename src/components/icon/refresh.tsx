import React from 'react';

const Refresh = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10.8356 1.28148C11.0944 1.60492 11.042 2.07689 10.7185 2.33565L9.88808 3H10C10.9478 3 11.8533 3.18876 12.6797 3.53145C13.5358 3.88647 14.3056 4.40606 14.9498 5.05027C15.5939 5.69445 16.1135 6.46414 16.4685 7.32024C16.8112 8.14665 17 9.05222 17 10C17 10.9478 16.8112 11.8533 16.4685 12.6797C16.3099 13.0624 15.8711 13.2439 15.4884 13.0852C15.1058 12.9266 14.9243 12.4878 15.0829 12.1051C15.3514 11.4577 15.5 10.7471 15.5 10C15.5 9.25285 15.3514 8.54229 15.0829 7.89483C14.8044 7.22322 14.3962 6.61806 13.8891 6.11092C13.3819 5.60377 12.7768 5.19556 12.1051 4.91704C11.4577 4.64856 10.7471 4.5 10 4.5H9.88808L10.7185 5.16435C11.042 5.4231 11.0944 5.89507 10.8356 6.21852C10.5769 6.54197 10.1049 6.59441 9.78147 6.33565L7.28147 4.33565C7.10356 4.19332 6.99999 3.97783 6.99999 3.75C6.99999 3.52216 7.10356 3.30667 7.28147 3.16435L9.78147 1.16435C10.1049 0.905588 10.5769 0.958029 10.8356 1.28148ZM4.5115 6.91485C4.89413 7.07351 5.07568 7.51231 4.91702 7.89493C4.64855 8.54236 4.5 9.25289 4.5 10C4.5 10.7471 4.64855 11.4576 4.91701 12.1051C5.19553 12.7767 5.60375 13.3819 6.11093 13.8891C6.61808 14.3962 7.22327 14.8045 7.8949 15.083C8.54235 15.3514 9.25288 15.5 10 15.5H10.1119L9.28147 14.8356C8.95803 14.5769 8.90559 14.1049 9.16434 13.7815C9.4231 13.458 9.89507 13.4056 10.2185 13.6643L12.7185 15.6643C12.8964 15.8067 13 16.0222 13 16.25C13 16.4778 12.8964 16.6933 12.7185 16.8356L10.2185 18.8356C9.89507 19.0944 9.4231 19.042 9.16434 18.7185C8.90559 18.3951 8.95803 17.9231 9.28147 17.6643L10.1119 17H10C9.05226 17 8.14671 16.8112 7.32033 16.4686C6.4642 16.1135 5.69447 15.594 5.05027 14.9498C4.40604 14.3055 3.88644 13.5358 3.53142 12.6796C3.18875 11.8532 3 10.9477 3 10C3 9.05227 3.18875 8.14674 3.53142 7.32036C3.69009 6.93774 4.12888 6.75619 4.5115 6.91485Z"
        fill={fill}
      />
    </svg>
  );
};

export default Refresh;