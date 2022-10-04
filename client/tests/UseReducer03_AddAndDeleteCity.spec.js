import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const testSet = process.env.REACT_APP_TEST_SET ?? 'puzzles';

test.describe('UseReducer03_AddAndDeleteCity', () => {
  test('Code', async () => {
    const code = await fs.readFile(path.join(__dirname, `../src/components/${testSet}/UseReducer03_AddAndDeleteCity/UseReducer03_AddAndDeleteCity.jsx`), 'utf-8');

    // Используется useReducer, а не useState
    expect(code).not.toContain('useState');

    // Используется только один useReducer
    expect(code.match(/useReducer\(/g).length).toBe(1);

    // Используются типы экшенов: GET_CITIES, ADD_CITY, DELETE_CITY, SHOW_MODAL, HIDE_MODAL
    expect(code).toContain('GET_CITIES');
    expect(code).toContain('ADD_CITY');
    expect(code).toContain('DELETE_CITY');
    expect(code).toContain('SHOW_MODAL');
    expect(code).toContain('HIDE_MODAL');
  });
});
