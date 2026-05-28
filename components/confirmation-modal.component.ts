import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base.component';

export class ConfirmationModalComponent extends BaseComponent {
    //додати сюди локатори для тексту та кнопок модалки
    constructor(page: Page) {
    // Вкажи селектор тегу модального вікна замість 'app-custom-dialog' (погляньте в DevTools)
    super(page, page.locator('app-custom-dialog')); 
  }
}