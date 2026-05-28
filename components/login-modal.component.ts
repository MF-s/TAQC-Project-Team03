import { Page } from '@playwright/test';
import { BaseComponent } from './base.component';

export class LoginModalComponent extends BaseComponent {
  constructor(page: Page) {
    super(page, page.locator('app-sign-in'));
  }

  async login(email: string, password: string): Promise<void> {
    await this.root.waitFor({ state: 'visible' });

    await this.root.locator('input[formcontrolname="email"]').fill(email);

    await this.root.locator('input[formcontrolname="password"]').fill(password);

    await this.root.locator('button[type="submit"]').click();
  }
}