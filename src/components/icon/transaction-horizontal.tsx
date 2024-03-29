import React from 'react';

const TransactionHorizontal = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M13.7517 2.18945C14.0613 1.91426 14.5354 1.94215 14.8106 2.25174L18.8106 6.75174C19.0068 6.97248 19.0552 7.28783 18.9342 7.55725C18.8132 7.82667 18.5454 8.00001 18.25 8.00001H1.75001C1.3358 8.00001 1.00001 7.66422 1.00001 7.25001C1.00001 6.83579 1.3358 6.50001 1.75001 6.50001H16.5799L13.6895 3.24828C13.4143 2.93869 13.4422 2.46464 13.7517 2.18945ZM1.06583 12.4428C1.18682 12.1733 1.45467 12 1.75001 12H18.25C18.6642 12 19 12.3358 19 12.75C19 13.1642 18.6642 13.5 18.25 13.5H3.42015L6.31057 16.7517C6.58576 17.0613 6.55787 17.5354 6.24829 17.8106C5.9387 18.0858 5.46464 18.0579 5.18946 17.7483L1.18946 13.2483C0.99324 13.0275 0.944844 12.7122 1.06583 12.4428Z"
        fill={fill}
      />
    </svg>
  );
};

export default TransactionHorizontal;
