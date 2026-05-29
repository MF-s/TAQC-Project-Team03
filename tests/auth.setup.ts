import { test as setup, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { env } from '../utils/env';
import { HeaderComponent } from '../components/header.component';
import { LoginModalComponent } from '../components/login-modal.component';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await allure.step('Global authentication of the user and saving the session state', async () => {
    await page.goto(`${env.BASE_URL}/#/greenCity`);

    const header = new HeaderComponent(page);
    const loginModal = new LoginModalComponent(page);

    await header.clickSignIn();

    await loginModal.login(
      env.USER_EMAIL,
      env.USER_PASSWORD,
    );

    await expect(page).toHaveURL(/profile/);

    await page.context().storageState({
      path: authFile,
    });
  });
});