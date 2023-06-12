import React from 'react';

const Tv = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M4.91957 1H15.0804C15.6146 0.99999 16.0604 0.999981 16.4247 1.02974C16.8046 1.06078 17.1612 1.12789 17.4985 1.29973C18.0159 1.56338 18.4366 1.98408 18.7003 2.50153C18.8721 2.83879 18.9392 3.19545 18.9703 3.57533C19 3.93956 19 4.3854 19 4.91955V11.0805C19 11.6146 19 12.0604 18.9703 12.4247C18.9392 12.8046 18.8721 13.1612 18.7003 13.4985C18.4366 14.0159 18.0159 14.4366 17.4985 14.7003C17.1612 14.8721 16.8046 14.9392 16.4247 14.9703C16.0604 15 15.6146 15 15.0805 15H4.91955C4.3854 15 3.93956 15 3.57533 14.9703C3.19545 14.9392 2.83879 14.8721 2.50153 14.7003C1.98408 14.4366 1.56338 14.0159 1.29973 13.4985C1.12789 13.1612 1.06078 12.8046 1.02974 12.4247C0.999981 12.0604 0.99999 11.6146 1 11.0804V4.91957C0.99999 4.38541 0.999981 3.93956 1.02974 3.57533C1.06078 3.19545 1.12789 2.83879 1.29973 2.50153C1.56338 1.98408 1.98408 1.56338 2.50153 1.29973C2.83879 1.12789 3.19545 1.06078 3.57533 1.02974C3.93956 0.999981 4.38541 0.99999 4.91957 1ZM3.69748 2.52476C3.41036 2.54822 3.27307 2.5901 3.18251 2.63624C2.94731 2.75608 2.75608 2.94731 2.63624 3.18251C2.5901 3.27307 2.54822 3.41036 2.52476 3.69748C2.50058 3.99336 2.5 4.37757 2.5 4.95V11.05C2.5 11.6224 2.50058 12.0066 2.52476 12.3025C2.54822 12.5896 2.5901 12.7269 2.63624 12.8175C2.75608 13.0527 2.94731 13.2439 3.18251 13.3638C3.27307 13.4099 3.41036 13.4518 3.69748 13.4752C3.99336 13.4994 4.37757 13.5 4.95 13.5H15.05C15.6224 13.5 16.0066 13.4994 16.3025 13.4752C16.5896 13.4518 16.7269 13.4099 16.8175 13.3638C17.0527 13.2439 17.2439 13.0527 17.3638 12.8175C17.4099 12.7269 17.4518 12.5896 17.4752 12.3025C17.4994 12.0066 17.5 11.6224 17.5 11.05V4.95C17.5 4.37757 17.4994 3.99336 17.4752 3.69748C17.4518 3.41036 17.4099 3.27307 17.3638 3.18251C17.2439 2.94731 17.0527 2.75608 16.8175 2.63624C16.7269 2.5901 16.5896 2.54822 16.3025 2.52476C16.0066 2.50058 15.6224 2.5 15.05 2.5H4.95C4.37757 2.5 3.99336 2.50058 3.69748 2.52476ZM10 17.5C9.06287 17.5 8.25581 17.9154 7.92082 18.5854C7.73558 18.9559 7.28507 19.1061 6.91459 18.9208C6.54411 18.7356 6.39394 18.2851 6.57918 17.9146C7.24419 16.5846 8.68713 16 10 16C11.3129 16 12.7558 16.5846 13.4208 17.9146C13.6061 18.2851 13.4559 18.7356 13.0854 18.9208C12.7149 19.1061 12.2644 18.9559 12.0792 18.5854C11.7442 17.9154 10.9371 17.5 10 17.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default Tv;