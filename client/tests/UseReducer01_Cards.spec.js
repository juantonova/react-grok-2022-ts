import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const testSet = process.env.REACT_APP_TEST_SET ?? 'puzzles';

test.describe('UseReducer01_Cards', () => {
  test('Code', async () => {
    
    // Получаем весь код из компонента 'UseReducer01_Cards'
    const code = await fs.readFile(path.join(__dirname, `../src/components/${testSet}/UseReducer01_Cards/UseReducer01_Cards.jsx`), 'utf-8');

    // Используется useReducer, а не useState
    expect(code).not.toContain('useState');

    // Используется только один useReducer
    expect(code.match(/useReducer\(/g).length).toBe(1);

    // Используйются типы экшенов NEXT_CARD и NEXT_BACKGROUND
    expect(code).toContain('NEXT_CARD');
    expect(code).toContain('NEXT_BACKGROUND');
  });

  test('Component', async ({ page }) => {
    await page.goto(`http://localhost:3000/usereducer01`);

    const card = page.locator('#root .card');
    const nextCard = page.locator('#next-card');
    const nextBg = page.locator('#next-bg');

    await expect(card).toHaveClass(/bg-primary/);
    await expect(card).toHaveText(/John Doe/);

    await nextCard.click();
    await expect(card).toHaveText(/Homer Simpson/);

    await nextBg.click();
    await expect(card).toHaveClass(/bg-secondary/);

    await nextBg.click();
    await expect(card).toHaveClass(/bg-success/);

    await nextBg.click();
    await expect(card).toHaveClass(/bg-primary/);

    await nextCard.click();
    await expect(card).toHaveText(/Piter Parker/);

    await nextCard.click();
    await expect(card).toHaveText(/John Doe/);
  });
});
