import { Locator, Page, expect } from '@playwright/test';
import { BaseComponent } from './base.component';
import * as allure from 'allure-js-commons';

export class NewsPreviewComponent extends BaseComponent {
  // Оголошуємо елементи сторінки прев'ю
  readonly previewTitle: Locator;
  readonly previewDate: Locator;
  readonly previewAuthor: Locator;
  readonly previewContent: Locator;
  readonly backToEditingButton: Locator;

  constructor(page: Page) {
    // Головний контейнер
    super(page, page.locator('.create-news-container, .preview-container, app-create-news')); 

    this.previewTitle = page.locator('.news-title');
    this.previewDate = page.locator('.news-info-date');
    this.previewAuthor = page.locator('.news-info-author');
    this.previewContent = page.locator('.news-text-content');
    this.backToEditingButton = page.locator('a.button-link[href*="create-news"]');
  }

  async expectPreviewData(expectedTitle: string, expectedContent: string, expectedAuthor: string, expectedDate: string) {
    await allure.step('Verify that all elements in Preview mode display correctly', async () => {
      await expect(this.previewTitle).toHaveText(expectedTitle);
      await expect(this.previewContent).toContainText(expectedContent);
      await expect(this.previewAuthor).toContainText(expectedAuthor);
      await expect(this.previewDate).toHaveText(expectedDate);
    });
  }

    async clickBackToEditing() {
    await allure.step('Click "Back to editing" button via JS execution', async () => {
      await this.backToEditingButton.waitFor({ state: 'attached' });
      await this.backToEditingButton.evaluate((element: HTMLElement) => element.click());
    });
  }
}