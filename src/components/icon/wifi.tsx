import React from 'react';

const Wifi = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10 3.5C6.98637 3.5 4.0622 4.34842 2.24389 5.93946C1.93217 6.21222 1.45834 6.18064 1.18558 5.86891C0.912817 5.55718 0.944403 5.08336 1.25613 4.8106C3.43782 2.90159 6.76365 2 10 2C13.2364 2 16.5622 2.90161 18.7439 4.81063C19.0556 5.08339 19.0872 5.55721 18.8144 5.86894C18.5417 6.18066 18.0679 6.21225 17.7561 5.93948C15.9378 4.34843 13.0136 3.5 10 3.5ZM10 7.5C8.02341 7.50001 6.09204 8.1414 4.75679 9.36533C4.45145 9.64522 3.97702 9.62459 3.69714 9.31924C3.41725 9.0139 3.43788 8.53947 3.74323 8.25958C5.40798 6.73361 7.72661 6.00001 10 6C12.2734 5.99999 14.592 6.73357 16.2568 8.25959C16.5621 8.53948 16.5828 9.01391 16.3029 9.31925C16.023 9.62459 15.5486 9.64522 15.2432 9.36532C13.908 8.14136 11.9766 7.49999 10 7.5ZM10 11.5C8.92475 11.5 7.85205 11.876 6.99389 12.6269C6.68216 12.8997 6.20833 12.8681 5.93558 12.5564C5.66282 12.2446 5.69441 11.7708 6.00613 11.498C7.14797 10.4989 8.57527 9.99999 10 10C11.4248 10 12.8521 10.499 13.9939 11.4981C14.3056 11.7709 14.3372 12.2447 14.0644 12.5564C13.7917 12.8681 13.3179 12.8997 13.0061 12.627C12.148 11.8761 11.0753 11.5 10 11.5ZM10 15.5C9.72387 15.5 9.50001 15.7239 9.50001 16C9.50001 16.2761 9.72387 16.5 10 16.5C10.2762 16.5 10.5 16.2761 10.5 16C10.5 15.7239 10.2762 15.5 10 15.5ZM8.00001 16C8.00001 14.8954 8.89544 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18C8.89544 18 8.00001 17.1046 8.00001 16Z"
        fill={fill}
      />
    </svg>
  );
};

export default Wifi;
