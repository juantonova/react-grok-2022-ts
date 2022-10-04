import { test, expect } from '@playwright/test';

test('Basic04_List', async ({ page }) => {
  await page.goto('http://localhost:3000/basic04');

  const list = page.locator('#root .list-item');

  await expect(list).toHaveCount(5);
});