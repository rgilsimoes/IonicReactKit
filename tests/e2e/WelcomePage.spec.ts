import { test, expect } from '@playwright/test';

test('skip button jumps to Welcome Page', async ({ page }) => {
  await page.goto('http://localhost:8100/welcome');
  await page.getByRole('button', { name: 'Skip' }).click();
  await expect(page.getByRole('heading')).toContainText('Welcome!');
});
