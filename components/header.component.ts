import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base.component';

export class HeaderComponent extends BaseComponent {
  readonly signInButton: Locator;
  readonly profileButton: Locator;

  constructor(page: Page) {
    super(page, page.locator('app-header'));

    this.signInButton = this.page.getByRole('link', {
  name: /sign in|увійти/i,
});

    this.profileButton = this.root.locator('a.url-name[href*="profile"]');
  }

  async clickSignIn(): Promise<void> {
    await this.signInButton.click();
  }
}