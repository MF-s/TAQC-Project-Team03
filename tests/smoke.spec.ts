import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/base.page';

test('open base page', async ({ page }) => {
  const basePage = new BasePage(page);

  await basePage.open();

  await expect(page).toHaveURL(/greencity/);
});