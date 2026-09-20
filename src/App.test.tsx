import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Render App', () => {
  it('renders the welcome route', async () => {
    render(<App />);

    expect(
      await screen.findByRole('heading', {
        name: 'Welcome to Ionic React Starter Kit',
      }),
    ).toBeInTheDocument();
  });
});
