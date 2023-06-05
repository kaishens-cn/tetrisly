import React from 'react';

const Extension = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M8.75 2.5C7.7835 2.5 7 3.2835 7 4.25C7 4.66421 6.66421 5 6.25 5H3.75C3.05964 5 2.5 5.55964 2.5 6.25V8.08697C3.93335 8.42555 5 9.71321 5 11.25C5 12.7868 3.93335 14.0745 2.5 14.413V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H5.58697C5.92555 16.0667 7.21321 15 8.75 15C10.2868 15 11.5745 16.0667 11.913 17.5H13.75C14.4404 17.5 15 16.9404 15 16.25V13.75C15 13.3358 15.3358 13 15.75 13C16.7165 13 17.5 12.2165 17.5 11.25C17.5 10.2835 16.7165 9.5 15.75 9.5C15.3358 9.5 15 9.16421 15 8.75L15 6.25C15 5.55964 14.4404 5 13.75 5H11.25C10.8358 5 10.5 4.66421 10.5 4.25C10.5 3.2835 9.7165 2.5 8.75 2.5ZM5.58697 3.5C5.92555 2.06665 7.21321 1 8.75 1C10.2868 1 11.5745 2.06665 11.913 3.5H13.75C15.2688 3.5 16.5 4.73122 16.5 6.25L16.5 8.08697C17.9334 8.42555 19 9.71321 19 11.25C19 12.7868 17.9334 14.0745 16.5 14.413V16.25C16.5 17.7688 15.2688 19 13.75 19H11.25C10.8358 19 10.5 18.6642 10.5 18.25C10.5 17.2835 9.7165 16.5 8.75 16.5C7.7835 16.5 7 17.2835 7 18.25C7 18.6642 6.66421 19 6.25 19H3.75C2.23122 19 1 17.7688 1 16.25V13.75C1 13.3358 1.33579 13 1.75 13C2.7165 13 3.5 12.2165 3.5 11.25C3.5 10.2835 2.7165 9.5 1.75 9.5C1.33579 9.5 1 9.16421 1 8.75V6.25C1 4.73122 2.23122 3.5 3.75 3.5H5.58697Z"
        fill={fill}
      />
    </svg>
  );
};

export default Extension;
