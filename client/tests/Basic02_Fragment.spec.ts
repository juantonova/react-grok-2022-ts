import { test, expect } from '@playwright/test';

test('Basic02_Fragment', async ({ page }) => {
  await page.goto('http://localhost:3000/basic02');

  const h1 = page.locator('.h1');
  const h2 = page.locator('.h2');

  await expect(h1).toHaveClass('h1');
  await expect(h2).toHaveClass('h2');

  await expect(h1).toHaveText('Really!');
  await expect(h2).toHaveText("React it's easy!");
});
