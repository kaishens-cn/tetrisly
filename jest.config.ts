import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    'styled-components': 'styled-components/dist/styled-components.browser.cjs.js',
  },
};

export default config;
