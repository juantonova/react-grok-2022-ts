import { test, expect } from '@playwright/test';

test('UseState04_Props', async ({ page }) => {
  await page.goto('http://localhost:3000/useState04');

  const card = page.locator('#root .card');
  const btn = page.locator('#root .card .btn')
  const cardTitle = page.locator('#root .card-title')
  const cardText = page.locator('#root .card-text')

  await expect(cardTitle).toHaveText('Name: Linus Torvalds');
  await expect(cardText).toHaveText('Date of Birth: 28.12.1969');
  await expect(btn).toHaveText('Hide card');

  // click
  page.click('#root .btn', { delay: 1000 })

  // after click
  await expect(card).toBeHidden();
});