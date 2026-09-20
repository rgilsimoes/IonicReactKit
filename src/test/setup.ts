/// <reference types="vitest/jsdom" />
import '@testing-library/jest-dom/vitest';

type JSDOMErrorDetails = {
  cause?: unknown;
  type?: string;
};

jsdom.virtualConsole.removeAllListeners('jsdomError');
jsdom.virtualConsole.on('jsdomError', (error: Error): void => {
  const { cause, type } = error as Error & JSDOMErrorDetails;

  if (type === 'css-parsing') {
    return;
  }

  console.error(
    type === 'unhandled-exception'
      ? (cause instanceof Error ? cause.stack : undefined) ?? error.message
      : error.message,
  );
});

window.matchMedia ??= (query: string): MediaQueryList => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: (): void => undefined,
  removeListener: (): void => undefined,
  addEventListener: (): void => undefined,
  removeEventListener: (): void => undefined,
  dispatchEvent: (): boolean => false,
});
