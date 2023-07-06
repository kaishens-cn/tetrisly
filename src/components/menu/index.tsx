import { animated, useSpring } from '@react-spring/web';
import { atom, createStore, Provider, useAtom } from 'jotai';
import React, { FC, PropsWithChildren, useEffect, useId, useImperativeHandle, useState } from 'react';
import useMeasure from 'react-use-measure';

import { ColorConfig, Column, Icon, Row, Space, TetrislyMenu, Typography } from '../..';
import { attachPropertiesToComponent } from '../../utils';
import { MenuGroup, MenuGroupContent, MenuItem, MenuItemContent } from './style';

const groupSelectKey = atom<string>('');
const itemSelectKey = atom<string>('');

const Menu = React.forwardRef<TetrislyMenu, PropsWithChildren>((props, ref) => {
  const store = createStore();

  useImperativeHandle(ref, () => ({
    setSelected(key: string) {
      store.set(groupSelectKey, key);
      store.set(itemSelectKey, key);
    },
  }));

  return (
    <Provider store={store}>
      <Space direction="vertical" gap={4} align="unset">
        {props.children}
      </Space>
    </Provider>
  );
});

interface MenuGroupProps {
  title: string;
  onClick?: () => void;
  defaultOpen?: boolean;
  menuKey?: string;
  icon?: React.ReactElement<React.SVGAttributes<SVGElement>>;
}

export const Group: FC<PropsWithChildren<MenuGroupProps>> = props => {
  const [selected, setSelected] = useAtom(groupSelectKey);
  const [_, setItemSelected] = useAtom(itemSelectKey);
  const id = props.menuKey || useId();
  const { defaultOpen = false } = props;
  const [ref, { height: viewHeight }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);
  const [background, setBackground] = useState<string>();
  const [contentColor, setContentColor] = useState<string>(ColorConfig.ActionNeutralNormal);

  const { height, transform } = useSpring({
    from: { height: 0, transform: 'rotate(0deg)' },
    to: {
      height: open ? viewHeight : 0,
      transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
    },
  });

  useEffect(() => {
    console.log(selected);
    if (selected !== id) {
      setBackground(undefined);
      setContentColor(ColorConfig.ActionNeutralNormal);
    } else {
      if (React.Children.count(props.children) > 0) {
        setBackground(ColorConfig.ActionGhostSelected);
        setContentColor(ColorConfig.ActionNeutralSelected);
        return;
      }
      // When there is no submenu, the group itself is used as the menu
      setBackground(ColorConfig.ActionPrimarySubtleSelected);
      setContentColor(ColorConfig.ActionPrimarySelected);
      setItemSelected('');
    }
  }, [selected]);

  return (
    <Column align="flex-start">
      <MenuGroup>
        <MenuGroupContent
          justify="flex-start"
          tabIndex={0}
          onMouseEnter={() => {
            if (selected !== id) {
              setBackground(ColorConfig.ActionGhostHover);
              setContentColor(ColorConfig.ActionNeutralHover);
            }
          }}
          onMouseLeave={() => {
            if (selected !== id) {
              setBackground(undefined);
              setContentColor(ColorConfig.ActionNeutralNormal);
            }
          }}
          onClick={() => {
            if (React.Children.count(props.children) > 0) {
              setBackground(ColorConfig.ActionGhostSelected);
              setContentColor(ColorConfig.ActionNeutralSelected);
              setOpen(!open);
              return;
            }
            setSelected(id);
            // When there is no submenu, the group itself is used as the menu
            setBackground(ColorConfig.ActionPrimarySubtleSelected);
            setContentColor(ColorConfig.ActionPrimarySelected);
            setItemSelected('');
            props.onClick?.();
          }}
          style={{
            backgroundColor: background,
          }}
        >
          <Space gap={2}>
            <animated.div style={{ transform, transformOrigin: 'center', display: 'inline-flex' }}>
              <Icon.ArrowheadRight
                width={16}
                height={16}
                fill={
                  React.Children.count(props.children) !== 0 ? ColorConfig.ContentTertiary : ColorConfig.Transparent
                }
              />
            </animated.div>
            <Space gap={18}>
              {props.icon &&
                React.cloneElement(props.icon, {
                  fill: contentColor,
                })}
              <Typography.Medium size={75} color={contentColor}>
                {props.title}
              </Typography.Medium>
            </Space>
          </Space>
        </MenuGroupContent>
      </MenuGroup>
      {React.Children.count(props.children) !== 0 && (
        <animated.div style={{ height, overflow: 'hidden' }}>
          <Space direction="vertical" align="start" gap={4} style={{ paddingTop: '4px' }} ref={ref}>
            {React.Children.map(props.children, (child, _) => {
              return React.cloneElement(child as React.ReactElement<MenuItemProps>, {
                groupKey: id,
              });
            })}
          </Space>
        </animated.div>
      )}
    </Column>
  );
};

interface MenuItemProps {
  title: string;
  groupKey?: string;
  menuKey?: string;
  onClick?: () => void;
}

export const Item: FC<PropsWithChildren<MenuItemProps>> = props => {
  const [_, setGroupSelected] = useAtom(groupSelectKey);
  const [selected, setSelected] = useAtom(itemSelectKey);
  const id = props.menuKey || useId();

  const [background, setBackground] = useState<string>();
  const [contentColor, setContentColor] = useState<string>(ColorConfig.ActionNeutralNormal);

  useEffect(() => {
    if (selected !== id) {
      setBackground(undefined);
      setContentColor(ColorConfig.ActionNeutralNormal);
    } else {
      setGroupSelected(props.groupKey);
    }
  }, [selected]);

  return (
    <MenuItem>
      <MenuItemContent
        justify="flex-start"
        style={{
          backgroundColor: background,
        }}
        tabIndex={0}
        onMouseEnter={() => {
          if (selected !== id) {
            setBackground(ColorConfig.ActionGhostHover);
            setContentColor(ColorConfig.ActionNeutralHover);
          }
        }}
        onMouseLeave={() => {
          if (selected !== id) {
            setBackground(undefined);
            setContentColor(ColorConfig.ActionNeutralNormal);
          }
        }}
        onClick={() => {
          setSelected(id);
          // setGroupSelected(props.groupKey);
          setBackground(ColorConfig.ActionPrimarySubtleSelected);
          setContentColor(ColorConfig.ActionPrimarySelected);
          props.onClick?.();
        }}
      >
        <Typography.Medium size={75} color={contentColor}>
          {props.title}
        </Typography.Medium>
      </MenuItemContent>
    </MenuItem>
  );
};

export default attachPropertiesToComponent(Menu, {
  Group: Group,
  Item: Item,
});
