import React from 'react';

interface TestProps {
  content?: string;
}
export const Test = (props: TestProps) => {
  return <div>{props.content}</div>;
};

import Alert from './components/alert';
import Icon from './components/icon';
import Row from './components/row';
import Space from './components/space';

export { Alert, Icon, Row, Space };
