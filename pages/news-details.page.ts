import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class NewsDetailsPage extends BasePage {
  // Описати кнопку "Edit news" та поля вже створеної новини
  
  constructor(page: Page) {
    super(page);
  }
  
  // Метод для відкриття конкретної новини за її id (знадобиться для ТС10)
  async openWithId(id: string): Promise<void> {
    await this.page.goto(`${this.greenCityPath}/news/${id}`);
  }
}