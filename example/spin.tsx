import React from 'react';

import { ColorConfig, Column, Divider, Space, Spin, Typography } from '../src';

const SpinOverview = () => {
  return (
    <Column className="component-container" align="unset">
      <Space gap={8}>
        <Spin />
        <Spin color="#4A545E" />
      </Space>
      <Divider title="Button" fillUp />
      <Typography.Normal size={75} color={ColorConfig.ContentSecondary}>
        The Button triggers an event or action.
      </Typography.Normal>
    </Column>
  );
};

export default SpinOverview;
