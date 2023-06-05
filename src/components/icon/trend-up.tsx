import React from 'react';

const TrendUp = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M12 4.75C12 4.33579 12.3358 4 12.75 4H18.25C18.6642 4 19 4.33579 19 4.75V10.25C19 10.6642 18.6642 11 18.25 11C17.8358 11 17.5 10.6642 17.5 10.25V6.56066L11.2803 12.7803C11.0164 13.0442 10.5986 13.0739 10.3 12.85L6.87004 10.2775L2.32618 15.7301C2.06101 16.0483 1.58809 16.0913 1.26988 15.8262C0.951673 15.561 0.90868 15.0881 1.17385 14.7699L6.17385 8.76986C6.42947 8.46312 6.88059 8.41043 7.20002 8.65L10.6796 11.2597L16.4394 5.5H12.75C12.3358 5.5 12 5.16421 12 4.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default TrendUp;
