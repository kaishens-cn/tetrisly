import React from 'react';

const HorizontalAlignRight = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M18.25 1C18.6642 1 19 1.33579 19 1.75V18.25C19 18.6642 18.6642 19 18.25 19C17.8358 19 17.5 18.6642 17.5 18.25V1.75C17.5 1.33579 17.8358 1 18.25 1ZM10.736 5.20385C11.0376 4.91996 11.5123 4.93435 11.7962 5.23598L15.7962 9.48598C16.068 9.77477 16.068 10.2252 15.7962 10.514L11.7962 14.764C11.5123 15.0657 11.0376 15.08 10.736 14.7962C10.4343 14.5123 10.42 14.0376 10.7038 13.736L13.5142 10.75L1.75 10.75C1.33579 10.75 1 10.4142 1 10C1 9.58579 1.33579 9.25 1.75 9.25L13.5142 9.25L10.7038 6.26402C10.42 5.96239 10.4343 5.48774 10.736 5.20385Z"
        fill={fill}
      />
    </svg>
  );
};

export default HorizontalAlignRight;
