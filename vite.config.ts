/// <reference types="vitest" />
/// <reference types="vitest/coverage" />
import { createLogger, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';
import deadFile from 'vite-plugin-deadfile';

const logger = createLogger();
const warn = logger.warn;

logger.warn = (message, options) => {
  const isIonicHostContextWarning =
    message.includes('[lightningcss minify]') &&
    message.includes("'host-context' is not recognized");

  if (!isIonicHostContextWarning) {
    warn(message, options);
  }
};

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig((env) => ({
  customLogger: logger,
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
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@hooks': path.resolve(import.meta.dirname, './src/hooks'),
      '@services': path.resolve(import.meta.dirname, './src/services'),
      '@store': path.resolve(import.meta.dirname, './src/store'),
      '@utils': path.resolve(import.meta.dirname, './src/utils'),
      '@models': path.resolve(import.meta.dirname, './src/types'),
      '@assets': path.resolve(import.meta.dirname, './src/assets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
}));
