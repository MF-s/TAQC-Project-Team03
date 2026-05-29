import { Page } from '@playwright/test';

import { env } from '../utils/env';

export class BasePage {
  protected page: Page;

  protected readonly greenCityPath = '/#/greenCity';

  constructor(page: Page) {
    this.page = page;
  }

  async open(path: string = ''): Promise<void> {
    await this.page.goto(
      `${env.BASE_URL}${this.greenCityPath}${path}`,
    );
  }
}