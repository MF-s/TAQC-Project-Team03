import { Locator, Page } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { BasePage } from './base.page';

export class NewsPage extends BasePage {
  readonly createNewsButton: Locator;

  constructor(page: Page) {
    super(page);
    this.createNewsButton = page.locator('span', { hasText: 'Create news' });
  }

  async open(): Promise<void> {
    await allure.step('Open the GreenCity News page', async () => {
      await super.open('/news');
    });
  }

  async clickCreateNews(): Promise<void> {
    await allure.step('Click the "Create news" button', async () => {
      await this.createNewsButton.click();
    });
  }
}