import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Button, ColorConfig } from '../src';

describe('Button', () => {
  const { baseElement, getByRole } = render(<Button>Test</Button>);

  test('Mouse Event', () => {
    const button = baseElement.getElementsByTagName('button')[0];
    fireEvent.mouseEnter(button);
    // expect(button.getAttribute('status')).toMatch('hover');
    expect(button).toHaveStyle({ backgroundColor: ColorConfig.ActionPrimaryHover });

    fireEvent.mouseLeave(button);
    // expect(button.getAttribute('status')).toMatch('normal');
    expect(button).toHaveStyle({ backgroundColor: ColorConfig.ActionPrimaryNormal });

    fireEvent.mouseDown(button);
    // expect(button.getAttribute('status')).toMatch('press');
    expect(button).toHaveStyle({ backgroundColor: ColorConfig.ActionPrimaryActive });

    fireEvent.mouseUp(button);
    // expect(button.getAttribute('status')).toMatch('hover');
    expect(button).toHaveStyle({ backgroundColor: ColorConfig.ActionPrimaryHover });
  });
});
