import './index.scss';

import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';
import useMeasure from 'react-use-measure';

import { Icon } from '../../index';
import colorConfig from '../../styles/color.module.scss';
import Row from '../row';
import Space from '../space';
import Typography from '../typography';

interface AlertAction {
  text: string;
  onClick?: () => void;
}

interface AlertProps {
  type?: 'normal' | 'success' | 'warning' | 'negative';
  closeable?: boolean;
  message?: string;
  actions?: AlertAction[];
  onClose?: () => void;
}

const Alert = (props: AlertProps) => {
  const { type = 'normal', closeable, message = '', actions } = props;
  const [open, setOpen] = useState(true);

  const contentColor = type === 'warning' ? colorConfig.ContentPrimary : colorConfig.ContentInvertedPrimary;
  const actionColor = type === 'warning' ? colorConfig.ActionNeutralNormal : colorConfig.ActionInvertedNormal;
  let icon = <Icon.InfoCircle fill={contentColor} />;
  if (type === 'warning') {
    icon = <Icon.WarningFill fill={contentColor} />;
  }
  if (type === 'negative') {
    icon = <Icon.AlertFill fill={contentColor} />;
  }

  const [ref, { height }] = useMeasure();

  const [animationProps] = useSpring(
    {
      height: open ? height : 0,
      overflow: 'hidden',
      config: {
        duration: 300,
      },
      onRest: () => {
        if (!open) {
          props.onClose?.();
        }
      },
    },
    [ref, height]
  );

  return (
    <animated.div style={animationProps}>
      <Row className={`alert alert-${type}`} ref={ref}>
        <Space gap={16}>
          <Space gap={8}>
            {icon}
            <Typography.Medium size={75} color={contentColor}>
              {message}
            </Typography.Medium>
          </Space>
          {actions && (
            <Space
              gap={8}
              split={
                <Typography.Medium size={75} color={contentColor}>
                  ·
                </Typography.Medium>
              }
            >
              {actions.map((action, index) => {
                return (
                  <Typography.Medium key={index} size={75} color={contentColor} underline>
                    {action.text}
                  </Typography.Medium>
                );
              })}
            </Space>
          )}
        </Space>
        {closeable && <Icon.Close fill={actionColor} className="alert-close" onClick={() => setOpen(false)} />}
      </Row>
    </animated.div>
  );
};

export default Alert;
