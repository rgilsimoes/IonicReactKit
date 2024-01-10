/* eslint-disable @typescript-eslint/no-explicit-any */
import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';

/**
 * runs a cleanup after each test case (e.g. clearing jsdom)
 */
afterEach(() => {
  cleanup();
});

/**
 * Generates a custom render for a React element with optional options.
 *
 * @param React.ReactElement ui - The React element to render.
 * @param object options - Optional options for rendering.
 * @param function options.wrapper - Optional wrapper function for the provider(s).
 * @return any The result of rendering the React element.
 */
const customRender = (ui: React.ReactElement, options = {}): any =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
