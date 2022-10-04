import { test, expect } from '@playwright/test';

test('Basic03_ElbrusColor', async ({ page }) => {
  await page.goto('http://localhost:3000/basic03');

  const section = page.locator('#root .section');
  const h1 = page.locator('#root .h1');

  await expect(section).toHaveClass('section');
  await expect(h1).toHaveClass('h1');

  await expect(section).toHaveCSS('background-color', 'rgb(69, 32, 171)');
  await expect(section).toHaveCSS('color', 'rgb(255, 188, 91)');
  await expect(h1).toHaveText('It always seems impossible until it\'s done');
  
  await expect(section).not.toHaveAttribute('style', /color/);
});