import React from 'react';

const Pin = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M7.50947 1H12.4905C12.831 0.999986 13.1305 0.999972 13.3753 1.01983C13.6314 1.04059 13.9082 1.0875 14.1705 1.23082C14.5443 1.4351 14.8407 1.76499 14.9895 2.17238C15.0968 2.466 15.0875 2.75275 15.0552 3.00099C15.0248 3.23403 14.9616 3.51143 14.8924 3.81551L14.4551 5.73736C14.3704 6.10957 14.3522 6.20327 14.349 6.29041C14.3456 6.38185 14.3536 6.47354 14.373 6.56385C14.3916 6.65046 14.4265 6.74147 14.5747 7.09592L16.5486 11.8141C16.6903 12.1526 16.8168 12.455 16.8955 12.7092C16.9772 12.9731 17.0436 13.2915 16.9642 13.6316C16.8561 14.095 16.5599 14.4834 16.1616 14.7259C15.8773 14.8991 15.5646 14.9529 15.2801 14.9768C15.003 15 14.6589 15 14.2617 15H10.75V18.25C10.75 18.6642 10.4142 19 9.99997 19C9.58575 19 9.24997 18.6642 9.24997 18.25V15H5.73819C5.34104 15 4.99692 15 4.71981 14.9768C4.43536 14.9529 4.12264 14.8991 3.83828 14.7259C3.44002 14.4834 3.14386 14.095 3.0357 13.6316C2.95632 13.2915 3.02272 12.9731 3.10444 12.7092C3.18311 12.455 3.30964 12.1526 3.4513 11.8141L5.42519 7.09592C5.57348 6.74148 5.60836 6.65046 5.62698 6.56385C5.64638 6.47354 5.65438 6.38185 5.65098 6.29041C5.64773 6.20327 5.62949 6.10957 5.5448 5.73736L5.11446 3.84601C5.11214 3.83581 5.10982 3.82564 5.10752 3.81549C5.03831 3.51142 4.97517 3.23403 4.94478 3.00099C4.91241 2.75275 4.90314 2.466 5.01041 2.17238C5.15925 1.76499 5.45564 1.4351 5.82944 1.23082C6.09171 1.0875 6.36858 1.04059 6.62461 1.01983C6.86943 0.999972 7.16897 0.999986 7.50947 1ZM6.54876 2.5471C6.54864 2.54717 6.54887 2.54704 6.54876 2.5471C6.5549 2.54437 6.60063 2.52669 6.74585 2.51492C6.92264 2.50058 7.16049 2.5 7.5379 2.5H12.462C12.8394 2.5 13.0773 2.50058 13.2541 2.51492C13.3993 2.5267 13.4454 2.54457 13.4515 2.5473C13.5182 2.58383 13.5575 2.63271 13.5765 2.67674C13.5773 2.69113 13.5778 2.7299 13.5677 2.80703C13.5476 2.96127 13.5013 3.16859 13.4229 3.51322L12.9925 5.40457C12.9885 5.4224 12.9844 5.44001 12.9805 5.45743C12.9134 5.75141 12.8591 5.98948 12.85 6.23458C12.8419 6.45094 12.8609 6.66725 12.9064 6.87901C12.9579 7.11858 13.0525 7.34433 13.17 7.6247C13.1769 7.64122 13.1839 7.65793 13.191 7.67484L15.1518 12.3619C15.3106 12.7413 15.4079 12.9761 15.4626 13.1527C15.4901 13.2415 15.4973 13.2879 15.4993 13.3058C15.4846 13.3509 15.4494 13.4028 15.3835 13.4436C15.3766 13.4466 15.3226 13.468 15.1548 13.482C14.948 13.4994 14.6677 13.5 14.2311 13.5H5.76883C5.33222 13.5 5.05189 13.4994 4.84514 13.482C4.67737 13.468 4.62335 13.4466 4.61646 13.4436C4.55053 13.4028 4.51534 13.3509 4.50067 13.3058C4.50262 13.2879 4.50988 13.2415 4.53735 13.1527C4.59202 12.9761 4.68937 12.7413 4.84811 12.3619L6.80897 7.67484C6.81605 7.65793 6.82305 7.64122 6.82997 7.6247C6.94743 7.34433 7.04201 7.11858 7.09349 6.87901C7.139 6.66725 7.158 6.45094 7.14994 6.23458C7.14081 5.98949 7.08651 5.75142 7.01946 5.45744C7.01549 5.44002 7.01147 5.4224 7.00742 5.40457L6.57708 3.51322C6.49866 3.16859 6.4523 2.96127 6.43218 2.80703C6.42213 2.7299 6.42259 2.69113 6.42346 2.67674C6.44241 2.63271 6.48208 2.58364 6.54876 2.5471ZM6.42346 2.67674C6.42374 2.67203 6.42407 2.66993 6.42408 2.66995C6.42411 2.66999 6.42317 2.67661 6.41932 2.68713C6.42057 2.6837 6.42195 2.68023 6.42346 2.67674ZM4.50067 13.3058C4.49899 13.3006 4.49759 13.2956 4.49643 13.2906C4.49993 13.3056 4.4999 13.3148 4.49993 13.3148C4.49995 13.3148 4.5 13.312 4.50067 13.3058ZM4.61646 13.4436C4.61593 13.4433 4.61646 13.4436 4.61646 13.4436C4.61646 13.4436 4.61666 13.4437 4.6184 13.4448C4.61775 13.4444 4.6171 13.444 4.61646 13.4436ZM15.3835 13.4436C15.3828 13.444 15.3822 13.4444 15.3815 13.4448C15.3833 13.4437 15.3835 13.4436 15.3835 13.4436ZM15.4993 13.3058C15.4999 13.312 15.5 13.3148 15.5 13.3148C15.5 13.3148 15.5 13.3056 15.5035 13.2906C15.5023 13.2956 15.5009 13.3006 15.4993 13.3058ZM13.5765 2.67674C13.578 2.68023 13.5794 2.6837 13.5806 2.68713C13.5768 2.67661 13.5758 2.66999 13.5759 2.66995C13.5759 2.66993 13.5762 2.67203 13.5765 2.67674ZM13.4515 2.5473C13.4516 2.54729 13.4521 2.54753 13.4515 2.5473V2.5473Z"
        fill={fill}
      />
    </svg>
  );
};

export default Pin;