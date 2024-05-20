import { debounce } from 'lodash';
import React, { useCallback, useRef } from 'react';

export function attachPropertiesToComponent<C, P extends Record<string, any>>(component: C, properties: P): C & P {
  const ret = component as any;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}

/**
 * 解决单击和双击冲突的hooks
 * @param clickCallback 点击事件的回调
 * @param count 触发点击事件回调的点击次数, 默认是单击1次
 */
export const useClick = (clickCallback: (e: React.MouseEvent) => void, count?: number) => {
  const clickCount = useRef(0);

  return useCallback(
    (e: React.MouseEvent) => {
      clickCount.current++;
      const click = debounce(() => {
        if (clickCount.current !== 0) {
          if (clickCount.current === (count || 1)) {
            clickCallback(e);
          }
          clickCount.current = 0;
        }
      }, 300);
      click();
    },
    [clickCallback],
  );
};
