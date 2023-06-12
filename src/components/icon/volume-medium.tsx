import React from 'react';

const VolumeMedium = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M9.55081 3.06298C9.82369 3.18246 10 3.45212 10 3.75002V16.25C10 16.5479 9.82369 16.8176 9.55081 16.937C9.27792 17.0565 8.96019 17.0032 8.74129 16.8011L6.36909 14.6114C6.04864 14.3156 5.96062 14.2389 5.87005 14.1835C5.74457 14.1068 5.60653 14.0529 5.4623 14.0241C5.35819 14.0034 5.2415 14 4.80539 14H4.77871C4.30945 14 3.91772 14 3.59653 13.9769C3.26202 13.9528 2.94653 13.9009 2.64261 13.7672C2.01288 13.4902 1.50986 12.9871 1.23282 12.3574C1.09912 12.0535 1.04718 11.738 1.0231 11.4035C0.999985 11.0823 0.999992 10.6906 1 10.2213V9.77873C0.999992 9.30946 0.999985 8.91774 1.0231 8.59655C1.04718 8.26203 1.09912 7.94654 1.23282 7.64262C1.50986 7.01289 2.01288 6.50988 2.64261 6.23284C2.94653 6.09913 3.26202 6.04719 3.59653 6.02312C3.91772 6 4.30945 6.00001 4.77871 6.00002L4.80539 6.00002C5.2415 6.00002 5.35819 5.99666 5.4623 5.97592C5.60654 5.94718 5.74457 5.89321 5.87005 5.81649C5.96062 5.76112 6.04864 5.68444 6.36909 5.38863L8.74129 3.19891C8.96019 2.99686 9.27792 2.9435 9.55081 3.06298ZM8.5 5.463L7.38651 6.49084C7.3716 6.5046 7.35688 6.51821 7.34234 6.53164C7.08659 6.76795 6.88535 6.95389 6.65247 7.09626C6.37642 7.26504 6.07274 7.38377 5.75542 7.447C5.48773 7.50034 5.21375 7.5002 4.86554 7.50003C4.84573 7.50003 4.82569 7.50002 4.80539 7.50002C4.30259 7.50002 3.96513 7.50047 3.70421 7.51925C3.45055 7.5375 3.32761 7.57022 3.24664 7.60584C2.9604 7.73177 2.73176 7.96041 2.60583 8.24666C2.57021 8.32762 2.53749 8.45056 2.51923 8.70423C2.50045 8.96515 2.5 9.3026 2.5 9.80541V10.1946C2.5 10.6974 2.50045 11.0349 2.51923 11.2958C2.53749 11.5495 2.57021 11.6724 2.60583 11.7534C2.73176 12.0396 2.9604 12.2683 3.24664 12.3942C3.32761 12.4298 3.45055 12.4625 3.70421 12.4808C3.96513 12.4996 4.30259 12.5 4.80539 12.5C4.82569 12.5 4.84574 12.5 4.86555 12.5C5.21375 12.4998 5.48773 12.4997 5.75542 12.553C6.07274 12.6163 6.37642 12.735 6.65247 12.9038C6.88535 13.0461 7.08658 13.2321 7.34234 13.4684C7.35688 13.4818 7.3716 13.4954 7.38651 13.5092L8.5 14.537V5.463ZM12.5792 6.41461C12.7644 6.04412 13.2149 5.89395 13.5854 6.0792C14.2904 6.4317 14.7675 7.06501 15.0634 7.74921C15.3606 8.43654 15.5 9.22813 15.5 10C15.5 10.7719 15.3606 11.5635 15.0634 12.2508C14.7675 12.935 14.2904 13.5683 13.5854 13.9208C13.2149 14.1061 12.7644 13.9559 12.5792 13.5854C12.3939 13.2149 12.5441 12.7644 12.9146 12.5792C13.2096 12.4317 13.4825 12.1275 13.6866 11.6555C13.8894 11.1865 14 10.6031 14 10C14 9.3969 13.8894 8.81349 13.6866 8.34457C13.4825 7.87252 13.2096 7.56833 12.9146 7.42084C12.5441 7.23559 12.3939 6.78509 12.5792 6.41461Z"
        fill={fill}
      />
    </svg>
  );
};

export default VolumeMedium;