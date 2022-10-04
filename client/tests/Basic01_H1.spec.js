import { test, expect } from '@playwright/test';

test('Basic01_H1', async ({ page }) => {
  await page.goto('http://localhost:3000/basic01');

  const header = page.locator('#root .header');

  await expect(header).toHaveText('React it\'s easy!');
});