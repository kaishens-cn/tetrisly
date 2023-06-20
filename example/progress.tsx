import React, { useEffect, useState } from 'react';

import { ColorConfig, Column, Divider, Progress, Space, Typography } from '../src';

const ProgressOverview = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    window.setInterval(() => {
      setPercent(v => {
        if (v < 100) {
          return v + 1;
        }
        return v;
      });
    }, 300);
  }, []);

  return (
    <Column className="component-container" align="unset">
      <Space gap={8}>
        <Progress percent={percent} />
      </Space>
      <Divider title="Progress" fillUp />
      <Typography.Normal size={75} color={ColorConfig.ContentSecondary}>
        The Button triggers an event or action.
      </Typography.Normal>
    </Column>
  );
};

export default ProgressOverview;
