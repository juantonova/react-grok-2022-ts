import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const testSet = process.env.REACT_APP_TEST_SET ?? 'puzzles';

test('Code', async () => {
  const css = await fs.readFile(path.join(__dirname, `../src/components/${testSet}/Basic05_Image/Basic05_Image.css`), 'utf-8');

  expect(css).toContain('@keyframes');
})

test('Basic05_Image', async ({ page }) => {
  await page.goto('http://localhost:3000/basic05');

  const wrap = page.locator('#root .wrap-image');
  const img = page.locator('#root .logo');

  await expect(wrap).toHaveClass(/wrap-image/);
  await expect(img).toHaveClass(/logo/);

  await expect(wrap).toHaveCSS('display', 'flex');
  await expect(wrap).toHaveCSS('justify-content', 'center');
  await expect(wrap).toHaveCSS('align-items', 'center');
});