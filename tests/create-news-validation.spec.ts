import { test } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { NewsPage } from '../pages/news.page';
import { CreateNewsFormComponent } from '../components/create-news-form.component';

test.describe('News Creation — Field Validation and Button States', () => {
  test('TC2 - should validate Title field limits and Publish button states', async ({ page }) => {
    await allure.epic('GreenCity Web Application');
    await allure.feature('Eco-News Creation');
    await allure.story('Validation of Title field limits and Publish button states');
    await allure.description('Verification of boundary values for the title length, highlighting validation errors in the UI, and enabling the publish button only after filling out the required fields.');

    const newsPage = new NewsPage(page);
    const createNewsForm = new CreateNewsFormComponent(page);

    await newsPage.open();
    await newsPage.clickCreateNews();
    await createNewsForm.expectFormOpened();

    // Перевірка порожнього значення (on blur)
    await createNewsForm.titleInput.focus();
    await createNewsForm.contentEditor.focus(); 
    await createNewsForm.expectTitleBorderToBeRed();
    await createNewsForm.expectPublishButtonToBeDisabled();
    await createNewsForm.expectTitleCounterText('0/170');

    // Перевірка перевищення ліміту символів
    await createNewsForm.fillTitle('A'.repeat(171));
    await createNewsForm.expectTitleValue('A'.repeat(170));
    await createNewsForm.expectTitleCounterToBeRed();

    // Перевірка введення валідного заголовка
    await createNewsForm.fillTitle('Test News');
    await createNewsForm.expectTitleCounterText('9/170');
    await createNewsForm.expectTitleBorderNotToBeRed();
    await createNewsForm.expectPublishButtonToBeDisabled();

    // Заповнення решти обов'язкових полів для активації кнопки
    await createNewsForm.selectNewsTag();
    await createNewsForm.fillContent('This is a valid test content with 25 chars');
    await createNewsForm.expectPublishButtonToBeEnabled();
  });
});