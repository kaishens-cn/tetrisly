import { render } from '@testing-library/react';
import React from 'react';

import { Icon } from '../../src';
import iconData from './icon.json';

describe('Icon', () => {
  const iconList = Object.keys(Icon);
  for (const name of iconList) {
    const IconItem = (Icon as any)[name];
    test(`Icon ${name} Render`, () => {
      const { baseElement } = render(<IconItem />);
      expect(baseElement).toMatchInlineSnapshot(`
        <body>
          <div>
            <svg
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="${(iconData as any)[name]}"
                fill="#272E35"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </body>
      `);
    });

    test(`Icon ${name} Change Size`, () => {
      const { baseElement } = render(<IconItem width={200} height={200} />);
      expect(baseElement).toMatchInlineSnapshot(`
        <body>
          <div>
            <svg
              fill="none"
              height="200"
              viewBox="0 0 20 20"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="${(iconData as any)[name]}"
                fill="#272E35"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </body>
      `);
    });

    test(`Icon ${name} Change Color`, () => {
      const { baseElement } = render(<IconItem fill="#0079fe" />);
      expect(baseElement).toMatchInlineSnapshot(`
        <body>
          <div>
            <svg
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="${(iconData as any)[name]}"
                fill="#0079fe"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </body>
      `);
    });
  }
});
