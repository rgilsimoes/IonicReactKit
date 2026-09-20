import { test, expect } from '@playwright/test';

test('skip button opens the main app', async ({ page }) => {
  await page.goto('/welcome');
  await page.getByRole('button', { name: 'Skip' }).click();

  await expect(page).toHaveURL(/\/tabs(?:\/|$)/);
  await expect(page.getByRole('heading')).toContainText('Welcome!');
});
