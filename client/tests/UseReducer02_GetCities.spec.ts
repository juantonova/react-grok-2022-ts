import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { constants } from 'node:fs';
import fetch from 'node-fetch';
// import City from '../src/answers/UseReducer02_GetCities/types/City';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const testSet = process.env.REACT_APP_TEST_SET ?? 'puzzles';

test.describe('UseReducer02_GetCities', () => {
  test('Code and files', async () => {
    // Получаем весь код из компонента 'UseReducer02_GetCities'
    const code = await fs.readFile(
      path.join(
        __dirname,
        `../src/${testSet}/UseReducer02_GetCities/UseReducer02_GetCities.tsx`
      ),
      'utf-8'
    );

    // Используется useReducer, а не useState
    expect(code).not.toContain('useState');

    // Используется только один useReducer()
    expect(code.match(/useReducer\(/g)?.length).toBe(1);

    // Используется только один useReducer()
    expect(code.match(/useEffect\(/g)?.length).toBe(1);

    // Используется только один fetch()
    expect(code.match(/fetch\(/g)?.length).toBe(1);

    // Используются типы экшенов: GET_CITIES
    expect(code).toContain('GET_CITIES');

    // Проверка на наличие вспомогательного компонента 'Row'
    const row = fs.access(
      path.join(__dirname, `../src/${testSet}/UseReducer02_GetCities/Row.tsx`),
      // eslint-disable-next-line no-bitwise
      constants.R_OK | constants.W_OK
    );
    await expect(row).resolves.toBeUndefined();
  });

  test('Component', async ({ page }) => {
    await page.goto('http://localhost:3000/usereducer02');

    // Запрашиваем количество городов в БД
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/cities`);
    const cities = (await response.json()) as any[];

    // Определяем заголовки в таблице
    const th = page.locator('thead th');

    // Определяем количество заголовков в таблице
    await expect(th).toHaveCount(6);

    // Определяем строки в таблице
    const tr = page.locator('tbody tr');

    // Сопоставляем количество городов и количество строк
    await expect(tr).toHaveCount(cities.length);

    // Ищем названия всех городов в таблице
    const cityNames = await page.locator('td.city-name').allInnerTexts();

    // Сопоставляем названия городов в таблице и в БД
    expect(cityNames).toEqual(cities.map((city) => city.title));
  });
});
