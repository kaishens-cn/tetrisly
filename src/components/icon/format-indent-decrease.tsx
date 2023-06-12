import React from 'react';

const FormatIndentDecrease = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M1 3.25C1 2.83579 1.33579 2.5 1.75 2.5H18.25C18.6642 2.5 19 2.83579 19 3.25C19 3.66421 18.6642 4 18.25 4H1.75C1.33579 4 1 3.66421 1 3.25ZM6.59144 6.08223C6.84221 6.21045 7 6.46835 7 6.75V13.25C7 13.5316 6.84221 13.7896 6.59144 13.9178C6.34067 14.046 6.03921 14.0229 5.81088 13.858L1.31088 10.608C1.11565 10.467 1 10.2408 1 10C1 9.75917 1.11565 9.53299 1.31088 9.39199L5.81088 6.14199C6.03921 5.97709 6.34067 5.95401 6.59144 6.08223ZM3.03098 10L5.5 11.7832V8.21682L3.03098 10ZM9 7.75C9 7.33579 9.33579 7 9.75 7H18.25C18.6642 7 19 7.33579 19 7.75C19 8.16421 18.6642 8.5 18.25 8.5H9.75C9.33579 8.5 9 8.16421 9 7.75ZM9 12.25C9 11.8358 9.33579 11.5 9.75 11.5H18.25C18.6642 11.5 19 11.8358 19 12.25C19 12.6642 18.6642 13 18.25 13H9.75C9.33579 13 9 12.6642 9 12.25ZM1 16.75C1 16.3358 1.33579 16 1.75 16H18.25C18.6642 16 19 16.3358 19 16.75C19 17.1642 18.6642 17.5 18.25 17.5H1.75C1.33579 17.5 1 17.1642 1 16.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default FormatIndentDecrease;