import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));
const testSet = process.env.REACT_APP_TEST_SET ?? 'puzzles';

test.describe('UseReducer05_Pagination', () => {
  test('Code', async () => {
    const code = await fs.readFile(
      path.join(
        __dirname,
        `../src/${testSet}/UseReducer05_Pagination/UseReducer05_Pagination.tsx`
      ),
      'utf-8'
    );

    // Используется useReducer, а не useState
    expect(code).not.toContain('useState');

    // Используется только один useReducer
    expect(code.match(/useReducer\(/g)?.length).toBe(1);

    // Используются типы экшенов: GET_CITIES, SET_PAGE, SET_PAGE_SIZE
    expect(code).toContain('GET_CITIES');
    expect(code).toContain('SET_PAGE');
    expect(code).toContain('SET_PAGE_SIZE');
  });

  test('Component', async ({ page }) => {
    await page.goto('http://localhost:3000/usereducer05');

    const cities = page.locator('.cities');
    const pagination = page.locator('.pagination');
    const pageSize = page.locator('.page-size');

    await expect(cities).toHaveText(/Moscow/);
    await expect(cities).toHaveText(/London/);
    await expect(cities).toHaveText(/Paris/);
    await expect(cities).toHaveText(/New York/);
    await expect(cities).toHaveText(/Tokyo/);

    await expect(pagination).toHaveText(/1/);
    await expect(pagination).toHaveText(/2/);
    await expect(pagination).toHaveText(/3/);

    await expect(pageSize).toHaveText(/5/);
    await expect(pageSize).toHaveText(/10/);
    await expect(pageSize).toHaveText(/15/);
  });
});
