import React from 'react';

const Function = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M9.48244 3.66276C9.59036 3.24003 9.74176 2.94009 9.91008 2.75581C10.0607 2.5909 10.238 2.5 10.5 2.5C11.0523 2.5 11.5 2.94772 11.5 3.5C11.5 3.91421 11.8358 4.25 12.25 4.25C12.6642 4.25 13 3.91421 13 3.5C13 2.11929 11.8807 1 10.5 1C9.79549 1 9.22279 1.2841 8.80255 1.74419C8.40252 2.18214 8.16418 2.75093 8.02239 3.3181C8.01906 3.33144 8.01609 3.34486 8.01349 3.35836L6.92852 9.00024H4.5C4.08579 9.00024 3.75 9.33603 3.75 9.75024C3.75 10.1645 4.08579 10.5002 4.5 10.5002H6.64006L5.51756 16.3372C5.40964 16.76 5.25824 17.0599 5.08992 17.2442C4.93929 17.4091 4.76199 17.5 4.5 17.5C3.94772 17.5 3.5 17.0523 3.5 16.5C3.5 16.0858 3.16421 15.75 2.75 15.75C2.33579 15.75 2 16.0858 2 16.5C2 17.8807 3.11929 19 4.5 19C5.20451 19 5.77721 18.7159 6.19745 18.2558C6.59748 17.8179 6.83582 17.2491 6.97761 16.6819C6.98094 16.6686 6.98391 16.6551 6.98651 16.6416L8.16754 10.5002H11.2862C11.3597 10.5002 11.4295 10.5326 11.477 10.5888L13.5175 13.0002L11.1775 15.7658C10.9099 16.082 10.9493 16.5552 11.2655 16.8228C11.5817 17.0903 12.055 17.0509 12.3225 16.7347L14.5 14.1613L16.6775 16.7347C16.945 17.0509 17.4183 17.0903 17.7345 16.8228C18.0507 16.5552 18.0901 16.082 17.8225 15.7658L15.4825 13.0002L17.8225 10.2347C18.0901 9.9185 18.0507 9.44526 17.7345 9.1777C17.4183 8.91015 16.945 8.94958 16.6775 9.26579L14.5 11.8391L12.6221 9.61984C12.2896 9.22688 11.801 9.00024 11.2862 9.00024H8.456L9.48244 3.66276Z"
        fill={fill}
      />
    </svg>
  );
};

export default Function;