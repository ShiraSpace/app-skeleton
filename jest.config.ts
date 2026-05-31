import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.test.ts',
    '**/__tests__/**/*.test.tsx',
    '**/src/components/**/*.test.tsx',
    '**/src/components/**/*.test.ts',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};

export default createJestConfig(config);
