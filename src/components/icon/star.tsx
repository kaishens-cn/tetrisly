import React from 'react';

const Star = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M10.0928 2.52327C9.99905 2.47491 9.86181 2.50029 9.79335 2.64526L8.00799 6.4256C7.76215 6.94616 7.27807 7.323 6.69953 7.41085L2.70736 8.01706C2.66367 8.02369 2.61758 8.04596 2.57857 8.08778C2.47149 8.20258 2.47467 8.3983 2.58316 8.50881L5.47192 11.4514C5.87611 11.8631 6.05323 12.4464 5.96057 13.0109L5.27863 17.1659C5.2674 17.2343 5.27853 17.3036 5.30766 17.3615C5.3787 17.5027 5.51526 17.5255 5.60897 17.474L9.17967 15.5123C9.69201 15.2308 10.3079 15.2308 10.8202 15.5123L14.3909 17.474C14.434 17.4977 14.48 17.5045 14.5234 17.4967C14.5864 17.4854 14.6553 17.4449 14.7056 17.3752C14.754 17.3082 14.7706 17.2347 14.7603 17.1681L14.0393 13.0109C13.9466 12.4464 14.1238 11.8631 14.5279 11.4514L17.4167 8.50881C17.4568 8.46795 17.4872 8.4096 17.4968 8.34087C17.5227 8.15468 17.3972 8.03296 17.2925 8.01706L13.3003 7.41085C12.7218 7.323 12.2377 6.94616 11.9919 6.4256L10.2065 2.64526C10.1788 2.5866 10.1367 2.54589 10.0928 2.52327ZM8.437 2.00469C8.85086 1.12838 9.89685 0.734459 10.7804 1.19013C11.1257 1.36821 11.3985 1.65668 11.5629 2.00469L13.3482 5.78504C13.3898 5.8731 13.4613 5.9181 13.5255 5.92785L17.5177 6.53406C18.4915 6.68193 19.1133 7.60661 18.9825 8.54746C18.9296 8.92752 18.7578 9.28395 18.4871 9.55964L15.5984 12.5022C15.5379 12.5638 15.5029 12.6621 15.5191 12.7656L16.2401 16.923C16.4008 17.9021 15.7151 18.807 14.788 18.9732C14.4037 19.0421 14.0097 18.976 13.6686 18.7887L10.0979 16.827C10.0354 16.7926 9.96447 16.7926 9.90194 16.827L6.33123 18.7887C5.46031 19.2672 4.40376 18.9024 3.96767 18.0356C3.79485 17.6921 3.7363 17.3015 3.79843 16.923L4.48038 12.768C4.49751 12.6636 4.4624 12.5642 4.40151 12.5022L1.51275 9.55964C0.840839 8.8752 0.828048 7.76537 1.48168 7.06464C1.74558 6.78171 2.09641 6.59264 2.48217 6.53406L6.47434 5.92785C6.53853 5.9181 6.61006 5.8731 6.65165 5.78504L8.437 2.00469Z"
        fill={fill}
      />
    </svg>
  );
};

export default Star;
