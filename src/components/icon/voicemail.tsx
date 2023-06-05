import React from 'react';

const Voicemail = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4.5 7.5C3.39543 7.5 2.5 8.39543 2.5 9.5C2.5 10.6046 3.39543 11.5 4.5 11.5C5.60457 11.5 6.5 10.6046 6.5 9.5C6.5 8.39543 5.60457 7.5 4.5 7.5ZM7.37266 11.5C7.76809 10.9331 8 10.2436 8 9.5C8 7.567 6.433 6 4.5 6C2.567 6 1 7.567 1 9.5C1 11.433 2.567 13 4.5 13H15.5C17.433 13 19 11.433 19 9.5C19 7.567 17.433 6 15.5 6C13.567 6 12 7.567 12 9.5C12 10.2436 12.2319 10.9331 12.6273 11.5H7.37266ZM15.5 11.5C16.6046 11.5 17.5 10.6046 17.5 9.5C17.5 8.39543 16.6046 7.5 15.5 7.5C14.3954 7.5 13.5 8.39543 13.5 9.5C13.5 10.6046 14.3954 11.5 15.5 11.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default Voicemail;
