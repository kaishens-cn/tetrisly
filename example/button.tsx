import React from 'react';

import { Button, ColorConfig, Column, Divider, Space, Typography } from '../src';

const ButtonOverview = () => {
  return (
    <Column className="component-container">
      <Space gap={8} direction="vertical">
        <Button size="large">button label</Button>
        <Button size="normal">button label</Button>
        <Button size="small">button label</Button>
        <Button intent="success">button label</Button>
        <Button intent="danger">button label</Button>
        <Button appearance="secondary">button label</Button>
        <Button button="ghost">button label</Button>
        <Button button="ghost" appearance="secondary">
          button label
        </Button>
        <Button button="ghost" intent="success">
          button label
        </Button>
        <Button button="bare">button label</Button>
      </Space>
      <Divider title="Button" fillUp />
      <Typography.Normal size={75} color={ColorConfig.ContentSecondary}>
        The Button triggers an event or action.
      </Typography.Normal>
    </Column>
  );
};

export default ButtonOverview;
