import React from 'react';

const Ticket = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4.91957 3H15.0804C15.6146 2.99999 16.0604 2.99998 16.4247 3.02974C16.8046 3.06078 17.1612 3.12789 17.4985 3.29973C18.0159 3.56338 18.4366 3.98408 18.7003 4.50153C18.8721 4.83879 18.9392 5.19545 18.9703 5.57533C19 5.93956 19 6.3854 19 6.91955V7.75C19 8.16421 18.6642 8.5 18.25 8.5C17.4216 8.5 16.75 9.17157 16.75 10C16.75 10.8284 17.4216 11.5 18.25 11.5C18.6642 11.5 19 11.8358 19 12.25V13.0805C19 13.6146 19 14.0604 18.9703 14.4247C18.9392 14.8046 18.8721 15.1612 18.7003 15.4985C18.4366 16.0159 18.0159 16.4366 17.4985 16.7003C17.1612 16.8721 16.8046 16.9392 16.4247 16.9703C16.0604 17 15.6146 17 15.0805 17H4.91955C4.3854 17 3.93956 17 3.57533 16.9703C3.19545 16.9392 2.83879 16.8721 2.50153 16.7003C1.98408 16.4366 1.56338 16.0159 1.29973 15.4985C1.12789 15.1612 1.06078 14.8046 1.02974 14.4247C0.999981 14.0604 0.99999 13.6146 1 13.0804L1 12.25C1 11.8358 1.33579 11.5 1.75 11.5C2.57843 11.5 3.25 10.8284 3.25 10C3.25 9.17157 2.57843 8.5 1.75 8.5C1.33579 8.5 1 8.16421 1 7.75L1 6.91957C0.99999 6.38541 0.999981 5.93956 1.02974 5.57533C1.06078 5.19545 1.12789 4.83879 1.29973 4.50153C1.56338 3.98408 1.98408 3.56338 2.50153 3.29973C2.83879 3.12789 3.19545 3.06078 3.57533 3.02974C3.93956 2.99998 4.38541 2.99999 4.91957 3ZM13 15.5H15.05C15.6224 15.5 16.0066 15.4994 16.3025 15.4752C16.5896 15.4518 16.7269 15.4099 16.8175 15.3638C17.0527 15.2439 17.2439 15.0527 17.3638 14.8175C17.4099 14.7269 17.4518 14.5896 17.4752 14.3025C17.4994 14.0066 17.5 13.6224 17.5 13.05V12.9055C16.2061 12.5725 15.25 11.3979 15.25 10C15.25 8.60212 16.2061 7.42755 17.5 7.09451V6.95C17.5 6.37757 17.4994 5.99336 17.4752 5.69748C17.4518 5.41036 17.4099 5.27307 17.3638 5.18251C17.2439 4.94731 17.0527 4.75608 16.8175 4.63624C16.7269 4.5901 16.5896 4.54822 16.3025 4.52476C16.0066 4.50058 15.6224 4.5 15.05 4.5H13V15.5ZM11.5 4.5V15.5H4.95C4.37757 15.5 3.99336 15.4994 3.69748 15.4752C3.41036 15.4518 3.27307 15.4099 3.18251 15.3638C2.94731 15.2439 2.75608 15.0527 2.63624 14.8175C2.5901 14.7269 2.54822 14.5896 2.52476 14.3025C2.50058 14.0066 2.5 13.6224 2.5 13.05V12.9055C3.79392 12.5725 4.75 11.3979 4.75 10C4.75 8.60212 3.79392 7.42755 2.5 7.09451V6.95C2.5 6.37757 2.50058 5.99336 2.52476 5.69748C2.54822 5.41036 2.5901 5.27307 2.63624 5.18251C2.75608 4.94731 2.94731 4.75608 3.18251 4.63624C3.27307 4.5901 3.41036 4.54822 3.69748 4.52476C3.99336 4.50058 4.37757 4.5 4.95 4.5H11.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default Ticket;