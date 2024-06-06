import React, { PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react';

import { ColorConfig, Typography } from '../../index';
import { getFontHeight } from '../../styles/typography';
import { useClick } from '../../utils';
import Icon from '../icon';
import Row from '../row';
import Space from '../space';
import { TypographySize } from '../typography';
import { HandleStatus, TreeNodeRow } from './style';

interface TreeNodeProps {
  nodeData: TreeNode;
  fontSize?: TypographySize;
  defaultExpand?: boolean;
  prefix?: ReactNode; // 一般是节点的前缀图标
  hasChildren: boolean;
  isOpen: boolean;
  onClick?: () => void;
  onSelect?: () => void;
  nodeLevel: number;
  selected: boolean; // 是否被选中
}

const TreeNode = (props: PropsWithChildren<TreeNodeProps>) => {
  const [handleStatus, setHandleStatus] = useState<HandleStatus>('normal');

  useEffect(() => {
    setHandleStatus(props.selected ? 'press' : 'normal');
  }, [props.selected]);

  const handleDoubleClick = useClick(e => {
    props.onClick?.();
  }, 2);

  return (
    <TreeNodeRow
      status={handleStatus}
      nodeLevel={props.nodeLevel}
      onMouseEnter={() => {
        if (handleStatus !== 'press') {
          setHandleStatus('hover');
        }
      }}
      onMouseLeave={() => {
        if (handleStatus !== 'press') {
          setHandleStatus('normal');
        }
      }}
      onClick={e => {
        props.onSelect?.();
        handleDoubleClick(e);
      }}
    >
      <Space gap={4}>
        <Row style={{ height: getFontHeight(props.fontSize) }}>
          {props.hasChildren ? (
            props.isOpen ? (
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
            <Typography.Medium select="none" size={props.fontSize || 75} color={ColorConfig.ContentSecondary}>
              {props.nodeData.label}
            </Typography.Medium>
          </div>
        </div>
      </Space>
    </TreeNodeRow>
  );
};

// 树结构扁平化，为了降低后续其他操作的时间复杂度，扁平化应该转为map形式存储
// node的id不能重复
const flatTree = (data: TreeNode[], defaultExpandedKeys: string[]) => {
  const result: Node[] = [];

  const flatten = (node: TreeNode, nodeLevel: number, parentId?: string) => {
    result.push({
      label: node.label,
      id: node.id,
      parentId: parentId,
      nodeLevel,
      isOpen: defaultExpandedKeys.indexOf(node.id) >= 0,
      prefix: node.prefix,
      hasChildren: node.children && node.children.length > 0,
      index: result.length,
    });
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        flatten(child, nodeLevel + 1, node.id);
      });
    }
  };

  data.forEach(node => {
    flatten(node, 1);
  });

  return result;
};

type Node = {
  label: string;
  id: string;
  parentId?: string;
  nodeLevel: number;
  isOpen: boolean;
  hasChildren: boolean;
  prefix?: ReactNode;
  index: number;
};
export type TreeNode = { label: string; id: string; children?: TreeNode[]; prefix?: ReactNode };

interface TreeProps {
  data: TreeNode[];
  fontSize?: TypographySize;
  defaultExpandedKeys?: string[];
  width?: string | number;
  height?: string | number;
  dataCallback?: () => void; // props.data refresh callback
}

type OpenNode = { [id: string]: boolean };

const Tree = (props: TreeProps) => {
  const [staticTreeData, setStaticTreeData] = useState<Node[]>([]);
  const [displayTreeData, setDisplayTreeData] = useState<Node[]>([]);
  const openNodeMap = useRef<OpenNode>({});
  const [selectNodeId, setSelectNodeId] = useState<string>();

  useEffect(() => {
    const originalData = flatTree(props.data, props.defaultExpandedKeys || []);
    // 和当前的list做diff，主要点在于isOpen状态要同步给originalData
    for (const item of originalData) {
      if (openNodeMap.current.hasOwnProperty(item.id)) {
        item.isOpen = openNodeMap.current[item.id];
      }
    }

    // 根据originalData来生成displayList
    let nodeLevel = originalData[0].nodeLevel;
    let openParent: string[] = [];
    const temp: Node[] = [];
    for (let i = 0; i < originalData.length; i++) {
      if (originalData[i].nodeLevel > nodeLevel) {
        if (openParent.indexOf(originalData[i].parentId) >= 0) {
          temp.push(originalData[i]);
        }
        if (originalData[i].isOpen) {
          openParent.push(originalData[i].id);
        }
      } else {
        temp.push(originalData[i]);
        nodeLevel = originalData[i].nodeLevel;
        if (originalData[i].isOpen) {
          openParent = [originalData[i].id];
        } else {
          openParent = [];
        }
      }
    }
    setStaticTreeData(originalData);
    setDisplayTreeData(temp);
    props.dataCallback?.();
  }, [props.data]);

  const clickNode = (node: Node, originalData: Node[], data: Node[], index: number) => {
    const nextOpenStatus = !data[index].isOpen;
    // 如果接下来是展开状态
    if (nextOpenStatus) {
      const temp: Node[] = [];
      originalData[node.index].isOpen = nextOpenStatus;
      // 当我展开一个节点的时候，是把从这个节点开始往后连续出现的所有level比自己大的节点, 且父元素是open的都展开
      const openParent = [node.id];
      for (let i = node.index + 1; i < originalData.length; i++) {
        if (originalData[i].nodeLevel > node.nodeLevel) {
          if (openParent.indexOf(originalData[i].parentId) >= 0) {
            temp.push(originalData[i]);
          }
          if (originalData[i].isOpen) {
            openParent.push(originalData[i].id);
          }
        } else {
          break;
        }
      }
      data[index].isOpen = nextOpenStatus;
      data.splice(index + 1, 0, ...temp);
    } else {
      // 如果接下来是关闭状态, 从data中删除指定的index
      // 找到要删除的子元素, 当前节点关闭的话, 下面所有层级的节点都要删除
      // 所以当我关闭一个节点的时候，是把从这个节点开始往后连续出现的所有level比自己大的节点都删除，而不是跳着删除的
      let deleteCount = 0;
      for (let i = index + 1; i < data.length; i++) {
        if (data[i].nodeLevel > data[index].nodeLevel) {
          deleteCount++;
        } else {
          break;
        }
      }
      data[index].isOpen = nextOpenStatus;
      originalData[node.index].isOpen = nextOpenStatus;
      data.splice(index + 1, deleteCount);
    }
    return [originalData, data];
  };

  return (
    <>
      {displayTreeData.map((node, index) => {
        return (
          <TreeNode
            selected={selectNodeId === node.id}
            isOpen={node.isOpen}
            onClick={() => {
              if (node.hasChildren) {
                openNodeMap.current[node.id] = node.isOpen;
                const [originalData, data] = clickNode(node, staticTreeData.slice(), displayTreeData.slice(), index);
                setStaticTreeData(originalData);
                setDisplayTreeData(data);
              }
            }}
            onSelect={() => {
              setSelectNodeId(node.id);
            }}
            prefix={node.prefix}
            nodeData={{ label: node.label, id: node.id }}
            key={node.id}
            fontSize={props.fontSize}
            nodeLevel={node.nodeLevel}
            hasChildren={node.hasChildren}
          />
        );
      })}
    </>
  );
};

export default Tree;
