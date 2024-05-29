import React from 'react';

import { Column, Input } from '../src';

const InputOverview = () => {
  return (
    <Column className="component-container" align="unset">
      <Input size="small" placeholder="placeholder" />
      <Input placeholder="placeholder" />
    </Column>
  );
};

export default InputOverview;
