import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
};

export default config;
