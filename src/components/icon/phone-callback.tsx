import React from 'react';

const PhoneCallback = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M15.2587 1.1989C15.5631 1.47985 15.5821 1.95435 15.3011 2.25871L13.463 4.25H18.25C18.6642 4.25 19 4.58579 19 5C19 5.41422 18.6642 5.75 18.25 5.75H13.463L15.3011 7.74129C15.5821 8.04566 15.5631 8.52015 15.2587 8.80111C14.9543 9.08206 14.4798 9.06308 14.1989 8.75871L11.1989 5.50871C10.9337 5.22142 10.9337 4.77859 11.1989 4.49129L14.1989 1.24129C14.4798 0.936928 14.9543 0.917948 15.2587 1.1989Z"
        fill={fill}
      />
    </svg>
  );
};

export default PhoneCallback;
