import { render, screen } from '@testing-library/react';
import React from 'react';

import { Test } from '../src';

describe('test', () => {
  test('equal 889', () => {
    const { baseElement } = render(<Test content="889" />);
    console.log(baseElement);
    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div>
            889
          </div>
        </div>
      </body>
    `);
  });
});
