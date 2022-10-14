import { test, expect } from '@playwright/test';

test('UseState04_Props', async ({ page }) => {
  await page.goto('http://localhost:3000/useState04');

  const card = page.locator('.card');
  const btn = page.locator('.card .btn');
  const cardTitle = page.locator('.card-title');
  const cardText = page.locator('.card-text');

  await expect(cardTitle).toHaveText('Name: Linus Torvalds');
  await expect(cardText).toHaveText('Date of Birth: 28.12.1969');
  await expect(btn).toHaveText('Hide card');

  // click
  page.click('.btn', { delay: 1000 });

  // after click
  await expect(card).toBeHidden();
});
