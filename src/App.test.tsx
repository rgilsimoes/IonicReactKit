import { describe, expect, it } from 'vitest';
import { render } from './utils/TestUtils';
import App from './App';

describe('Render App', () => {
  it('renders without crashing', async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeDefined();
  });
});
