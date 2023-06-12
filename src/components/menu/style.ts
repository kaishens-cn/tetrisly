import styled from 'styled-components';

import Row from '../row';

export const MenuGroup = styled(Row)`
  height: 40px;
  width: 280px;
  user-select: none;
`;

export const MenuGroupContent = styled(Row)`
  height: 40px;
  width: 264px;
  border-radius: 6px;
  cursor: pointer;
`;

export const MenuItem = styled(Row)`
  height: 32px;
  width: 280px;
  user-select: none;
`;

export const MenuItemContent = styled(Row)`
  height: 32px;
  width: 196px;
  border-radius: 6px;
  padding-left: 68px;
  cursor: pointer;
`;
