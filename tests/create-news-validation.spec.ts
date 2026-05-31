import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { NewsPage } from '../pages/news.page';
import { CreateNewsFormComponent } from '../components/create-news-form.component';

test.describe('News Creation — Field Validation and Button States', () => {
  
  test.skip('TC2 - should validate Title field limits and Publish button states', async ({ page }) => {
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

    // Заповнення решта обов'язкових полів для активації кнопки
    await createNewsForm.selectNewsTag();
    await createNewsForm.fillContent('This is a valid test content with 25 chars');
    await createNewsForm.expectPublishButtonToBeEnabled();
  });

  // ТС-3
  test('TC3 - Verify that the user can select between 1 and 3 tags from the predefined list', async ({ page }) => {
    await allure.epic('GreenCity Web Application');
    await allure.feature('Eco-News Creation');
    await allure.story('Validation of Tag Selection Limits');
    await allure.description('Verify that the user can select between 1 and 3 tags from the predefined list and that selecting a fourth tag is blocked.');

    const newsPage = new NewsPage(page);
    const createNewsForm = new CreateNewsFormComponent(page);

    await newsPage.open();
    await newsPage.clickCreateNews();
    await createNewsForm.expectFormOpened();

    // Один тег
    await test.step('Step 2-5: Select single tag (News) and publish', async () => {
      await createNewsForm.selectNewsTag();
      await createNewsForm.fillTitle('Autotest Title 1 Tag');
      await createNewsForm.fillContent('This text contains more than twenty characters.');
      await createNewsForm.expectPublishButtonToBeEnabled();
      await createNewsForm.clickPublish();
    });

    // Три теги
    await test.step('Step 6-9: Open form again and select three tags', async () => {
      await newsPage.open();
      await newsPage.clickCreateNews();
      await createNewsForm.selectTags(['News', 'Events', 'Education']);
      await createNewsForm.fillTitle('Autotest Title 3 Tags');
      await createNewsForm.fillContent('This text contains more than twenty characters.');
      await createNewsForm.expectPublishButtonToBeEnabled();
      await createNewsForm.clickPublish();
    });

    // Блокування 4-го тегу
    await test.step('Step 10-11: Attempt to select a fourth tag and verify it is blocked', async () => {
      await newsPage.open();
      await newsPage.clickCreateNews();
      await createNewsForm.expectOnlyThreeTagsCanBeSelected();
    });
  });

  // ТС-4 
  test('TC4 - Verify the validation of the "Upload Image" field', async ({ page }) => {
    await allure.epic('GreenCity Web Application');
    await allure.feature('Eco-News Creation');
    await allure.story('Validation of Upload Image field');
    await allure.description('Verify that only PNG/JPG formats up to 10MB are accepted, and other formats or sizes cause error messages.');

    const fs = require('fs');
    const path = require('path');

    const validPngPath = path.join(__dirname, 'valid_image.png');
    const invalidGifPath = path.join(__dirname, 'invalid_format.gif');
    const hugeJpgPath = path.join(__dirname, 'huge_image.jpg');

    fs.writeFileSync(validPngPath, Buffer.alloc(5 * 1024 * 1024));
    fs.writeFileSync(invalidGifPath, Buffer.alloc(1 * 1024 * 1024));
    fs.writeFileSync(hugeJpgPath, Buffer.alloc(15 * 1024 * 1024));

    const newsPage = new NewsPage(page);
    const createNewsForm = new CreateNewsFormComponent(page);

    await newsPage.open();
    await newsPage.clickCreateNews();
    await createNewsForm.expectFormOpened();

try {
      //1 Валідний PNG (5MB) 
      await test.step('Step 2-3: Upload a valid PNG file (5MB) and verify success', async () => {
        await createNewsForm.uploadImage(validPngPath);
        await expect(page.getByText('Завантажуйте лише PNG або JPEG')).toBeHidden();
      });

      // 2 Невалідний формат GIF (1MB) 
      await test.step('Step 4-5: Upload a GIF file (1MB) and verify error message', async () => {
        await page.reload();
        await createNewsForm.expectFormOpened();

        await createNewsForm.uploadImage(invalidGifPath);
        await expect(page.locator('form')).toContainText('Upload only PNG or JPG');
      });

      //3 Завеликий JPEG (15MB)
      await test.step('Step 6-7: Upload a JPEG file (15MB) and verify error message', async () => {
        await page.reload();
        await createNewsForm.expectFormOpened();

        await createNewsForm.uploadImage(hugeJpgPath);
        await expect(page.locator('form')).toContainText('Upload only PNG or JPG');
      });

    } finally {
      if (fs.existsSync(validPngPath)) fs.unlinkSync(validPngPath);
      if (fs.existsSync(invalidGifPath)) fs.unlinkSync(invalidGifPath);
      if (fs.existsSync(hugeJpgPath)) fs.unlinkSync(hugeJpgPath);
    }
  });

});