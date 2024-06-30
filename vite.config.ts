/// <reference types="vitest" />
/// <reference types="vitest/coverage" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';
import deadFile from 'vite-plugin-deadfile';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig((env) => ({
  plugins: [
    react(),
    env.mode !== 'test' && eslint(),
    deadFile({
      root: 'src',
      exclude: [
        '**/*.test.*',
        '**/*.http',
        'assets/**',
        '**/*.d.ts',
        'theme/**',
      ],
    }),
  ],
  test: {
    globals: true,
    include: ['./src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'jsdom',
    setupFiles: './tests/setuptests.ts',
    reporters: ['default', 'html'],
    outputFile: './tests/vitest-report.html',
    css: true,
    coverage: {
      enabled: true,
      provider: 'istanbul', // or 'v8'
      reportsDirectory: './tests/coverage',
    },
    browser: {
      enabled: false,
      name: 'chrome', // browser name is required
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@models': path.resolve(__dirname, './src/types'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
}));
