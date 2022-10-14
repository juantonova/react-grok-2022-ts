import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));
const testSet = process.env.REACT_APP_TEST_SET ?? 'puzzles';

test.describe('UseReducer04_UpdateAndSortCities', () => {
  test('Code', async () => {
    // Получаем весь код из компонента 'UseReducer04_UpdateAndSortCities'
    const code = await fs.readFile(
      path.join(
        __dirname,
        `../src/${testSet}/UseReducer04_UpdateAndSortCities/UseReducer04_UpdateAndSortCities.tsx`
      ),
      'utf-8'
    );

    // Используется useReducer, а не useState
    expect(code).not.toContain('useState');

    // Используется только один useReducer
    expect(code.match(/useReducer\(/g)?.length).toBe(1);

    // Используется тип экшена UPDATE_CITIES
    expect(code).toContain('UPDATE_CITIES');

    // Используется тип экшена SORT_CITIES
    expect(code).toContain('SORT_CITIES');
  });

  test('Component', async ({ page }) => {
    await page.goto('http://localhost:3000/usereducer04');

    const cities = page.locator('.cities');
    const update = page.locator('#update');
    const sort = page.locator('#sort');

    await expect(cities).toHaveText(/Moscow/);
    await expect(cities).toHaveText(/London/);
    await expect(cities).toHaveText(/Paris/);

    await update.click();
    await expect(cities).toHaveText(/Moscow/);
    await expect(cities).toHaveText(/London/);
    await expect(cities).toHaveText(/Paris/);
    await expect(cities).toHaveText(/New York/);
    await expect(cities).toHaveText(/Tokyo/);

    await sort.click();
    await expect(cities).toHaveText(/London/);
    await expect(cities).toHaveText(/Moscow/);
    await expect(cities).toHaveText(/New York/);
    await expect(cities).toHaveText(/Paris/);
    await expect(cities).toHaveText(/Tokyo/);
  });
});
