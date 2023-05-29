import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:8101/");
});
