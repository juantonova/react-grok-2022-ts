import { test, expect } from '@playwright/test';

test('UseState05_Modal', async ({ page }) => {
  await page.goto('http://localhost:3000/useState05');

  const openBtn = page.locator('.btn-success');
  const modal = page.locator('.modal');

  await expect(openBtn).toHaveText('Open Modal');

  // click
  page.click('.btn', { delay: 1000 });

  // after click
  await expect(openBtn).toBeHidden();

  // click
  page.click('.btn-close', { delay: 1000 });

  await expect(openBtn).toBeVisible();
  await expect(modal).toBeHidden();
});
