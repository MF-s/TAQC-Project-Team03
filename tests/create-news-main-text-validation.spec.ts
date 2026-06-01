import { expect, test } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { NewsPage } from '../pages/news.page';
import { CreateNewsFormComponent } from '../components/create-news-form.component';

test.describe('News Creation — Field Validation and Button States', () => {
  // ─────────────────────────────────────────────────────────────────────────────
  // TC-05 — Validation of "Main Text" field (min 20 / max 63,206 characters)
  // ─────────────────────────────────────────────────────────────────────────────
  test('TC-05 - should validate Main Text field min/max limits and Publish button state', async ({ page }) => {
    await allure.epic('GreenCity Web Application');
    await allure.feature('Eco-News Creation');
    await allure.story('Validation of Main Text field character limits');
    await allure.description(
      'Verify that the "Main Text" field enforces a minimum of 20 and a maximum of 63,206 characters. ' +
        'The Publish button must remain disabled when the text is too short or too long.'
    );

    const newsPage = new NewsPage(page);
    const createNewsForm = new CreateNewsFormComponent(page);

    const contentErrorMessage = page.locator('p.quill-counter.warning');

    await newsPage.open();
    await newsPage.clickCreateNews();
    await createNewsForm.expectFormOpened();

    // Pre-fill mandatory fields so only Main Text blocks publishing
    await createNewsForm.fillTitle('Test');
    await createNewsForm.selectNewsTag();

    // ── Step 2–5: Enter 10 chars (below min 20) ─────────────────────────────
    await allure.step('Enter 10 characters in Main Text and verify error + disabled Publish button', async () => {
      await createNewsForm.fillContent('Short text');
      await createNewsForm.titleInput.focus(); // blur to trigger validation

      await expect(contentErrorMessage).toBeVisible();
      await expect(contentErrorMessage).toContainText(/Not enough characters|minimum of 20/i);
      await createNewsForm.expectPublishButtonToBeDisabled();
    });

    // ── Step 6–7: Enter 63,207 chars — site shows over-limit error ──────────
    await allure.step('Enter 63,207 characters and verify over-limit error appears and Publish is disabled', async () => {
      await createNewsForm.fillContent('A'.repeat(63_207));
      await createNewsForm.titleInput.focus(); // blur to trigger validation

      await expect(contentErrorMessage).toBeVisible();
      await expect(contentErrorMessage).toContainText(/maximum character|greater than/i);
      await createNewsForm.expectPublishButtonToBeDisabled();
    });

    // ── Step 8–11: Enter 25 chars (valid range) — Publish should be enabled ─
    await allure.step('Enter 25 valid characters, verify error disappears and Publish is enabled', async () => {
      await createNewsForm.fillContent('This is a valid test content');
      await createNewsForm.titleInput.focus(); // blur to trigger validation

      await expect(contentErrorMessage).not.toBeVisible();
      await createNewsForm.expectPublishButtonToBeEnabled();
    });
  });
});
