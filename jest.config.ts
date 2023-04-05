import type { Config } from 'jest';
import '@testing-library/react';

const config: Config = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: 'jsdom',
  rootDir: './src',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
};

export default config;