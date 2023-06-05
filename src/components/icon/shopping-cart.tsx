import React from 'react';

const ShoppingCart = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M9.91954 1H10.0804C10.6146 0.99999 11.0604 0.999981 11.4246 1.02974C11.8045 1.06078 12.1612 1.12789 12.4985 1.29973C13.0159 1.56338 13.4366 1.98408 13.7002 2.50153C13.8721 2.83879 13.9392 3.19545 13.9702 3.57533C13.981 3.70719 13.9879 3.84975 13.9923 4.00333C14.2033 4.0067 14.3947 4.01348 14.5672 4.02712C14.9261 4.05551 15.2632 4.11688 15.5865 4.27264C16.0846 4.5127 16.4988 4.89737 16.775 5.37644C16.9543 5.68729 17.0404 6.01898 17.0952 6.37478C17.1476 6.7149 17.1785 7.13158 17.2153 7.62915L17.7457 14.7898C17.788 15.3599 17.8231 15.8341 17.8192 16.2218C17.8153 16.6248 17.7703 17.006 17.6079 17.37C17.3601 17.9258 16.9348 18.3837 16.3989 18.672C16.0478 18.8608 15.671 18.9338 15.2693 18.9675C14.883 19 14.4075 19 13.8359 19H6.16404C5.59241 19 5.11697 19 4.73062 18.9675C4.329 18.9338 3.95214 18.8608 3.60109 18.672C3.06512 18.3837 2.63989 17.9258 2.39203 17.37C2.22969 17.006 2.18471 16.6248 2.18071 16.2218C2.17686 15.8341 2.21199 15.3599 2.25423 14.7898L2.78465 7.62917C2.8215 7.13159 2.85236 6.7149 2.90477 6.37478C2.95959 6.01898 3.04569 5.68729 3.22491 5.37644C3.50112 4.89737 3.91533 4.5127 4.41349 4.27264C4.73673 4.11688 5.07388 4.05551 5.43276 4.02712C5.60523 4.01348 5.79661 4.00669 6.00769 4.00332C6.01207 3.84975 6.01894 3.70719 6.02972 3.57533C6.06076 3.19545 6.12787 2.83879 6.29971 2.50153C6.56336 1.98408 6.98406 1.56338 7.5015 1.29973C7.83877 1.12789 8.19542 1.06078 8.57531 1.02974C8.93954 0.999981 9.38539 0.99999 9.91954 1ZM5.99998 5.50365V7.25C5.99998 7.66421 6.33577 8 6.74998 8C7.16419 8 7.49998 7.66421 7.49998 7.25V5.5H12.5V7.25C12.5 7.66421 12.8358 8 13.25 8C13.6642 8 14 7.66421 14 7.25V5.50365C14.1737 5.50669 14.3201 5.51226 14.4489 5.52245C14.7166 5.54363 14.8471 5.58141 14.9353 5.62393C15.1617 5.73305 15.35 5.9079 15.4756 6.12565C15.5245 6.2105 15.5718 6.3378 15.6127 6.60322C15.655 6.87772 15.682 7.23486 15.7216 7.76902L16.2475 14.869C16.2927 15.4788 16.3225 15.8897 16.3193 16.2069C16.3163 16.5159 16.2808 16.6631 16.238 16.7591C16.1253 17.0117 15.932 17.2199 15.6884 17.3509C15.5958 17.4007 15.4516 17.4469 15.1437 17.4728C14.8277 17.4994 14.4156 17.5 13.8042 17.5H6.19578C5.58433 17.5 5.1723 17.4994 4.85626 17.4728C4.54836 17.4469 4.40411 17.4007 4.31155 17.3509C4.06793 17.2199 3.87465 17.0117 3.76198 16.7591C3.71918 16.6631 3.6837 16.5159 3.68063 16.2069C3.67749 15.8897 3.70731 15.4788 3.75248 14.869L4.2784 7.76902C4.31797 7.23486 4.34497 6.87772 4.38727 6.60322C4.42817 6.3378 4.47548 6.2105 4.5244 6.12565C4.64995 5.9079 4.83823 5.73305 5.06466 5.62393C5.1529 5.58141 5.28334 5.54363 5.55106 5.52245C5.67987 5.51226 5.82629 5.50669 5.99998 5.50365ZM12.4916 4H7.50841C7.51205 3.88876 7.51727 3.7889 7.52474 3.69748C7.5482 3.41036 7.59008 3.27307 7.63622 3.18251C7.75606 2.94731 7.94729 2.75608 8.18249 2.63624C8.27305 2.5901 8.41033 2.54822 8.69746 2.52476C8.99334 2.50058 9.37755 2.5 9.94998 2.5H10.05C10.6224 2.5 11.0066 2.50058 11.3025 2.52476C11.5896 2.54822 11.7269 2.5901 11.8175 2.63624C12.0527 2.75608 12.2439 2.94731 12.3637 3.18251C12.4099 3.27307 12.4518 3.41036 12.4752 3.69748C12.4827 3.7889 12.4879 3.88876 12.4916 4Z"
        fill={fill}
      />
    </svg>
  );
};

export default ShoppingCart;
