import styled from 'styled-components';

import { ColorConfig } from '../../styles/color';
import { elevation } from '../../styles/elevation';
import Typography, { TypographyProps } from '../typography';

export interface ButtonStyleProps {
  inline?: boolean; // Set whether the button is inline or not
  button?: 'default' | 'ghost' | 'bare';
  appearance?: 'primary' | 'secondary' | 'inverted';
  intent?: 'none' | 'success' | 'danger';
  size?: 'normal' | 'large' | 'small';
  status?: 'normal' | 'hover' | 'press';
}

export const ButtonTextStyle = styled(Typography.Medium)<Omit<ButtonStyleProps, 'size'> & TypographyProps>`
  color: ${props => {
    if (props.appearance === 'primary' && props.button !== 'default' && props.intent === 'none') {
      if (props.status === 'hover') {
        return ColorConfig.ActionPrimaryHover;
      }
      if (props.status === 'press') {
        return ColorConfig.ActionPrimaryActive;
      }
      return ColorConfig.ActionPrimaryNormal;
    }
    if (props.appearance === 'primary' && props.button === 'default') {
      return ColorConfig.ActionInvertedNormal;
    }
    if (props.appearance === 'secondary' && props.intent === 'none') {
      if (props.status === 'hover') {
        return ColorConfig.ActionNeutralHover;
      }
      if (props.status === 'press') {
        return ColorConfig.ActionNeutralActive;
      }
      return ColorConfig.ActionNeutralNormal;
    }
    if (props.intent === 'success') {
      if (props.status === 'hover' && props.button === 'bare') {
        return ColorConfig.ActionSuccessHover;
      }
      if (props.status === 'press' && props.button === 'bare') {
        return ColorConfig.ActionSuccessActive;
      }
      return ColorConfig.ActionSuccessNormal;
    }
    if (props.intent === 'danger') {
      if (props.status === 'hover' && props.button === 'bare') {
        return ColorConfig.ActionDestructiveHover;
      }
      if (props.status === 'press' && props.button === 'bare') {
        return ColorConfig.ActionDestructiveActive;
      }
      return ColorConfig.ActionDestructiveNormal;
    }
    if (props.status === 'hover' && props.button === 'bare') {
      return ColorConfig.ActionInvertedHover;
    }
    if (props.status === 'press' && props.button === 'bare') {
      return ColorConfig.ActionInvertedActive;
    }
    return ColorConfig.ActionInvertedNormal;
  }} !important;
`;

export const ButtonStyle = styled.button<ButtonStyleProps>`
  outline: none;
  display: ${props => {
    if (props.inline) {
      return 'inline-block';
    }
    return 'block';
  }};
  cursor: pointer;
  border-radius: 6px;
  box-shadow: ${props => {
    if (props.button !== 'default') {
      return 'unset';
    }
    return elevation();
  }};
  border: ${props => {
    if (props.button === 'default' && props.appearance === 'secondary') {
      return `1px solid ${ColorConfig.ActionOutlineNormal}`;
    }
    return `1px solid ${ColorConfig.Transparent}`;
  }};
  background-color: ${props => {
    if (props.button === 'default' && props.appearance === 'primary') {
      if (props.intent === 'none') {
        if (props.status === 'hover') {
          return ColorConfig.ActionPrimaryHover;
        }
        if (props.status === 'press') {
          return ColorConfig.ActionPrimaryActive;
        }
        return ColorConfig.ActionPrimaryNormal;
      }
      if (props.intent === 'success') {
        if (props.status === 'hover') {
          return ColorConfig.ActionSuccessHover;
        }
        if (props.status === 'press') {
          return ColorConfig.ActionSuccessActive;
        }
        return ColorConfig.ActionSuccessNormal;
      }
      if (props.intent === 'danger') {
        if (props.status === 'hover') {
          return ColorConfig.ActionDestructiveHover;
        }
        if (props.status === 'press') {
          return ColorConfig.ActionDestructiveActive;
        }
        return ColorConfig.ActionDestructiveNormal;
      }
    }
    if (props.button === 'ghost') {
      if (props.status === 'hover') {
        return ColorConfig.ActionGhostHover;
      }
      if (props.status === 'press') {
        return ColorConfig.ActionGhostActive;
      }
      return ColorConfig.Transparent;
    }
    if (props.status === 'hover' && props.button !== 'bare') {
      return ColorConfig.ActionInvertedHover;
    }
    if (props.status === 'press' && props.button !== 'bare') {
      return ColorConfig.ActionInvertedActive;
    }
    return ColorConfig.ActionInvertedNormal;
  }};
  min-width: ${props => {
    if (props.size === 'large') {
      return '94px';
    }
    return '82px';
  }};
  padding: ${props => {
    if (props.button === 'bare') {
      return 0;
    }
    if (props.size === 'normal') {
      return '8px 16px';
    }
    if (props.size === 'large') {
      return '10px 16px';
    }
    if (props.size === 'small') {
      return '4px 12px';
    }
    return '8px 16px';
  }};
`;
