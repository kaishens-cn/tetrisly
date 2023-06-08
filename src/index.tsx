import React from 'react';

interface TestProps {
  content?: string;
}
export const Test = (props: TestProps) => {
  return <div>{props.content}</div>;
};

import Alert from './components/alert';
import Column from './components/column';
import Icon from './components/icon';
import Menu from './components/menu';
import Row from './components/row';
import Space from './components/space';

export { Alert, Column, Icon, Menu, Row, Space };
