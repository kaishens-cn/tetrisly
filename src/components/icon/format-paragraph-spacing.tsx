import React from 'react';

const FormatParagraphSpacing = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4.49129 1.1989C4.77859 0.933701 5.22142 0.933701 5.50871 1.1989L8.75871 4.1989C9.06308 4.47985 9.08206 4.95434 8.80111 5.25871C8.52015 5.56308 8.04566 5.58206 7.74129 5.3011L5.75 3.46299L5.75 16.537L7.74129 14.6989C8.04566 14.4179 8.52015 14.4369 8.80111 14.7413C9.08206 15.0457 9.06308 15.5201 8.75871 15.8011L5.50871 18.8011C5.22142 19.0663 4.77859 19.0663 4.49129 18.8011L1.24129 15.8011C0.936928 15.5201 0.917948 15.0457 1.1989 14.7413C1.47985 14.4369 1.95435 14.4179 2.25871 14.6989L4.25 16.537L4.25 3.46299L2.25871 5.3011C1.95435 5.58206 1.47985 5.56308 1.1989 5.25871C0.917948 4.95435 0.936928 4.47985 1.24129 4.1989L4.49129 1.1989ZM11 4.75C11 4.33579 11.3358 4 11.75 4H18.25C18.6642 4 19 4.33579 19 4.75C19 5.16421 18.6642 5.5 18.25 5.5H11.75C11.3358 5.5 11 5.16421 11 4.75ZM11 10C11 9.58579 11.3358 9.25 11.75 9.25H18.25C18.6642 9.25 19 9.58579 19 10C19 10.4142 18.6642 10.75 18.25 10.75H11.75C11.3358 10.75 11 10.4142 11 10ZM11 15.25C11 14.8358 11.3358 14.5 11.75 14.5H18.25C18.6642 14.5 19 14.8358 19 15.25C19 15.6642 18.6642 16 18.25 16H11.75C11.3358 16 11 15.6642 11 15.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default FormatParagraphSpacing;
