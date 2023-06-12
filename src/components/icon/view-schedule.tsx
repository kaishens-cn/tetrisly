import React from 'react';

const ViewSchedule = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4.91957 1H15.0804C15.6146 0.99999 16.0604 0.999981 16.4247 1.02974C16.8046 1.06078 17.1612 1.12789 17.4985 1.29973C18.0159 1.56338 18.4366 1.98408 18.7003 2.50153C18.8721 2.83879 18.9392 3.19545 18.9703 3.57533C19 3.93956 19 4.3854 19 4.91955V5.08045C19 5.6146 19 6.06044 18.9703 6.42467C18.9392 6.80456 18.8721 7.16121 18.7003 7.49847C18.4366 8.01592 18.0159 8.43662 17.4985 8.70027C17.1612 8.87211 16.8046 8.93922 16.4247 8.97026C16.0604 9.00002 15.6146 9.00001 15.0804 9H4.91957C4.38542 9.00001 3.93957 9.00002 3.57533 8.97026C3.19545 8.93922 2.83879 8.87211 2.50153 8.70027C1.98408 8.43662 1.56338 8.01592 1.29973 7.49847C1.12789 7.16121 1.06078 6.80456 1.02974 6.42467C0.999981 6.06044 0.99999 5.61459 1 5.08044V4.91957C0.99999 4.38541 0.999981 3.93956 1.02974 3.57533C1.06078 3.19545 1.12789 2.83879 1.29973 2.50153C1.56338 1.98408 1.98408 1.56338 2.50153 1.29973C2.83879 1.12789 3.19545 1.06078 3.57533 1.02974C3.93956 0.999981 4.38541 0.99999 4.91957 1ZM3.69748 2.52476C3.41036 2.54822 3.27307 2.5901 3.18251 2.63624C2.94731 2.75608 2.75608 2.94731 2.63624 3.18251C2.5901 3.27307 2.54822 3.41036 2.52476 3.69748C2.50058 3.99336 2.5 4.37757 2.5 4.95V5.05C2.5 5.62243 2.50058 6.00664 2.52476 6.30252C2.54822 6.58965 2.5901 6.72693 2.63624 6.81749C2.75608 7.05269 2.94731 7.24392 3.18251 7.36376C3.27307 7.4099 3.41036 7.45178 3.69748 7.47524C3.99336 7.49942 4.37757 7.5 4.95 7.5H15.05C15.6224 7.5 16.0066 7.49942 16.3025 7.47524C16.5896 7.45178 16.7269 7.4099 16.8175 7.36376C17.0527 7.24392 17.2439 7.05269 17.3638 6.81749C17.4099 6.72693 17.4518 6.58965 17.4752 6.30252C17.4994 6.00664 17.5 5.62243 17.5 5.05V4.95C17.5 4.37757 17.4994 3.99336 17.4752 3.69748C17.4518 3.41036 17.4099 3.27307 17.3638 3.18251C17.2439 2.94731 17.0527 2.75608 16.8175 2.63624C16.7269 2.5901 16.5896 2.54822 16.3025 2.52476C16.0066 2.50058 15.6224 2.5 15.05 2.5H4.95C4.37757 2.5 3.99336 2.50058 3.69748 2.52476ZM4.91955 11H15.0805C15.6146 11 16.0604 11 16.4247 11.0297C16.8046 11.0608 17.1612 11.1279 17.4985 11.2997C18.0159 11.5634 18.4366 11.9841 18.7003 12.5015C18.8721 12.8388 18.9392 13.1954 18.9703 13.5753C19 13.9396 19 14.3854 19 14.9195V15.0805C19 15.6146 19 16.0604 18.9703 16.4247C18.9392 16.8046 18.8721 17.1612 18.7003 17.4985C18.4366 18.0159 18.0159 18.4366 17.4985 18.7003C17.1612 18.8721 16.8046 18.9392 16.4247 18.9703C16.0604 19 15.6146 19 15.0805 19H4.91955C4.3854 19 3.93956 19 3.57533 18.9703C3.19545 18.9392 2.83879 18.8721 2.50153 18.7003C1.98408 18.4366 1.56338 18.0159 1.29973 17.4985C1.12789 17.1612 1.06078 16.8046 1.02974 16.4247C0.999981 16.0604 0.99999 15.6146 1 15.0804V14.9196C0.99999 14.3854 0.999981 13.9396 1.02974 13.5753C1.06078 13.1954 1.12789 12.8388 1.29973 12.5015C1.56338 11.9841 1.98408 11.5634 2.50153 11.2997C2.83879 11.1279 3.19545 11.0608 3.57533 11.0297C3.93956 11 4.3854 11 4.91955 11ZM3.69748 12.5248C3.41036 12.5482 3.27307 12.5901 3.18251 12.6362C2.94731 12.7561 2.75608 12.9473 2.63624 13.1825C2.5901 13.2731 2.54822 13.4104 2.52476 13.6975C2.50058 13.9934 2.5 14.3776 2.5 14.95V15.05C2.5 15.6224 2.50058 16.0066 2.52476 16.3025C2.54822 16.5896 2.5901 16.7269 2.63624 16.8175C2.75608 17.0527 2.94731 17.2439 3.18251 17.3638C3.27307 17.4099 3.41036 17.4518 3.69748 17.4752C3.99336 17.4994 4.37757 17.5 4.95 17.5H15.05C15.6224 17.5 16.0066 17.4994 16.3025 17.4752C16.5896 17.4518 16.7269 17.4099 16.8175 17.3638C17.0527 17.2439 17.2439 17.0527 17.3638 16.8175C17.4099 16.7269 17.4518 16.5896 17.4752 16.3025C17.4994 16.0066 17.5 15.6224 17.5 15.05V14.95C17.5 14.3776 17.4994 13.9934 17.4752 13.6975C17.4518 13.4104 17.4099 13.2731 17.3638 13.1825C17.2439 12.9473 17.0527 12.7561 16.8175 12.6362C16.7269 12.5901 16.5896 12.5482 16.3025 12.5248C16.0066 12.5006 15.6224 12.5 15.05 12.5H4.95C4.37757 12.5 3.99336 12.5006 3.69748 12.5248Z"
        fill={fill}
      />
    </svg>
  );
};

export default ViewSchedule;