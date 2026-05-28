import { Locator, Page } from '@playwright/test';

import { BasePage } from './base.page';

export class NewsPage extends BasePage {
  readonly createNewsButton: Locator;

  constructor(page: Page) {
    super(page);

    this.createNewsButton = page.locator(
      'span',
      {
        hasText: 'Create news',
      },
    );
  }

  async open(): Promise<void> {
    await super.open('/news');
  }

  async clickCreateNews(): Promise<void> {
    await this.createNewsButton.click();
  }
}