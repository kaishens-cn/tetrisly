import React from 'react';

interface TestProps {
  content?: string;
}
export const Test = (props: TestProps) => {
  return <div>{props.content}</div>;
};

import Icon from './components/icon';

export { Icon };
