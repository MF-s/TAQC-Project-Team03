import dotenv from 'dotenv';
dotenv.config();
import { defineConfig, devices } from '@playwright/test';
import { env } from './utils/env';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : env.RETRIES,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  use: {
    baseURL: env.BASE_URL,
    headless: process.env.CI ? true : env.HEADLESS,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',

    viewport: { width: 1920, height: 1080 },
  },

  timeout: env.TIMEOUT,

  projects: [
  {
    name: 'setup',
    testMatch: /.*\.setup\.ts/,
  },

  {
    name: 'chromium',

    use: {
      ...devices['Desktop Chrome'],

      storageState: 'playwright/.auth/user.json',
    },

    dependencies: ['setup'],
  },
],
});