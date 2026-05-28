import { test } from '@playwright/test';

import { NewsPage } from '../pages/news.page';

import { CreateNewsFormComponent } from '../components/create-news-form.component';

test.describe('Create News Form', () => {
  test(
    'TC1 - should display all create news form fields in correct order',
    async ({ page }) => {
      const newsPage = new NewsPage(page);

      const createNewsForm =
        new CreateNewsFormComponent(page);

      // 1. Open GreenCity News
      await newsPage.open();

      // 2. User already logged in via storageState

      // 3. Click Create News
      await newsPage.clickCreateNews();

      // 4. Verify form opened
      await createNewsForm.expectFormOpened();

      // Verify all fields
      await createNewsForm.expectAllFieldsVisible();

      // Verify title counter
      await createNewsForm.expectTitleCounter();

      // Verify tags
      await createNewsForm.expectAllTagsVisible();

      // Verify only 3 tags can be selected
      await createNewsForm.expectOnlyThreeTagsCanBeSelected();

      // Verify source placeholder
      await createNewsForm.expectSourcePlaceholder();

      // Verify readonly sections
      await createNewsForm.expectAuthorReadonly();

      await createNewsForm.expectDateReadonly();

      // Verify buttons
      await createNewsForm.expectButtons();

      // Verify order
      await createNewsForm.expectCorrectFieldsOrder();
    },
  );
});