import { expect, test } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { NewsPage } from '../pages/news.page';
import { CreateNewsFormComponent } from '../components/create-news-form.component';

test.describe('News Creation — Cancel Functionality', () => {
  test('TC-07 - should trigger confirmation modal and handle Cancel/Continue actions', async ({ page }) => {
    await allure.epic('GreenCity Web Application');
    await allure.feature('Eco-News Creation');
    await allure.story('Cancel button confirmation modal');
    await allure.description(
      'Verify that clicking the "Cancel" button triggers a confirmation modal. ' +
      'Check that "Yes, cancel" redirects to the news page, while "Continue editing" keeps the form data.'
    );

    const createNewsForm = new CreateNewsFormComponent(page);

    const modalMessage = page.locator('.warning-title');
    const modalQuestion = page.locator('.warning-subtitle');
    const yesCancelButton = page.getByRole('button', { name: 'Yes, cancel' });
    const continueEditingButton = page.getByRole('button', { name: 'Continue editing' });
    const cancelButton = page.locator('button.tertiary-global-button').filter({ hasText: /^Cancel$/ });

    const title = 'Test Title';
    const content = 'Test content with 20 chars';

    // ── Precondition: Open the Create News form ───────────────────────────
    await page.goto(`${process.env.BASE_URL}/#/greenCity/news/create-news`);
    await createNewsForm.expectFormOpened();
    await createNewsForm.fillTitle(title);
    await createNewsForm.fillContent(content);

    // ── Step 1: Click Cancel → verify modal ──────────────────────────────
    await allure.step('Click Cancel and verify confirmation modal appearance', async () => {
      await cancelButton.click();
      await expect(modalMessage).toBeVisible();
      await expect(modalQuestion).toBeVisible();
    });

    // ── Step 2: Click "Yes, cancel" → verify redirect ─────────────────────
    await allure.step('Click "Yes, cancel" and verify redirect to news page', async () => {
      await yesCancelButton.click();
      await expect(page).toHaveURL(/.*news/);
      await expect(createNewsForm.titleInput).not.toBeVisible();
    });

    // ── Step 3: Re-open form → fill → Cancel → "Continue editing" ─────────
    await allure.step('Re-open form, click Cancel, then "Continue editing"', async () => {
      await page.goto(`${process.env.BASE_URL}/#/greenCity/news/create-news`);
      await createNewsForm.expectFormOpened();
      await createNewsForm.fillTitle(title);
      await createNewsForm.fillContent(content);
      await cancelButton.click();
      await continueEditingButton.click();
      await expect(modalMessage).not.toBeVisible();
      await expect(createNewsForm.titleInput).toHaveValue(title);
    });
  });
});