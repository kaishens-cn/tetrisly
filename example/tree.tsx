import React from 'react';

import { Column, Icon, Tree } from '../src';

const TreeOverview = () => {
  return (
    <Column className="component-container" align="unset">
      <Tree
        expandedOffset={-20}
        data={[
          {
            id: '0',
            label: 'node 0',
            children: [
              { id: '0-0', label: 'node 0-0', prefix: <Icon.Dns width={14} /> },
              {
                id: '0-1',
                label: 'node 0-1',
                prefix: <Icon.Dns width={14} />,
                children: [
                  { id: '0-1-1', label: 'node 0-1-1', prefix: <Icon.Dns width={14} /> },
                  { id: '0-1-2', label: 'node 0-1-2', prefix: <Icon.Dns width={14} /> },
                ],
              },
              { id: '0-2', label: 'node 0-2', prefix: <Icon.Dns width={14} /> },
            ],
          },
          {
            id: '1',
            label: 'node 1',
            children: [
              { id: '1-0', label: 'node 1-0', prefix: <Icon.Dns width={14} /> },
              { id: '1-1', label: 'node 1-1', prefix: <Icon.Dns width={14} /> },
            ],
          },
        ]}
      />
    </Column>
  );
};

export default TreeOverview;
