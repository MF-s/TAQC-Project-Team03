import { test } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { NewsPage } from '../pages/news.page';
import { CreateNewsFormComponent } from '../components/create-news-form.component';

test.describe('Create News Form', () => {
  test('TC1 - should display all create news form fields in correct order', async ({ page }) => {
    await allure.epic('GreenCity Web Application');
    await allure.feature('Eco-News creation');
    await allure.story('Validation of form structure and field order');
    await allure.description('Verification of all required elements of the news creation form and their correct visual arrangement.');

    const newsPage = new NewsPage(page);
    const createNewsForm = new CreateNewsFormComponent(page);

    await newsPage.open();
    await newsPage.clickCreateNews();

    await createNewsForm.expectFormOpened();
    await createNewsForm.expectAllFieldsVisible();
    await createNewsForm.expectTitleCounter();
    await createNewsForm.expectAllTagsVisible();
    await createNewsForm.expectOnlyThreeTagsCanBeSelected();
    await createNewsForm.expectSourcePlaceholder();
    await createNewsForm.expectAuthorReadonly();
    await createNewsForm.expectDateReadonly();
    await createNewsForm.expectButtons();
    await createNewsForm.expectCorrectFieldsOrder();
  });
});