import React from 'react';

const PhoneForwarded = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M14.7413 1.1989C15.0457 0.917948 15.5202 0.936928 15.8011 1.24129L18.8011 4.49129C19.0663 4.77859 19.0663 5.22142 18.8011 5.50871L15.8011 8.75871C15.5202 9.06308 15.0457 9.08206 14.7413 8.80111C14.4369 8.52015 14.4179 8.04566 14.6989 7.74129L16.537 5.75H11.75C11.3358 5.75 11 5.41422 11 5C11 4.58579 11.3358 4.25 11.75 4.25H16.537L14.6989 2.25871C14.4179 1.95435 14.4369 1.47985 14.7413 1.1989Z"
        fill={fill}
      />
    </svg>
  );
};

export default PhoneForwarded;
