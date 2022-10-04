import { test, expect } from '@playwright/test';

test('UseState02_Toggle', async ({ page }) => {
  await page.goto('http://localhost:3000/useState02');

  const div = page.locator('#root .circle');

  // before click
  await expect(div).toHaveCSS('background-color', 'rgb(255, 255, 0)');
  await expect(div).toHaveCSS('cursor', 'pointer');
  await expect(div).toHaveCSS('border-radius', '50%');

  // click
  page.click('#root .circle', { delay: 1000 })

  // after click
  await expect(div).toHaveCSS('background-color', 'rgb(0, 128, 0)');

  // click
  page.click('#root .circle', { delay: 1000 })

  // after click
  await expect(div).toHaveCSS('background-color', 'rgb(255, 255, 0)');
});