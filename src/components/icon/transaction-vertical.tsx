import React from 'react';

const TransactionVertical = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M7.55725 1.06583C7.82667 1.18682 8.00001 1.45467 8.00001 1.75001V18.25C8.00001 18.6642 7.66422 19 7.25001 19C6.83579 19 6.50001 18.6642 6.50001 18.25V3.42015L3.24828 6.31057C2.93869 6.58576 2.46464 6.55787 2.18945 6.24829C1.91426 5.9387 1.94215 5.46464 2.25174 5.18946L6.75174 1.18946C6.97248 0.99324 7.28783 0.944844 7.55725 1.06583ZM12.75 1.00001C13.1642 1.00001 13.5 1.3358 13.5 1.75001V16.5799L16.7517 13.6895C17.0613 13.4143 17.5354 13.4422 17.8106 13.7517C18.0858 14.0613 18.0579 14.5354 17.7483 14.8106L13.2483 18.8106C13.0275 19.0068 12.7122 19.0552 12.4428 18.9342C12.1733 18.8132 12 18.5454 12 18.25V1.75001C12 1.3358 12.3358 1.00001 12.75 1.00001Z"
        fill={fill}
      />
    </svg>
  );
};

export default TransactionVertical;
