import { expect, test } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { NewsPage } from '../pages/news.page';
import { CreateNewsFormComponent } from '../components/create-news-form.component';

test.describe('News Creation — Field Validation and Button States', () => {
  // ─────────────────────────────────────────────────────────────────────────────
  // TC-06 — Validation of "Source" field (optional, must be a valid URL)
  // ─────────────────────────────────────────────────────────────────────────────
  test('TC-06 - should validate Source field URL format and Publish button state', async ({ page }) => {
    await allure.epic('GreenCity Web Application');
    await allure.feature('Eco-News Creation');
    await allure.story('Validation of Source field URL format');
    await allure.description(
      'Verify that the "Source" field is optional, that an invalid URL blocks publishing with an error message, ' +
        'and that a valid http(s):// URL enables the Publish button.'
    );

    const newsPage = new NewsPage(page);
    const createNewsForm = new CreateNewsFormComponent(page);

    const sourceErrorMessage = page.locator('span.span.field-info.warning');

    await newsPage.open();
    await newsPage.clickCreateNews();
    await createNewsForm.expectFormOpened();

    // Pre-fill all mandatory fields
    await createNewsForm.fillTitle('Test');
    await createNewsForm.selectNewsTag();
    await createNewsForm.fillContent('This is a valid test content for TC-06 test run');

    // ── Step 2–4: Source field empty — Publish button should be enabled ──────
    await allure.step('Leave Source field empty and verify Publish button is enabled', async () => {
      await createNewsForm.expectPublishButtonToBeEnabled();
      await expect(sourceErrorMessage).not.toBeVisible();
    });

    // ── Step 5–6: Enter invalid URL ──────────────────────────────────────────
    await allure.step('Enter invalid URL "www.example.com" and verify error + disabled Publish button', async () => {
      await createNewsForm.fillSource('www.example.com');
      await createNewsForm.titleInput.focus(); // blur to trigger validation

      await expect(sourceErrorMessage).toBeVisible();
      await expect(sourceErrorMessage).toContainText('Please add the link of original article/news/post');
      await createNewsForm.expectPublishButtonToBeDisabled();
    });

    // ── Step 7–9: Enter valid URL ────────────────────────────────────────────
    await allure.step('Enter valid URL "https://example.com" and verify error disappears + Publish enabled', async () => {
      await createNewsForm.fillSource('https://example.com');
      await createNewsForm.titleInput.focus(); // blur to re-evaluate

      await expect(sourceErrorMessage).not.toBeVisible();
      await createNewsForm.expectPublishButtonToBeEnabled();
    });
  });
});
