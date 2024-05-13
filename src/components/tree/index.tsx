import React, { PropsWithChildren, ReactNode, useState } from 'react';

import { ColorConfig, Typography } from '../../index';
import { getFontHeight } from '../../styles/typography';
import Icon from '../icon';
import Row from '../row';
import Space from '../space';
import { TypographySize } from '../typography';

interface TreeNodeProps {
  nodeData: TreeNode;
  fontSize?: TypographySize;
  defaultExpand?: boolean;
  expandedOffset: number; // 展开的子元素和父元素之间的偏移距离
  prefix?: ReactNode; // 一般是节点的前缀图标
}

const TreeNode = (props: PropsWithChildren<TreeNodeProps>) => {
  const [isOpen, setIsOpen] = useState(!!props.defaultExpand);

  const toggleOpen = () => {
    if (props.children) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div style={{ marginLeft: props.expandedOffset }}>
      <Space gap={4}>
        <Row style={{ height: getFontHeight(props.fontSize) }} onClick={toggleOpen}>
          {props.children ? (
            isOpen ? (
              <Icon.ChevronDownSmall />
            ) : (
              <Icon.ChevronRightSmall />
            )
          ) : (
            <div style={{ width: 20, height: 20 }} />
          )}
          {props.prefix}
        </Row>
        <div>
          <div>
            <Typography.Medium size={props.fontSize || 75} color={ColorConfig.ContentSecondary} onClick={toggleOpen}>
              {props.nodeData.label}
            </Typography.Medium>
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }}>{props.children}</div>
        </div>
      </Space>
    </div>
  );
};

type TreeNode = { label: string; id: string; children?: TreeNode[]; prefix?: ReactNode };

interface TreeProps {
  data: TreeNode[];
  fontSize?: TypographySize;
  defaultExpandedKeys?: string[];
  expandedOffset?: number; // 展开的子元素和父元素之间的偏移距离
}

const Tree = (props: TreeProps) => {
  const renderTree = (node: TreeNode[], firstFloor?: boolean) => {
    return node.map((item, index) => {
      const defaultExpandedKeys = props.defaultExpandedKeys || [];
      return (
        <TreeNode
          prefix={item.prefix}
          nodeData={item}
          key={item.id}
          defaultExpand={defaultExpandedKeys.indexOf(item.id) >= 0}
          fontSize={props.fontSize}
          expandedOffset={firstFloor ? 0 : props.expandedOffset || 0}
        >
          {item.children && renderTree(item.children)}
        </TreeNode>
      );
    });
  };

  return <div>{renderTree(props.data, true)}</div>;
};

export default Tree;
