import React from 'react';

const PlayCircle = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10ZM8.40856 6.08223C8.65933 5.95401 8.96079 5.97709 9.18912 6.14199L13.6891 9.39199C13.8844 9.53299 14 9.75917 14 10C14 10.2408 13.8844 10.467 13.6891 10.608L9.18912 13.858C8.96079 14.0229 8.65933 14.046 8.40856 13.9178C8.15779 13.7896 8 13.5316 8 13.25V6.75C8 6.46835 8.15779 6.21045 8.40856 6.08223ZM9.5 8.21682V11.7832L11.969 10L9.5 8.21682Z"
        fill={fill}
      />
    </svg>
  );
};

export default PlayCircle;
