import test, {
  Browser,
  BrowserContext,
  chromium,
  expect,
  Page,
} from '@playwright/test';

test.describe('playwright meets vitest', () => {
  let page: Page;
  let browser: Browser;
  let context: BrowserContext;
  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('has welcome title', async () => {
    await page.goto('/');
    // Expect a title "to contain" a substring.
    const title = page.locator('ion-title');
    await expect(title).toContainText('Welcome');
  });

  test('get skip link', async () => {
    await page.goto('/welcome');
    // Click the skip link.
    await page.getByRole('button', { name: 'Skip' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*tabs/);
  });
});
