import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { NewsPage } from '../pages/news.page';
import { CreateNewsFormComponent } from '../components/create-news-form.component';
import { NewsPreviewComponent } from '../components/news-preview.component';

test.describe('News Creation — Preview Mode Verification', () => {

  test('TC8 - Verify that the user can preview news content after entering valid data', async ({ page }) => {
    await allure.epic('GreenCity Web Application');
    await allure.feature('Eco-News Creation');
    await allure.story('Preview Mode Match Input');
    await allure.description('Verify that the preview mode displays the entered Title, Main Text, current date, and correct author name.');

    const newsPage = new NewsPage(page);
    const createNewsForm = new CreateNewsFormComponent(page);
    const newsPreview = new NewsPreviewComponent(page);

    // Дані для тесту
    const testTitle = 'Autotest Preview ' + Math.floor(Math.random() * 1000);
    const testContent = 'This is a valid test preview content with more than twenty characters.';
    const expectedAuthor = 'Max';

    // Динамічно отримуємо сьогоднішню дату
    const currentDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    // 1 Відкриваємо форму створення новини
    await newsPage.open();
    await newsPage.clickCreateNews();
    await createNewsForm.expectFormOpened();

    // 2 Заповнюємо обов'язкові поля
    await createNewsForm.selectNewsTag(); 
    await createNewsForm.fillTitle(testTitle);
    await createNewsForm.fillContent(testContent);

    // 3 Переходимо в режим Preview
    await page.locator('.preview-button, button:has-text("Preview"), [type="button"]:has-text("Preview")').click();

    // 4 Перевіряємо дані в режимі прев'ю за допомогою нашого нового компонента
    await newsPreview.expectPreviewData(testTitle, testContent, expectedAuthor, currentDate);

    // 5 Повертаємося назад і перевіряємо, що дані на формі залишилися
    await newsPreview.clickBackToEditing(); 
    await page.waitForTimeout(2000);
    
    await expect(createNewsForm.titleInput).toBeVisible({ timeout: 10000 });
    
  });

});
