import React from 'react';

const CheckCircleFill = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1ZM13.8435 7.70859C14.0967 7.38083 14.0363 6.90981 13.7086 6.65654C13.3808 6.40327 12.9098 6.46365 12.6565 6.79141L8.95615 11.5801L7.30747 9.74827C7.03038 9.44039 6.55616 9.41543 6.24828 9.69253C5.94039 9.96962 5.91543 10.4438 6.19253 10.7517L8.44253 13.2517C8.59132 13.417 8.80582 13.5078 9.02809 13.4995C9.25036 13.4911 9.45746 13.3846 9.59346 13.2086L13.8435 7.70859Z"
        fill={fill}
      />
    </svg>
  );
};

export default CheckCircleFill;
