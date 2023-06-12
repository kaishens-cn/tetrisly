import React from 'react';

const Book = (props: React.SVGAttributes<SVGElement>) => {
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
        d="M7.36039 3.61962C6.37659 3.45969 5.37338 3.45968 4.38957 3.6196C4.04633 3.6754 3.70151 3.75841 2.93703 3.94359C2.81457 3.97326 2.74342 3.99063 2.6902 4.00574C2.65677 4.01523 2.64281 4.02049 2.63938 4.02187C2.63938 4.02187 2.63938 4.02187 2.63938 4.02187C2.57135 4.05532 2.5224 4.11766 2.50597 4.19116C2.50544 4.19484 2.50363 4.20961 2.50228 4.24409C2.50012 4.2993 2.49999 4.37244 2.49999 4.49837V15.8195C2.49999 15.9082 2.50003 15.9625 2.50093 16.0032C2.50151 16.0293 2.50231 16.0409 2.50252 16.0436C2.52141 16.1748 2.64043 16.269 2.77377 16.2563C2.77648 16.2559 2.78791 16.2539 2.81362 16.2483C2.8535 16.2396 2.90632 16.2268 2.99252 16.2059L3.00807 16.2022C3.34105 16.1215 3.52685 16.0765 3.71292 16.0383C5.13942 15.7456 6.61055 15.7456 8.03705 16.0383C8.22309 16.0765 8.40886 16.1215 8.74172 16.2021L9.24998 16.3252V4.04949L8.81292 3.94362C8.04844 3.75843 7.70363 3.67541 7.36039 3.61962ZM10.75 4.0495V16.3252L11.2581 16.2022C11.5911 16.1215 11.7768 16.0765 11.9629 16.0383C13.3894 15.7456 14.8606 15.7456 16.287 16.0383C16.4731 16.0765 16.6589 16.1215 16.9919 16.2022L17.0075 16.2059C17.0936 16.2268 17.1465 16.2396 17.1863 16.2483C17.2255 16.2569 17.2315 16.2569 17.2241 16.2561C17.3583 16.27 17.4785 16.1755 17.4974 16.0436C17.4977 16.0409 17.4985 16.0293 17.499 16.0032C17.4999 15.9625 17.5 15.9082 17.5 15.8195V4.49843C17.5 4.37249 17.4999 4.29934 17.4977 4.24413C17.4963 4.20964 17.4945 4.19487 17.494 4.19119C17.4776 4.1177 17.4286 4.05536 17.3606 4.02191C17.3572 4.02053 17.3432 4.01527 17.3098 4.00578C17.2565 3.99066 17.1854 3.97329 17.0629 3.94362C16.2984 3.75843 15.9536 3.67542 15.6103 3.61963C14.6266 3.45971 13.6234 3.45971 12.6396 3.61963C12.2964 3.67542 11.9516 3.75843 11.187 3.94362L10.75 4.0495ZM4.1489 2.13904C5.29211 1.9532 6.45787 1.95321 7.60108 2.13905C8.00762 2.20514 8.4104 2.30271 9.13213 2.47756L9.80156 2.63972C9.87467 2.65743 9.91501 2.66714 9.9459 2.67372C9.97259 2.6794 9.97792 2.67957 9.97569 2.67936C9.99185 2.68093 10.0081 2.68093 10.0243 2.67936C10.0221 2.67957 10.0274 2.6794 10.0541 2.67372C10.085 2.66714 10.1253 2.65743 10.1984 2.63972L10.8679 2.47756C11.5896 2.30272 11.9924 2.20514 12.399 2.13906C13.5421 1.95324 14.7078 1.95324 15.851 2.13906C16.2576 2.20514 16.6603 2.30272 17.3821 2.47756L17.4161 2.48579C17.4318 2.4896 17.4476 2.49341 17.4635 2.49723C17.648 2.54161 17.8424 2.58835 18.0148 2.67206C18.4971 2.90631 18.8455 3.34879 18.9598 3.87283C19.0007 4.06011 19.0003 4.26002 19 4.44962C19 4.46597 19 4.48224 19 4.49843V15.8195C19 15.8316 19 15.8437 19 15.8558C19.0001 15.9883 19.0003 16.1237 18.9842 16.2425C18.8575 17.1796 18.0091 17.8457 17.0692 17.7481C16.9499 17.7357 16.8184 17.7037 16.6895 17.6723C16.6778 17.6695 16.666 17.6666 16.6543 17.6638C16.3017 17.5784 16.1427 17.5399 15.9856 17.5077C14.758 17.2559 13.492 17.2559 12.2644 17.5077C12.1073 17.5399 11.9483 17.5784 11.5957 17.6638L10.5516 17.9167C10.5426 17.9189 10.5336 17.9211 10.5245 17.9233C10.4133 17.9503 10.2942 17.9793 10.1696 17.9914C10.0568 18.0024 9.94318 18.0024 9.83036 17.9914C9.70576 17.9793 9.58668 17.9503 9.47544 17.9233C9.46638 17.9211 9.45737 17.9189 9.44842 17.9167L8.40431 17.6638C8.05169 17.5784 7.89266 17.5399 7.73558 17.5077C6.50799 17.2559 5.24198 17.2559 4.01439 17.5077C3.85731 17.5399 3.69828 17.5784 3.34566 17.6638C3.33395 17.6666 3.32222 17.6695 3.31046 17.6723C3.18159 17.7037 3.05002 17.7357 2.93078 17.7481C1.99088 17.8457 1.14247 17.1796 1.01575 16.2425C0.999686 16.1237 0.999825 15.9883 0.99996 15.8558C0.999973 15.8437 0.999985 15.8316 0.999985 15.8195V4.49837C0.999985 4.48219 0.999959 4.46591 0.999932 4.44956C0.999623 4.25997 0.999297 4.06008 1.04014 3.87281C1.15443 3.34875 1.50287 2.90626 1.98523 2.67201C2.1576 2.58831 2.35192 2.54157 2.53643 2.49719C2.55233 2.49337 2.56816 2.48956 2.5839 2.48575L2.61783 2.47753C3.33957 2.30269 3.74235 2.20512 4.1489 2.13904Z"
        fill={fill}
      />
    </svg>
  );
};

export default Book;