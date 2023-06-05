import React from 'react';

const CheckCircle = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10ZM13.7086 6.65654C14.0363 6.90981 14.0967 7.38083 13.8435 7.70859L9.59346 13.2086C9.45746 13.3846 9.25036 13.4911 9.02809 13.4995C8.80582 13.5078 8.59132 13.417 8.44253 13.2517L6.19253 10.7517C5.91544 10.4438 5.94039 9.96962 6.24828 9.69253C6.55616 9.41543 7.03038 9.44039 7.30747 9.74827L8.95615 11.5801L12.6565 6.79141C12.9098 6.46365 13.3808 6.40327 13.7086 6.65654Z"
        fill={fill}
      />
    </svg>
  );
};

export default CheckCircle;
