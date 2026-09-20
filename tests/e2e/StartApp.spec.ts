import { expect, test } from '@playwright/test';

test.describe('Welcome screen', () => {
  test('shows the welcome title and skip action', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('ion-title')).toContainText('Welcome');
    await expect(page.getByRole('button', { name: 'Skip' })).toBeVisible();
  });
});
