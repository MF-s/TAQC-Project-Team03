import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base.component';

export class NewsPreviewComponent extends BaseComponent {
  // додати сюди локатори для перевірки відображення контенту в режимі Preview  
  constructor(page: Page) {
    // Вкажи селектор контейнера прев'ю (наприклад, секція або ділене вікно прев'ю)
    super(page, page.locator('.preview-container')); 
  }
}