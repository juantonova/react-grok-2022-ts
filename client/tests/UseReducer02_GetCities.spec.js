import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { constants } from 'node:fs';
import fetch from 'node-fetch';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const testSet = process.env.REACT_APP_TEST_SET ?? 'puzzles';

test.describe('UseReducer02_GetCities', () => {
  test('Code and files', async () => {

    // Получаем весь код из компонента 'UseReducer02_GetCities'
    const code = await fs.readFile(path.join(__dirname, `../src/components/${testSet}/UseReducer02_GetCities/UseReducer02_GetCities.jsx`), 'utf-8');

    // Используется useReducer, а не useState
    expect(code).not.toContain('useState');

    // Используется только один useReducer()
    expect(code.match(/useReducer\(/g).length).toBe(1);

    // Используется только один useReducer()
    expect(code.match(/useEffect\(/g).length).toBe(1);

    // Используется только один fetch()
    expect(code.match(/fetch\(/g).length).toBe(1);

    // Используются типы экшенов: GET_CITIES
    expect(code).toContain('GET_CITIES');

    // Проверка на наличие вспомогательного компонента 'Row'
    const row = fs.access(path.join(__dirname, `../src/components/${testSet}/UseReducer02_GetCities/Row.jsx`), constants.R_OK | constants.W_OK);
    expect(row).resolves.toBeUndefined()
  });

  test('Component', async ({ page }) => {
    await page.goto(`http://localhost:3000/usereducer02`);

    // Определяем заголовки в таблице
    const th = page.locator('#root .table-header');

    // Определяем строки в таблице
    const tr = page.locator('#root .table-row');

    // Определяем количество заголовков в таблице
    await expect(th).toHaveCount(7);

    // Запрашиваем количество городов в БД
    const response = await fetch(`${process.env.REACT_APP_URL}/cities`);
    const citiesCount = await response.json();

    // Сопоставляем количество городов и количество строк
    await expect(tr).toHaveCount(citiesCount.length);
  });
});
