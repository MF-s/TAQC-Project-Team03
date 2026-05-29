import { expect, Locator, Page } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { BaseComponent } from './base.component';

export class CreateNewsFormComponent extends BaseComponent {
  readonly titleInput: Locator;
  readonly titleCounter: Locator;
  readonly tagsSection: Locator;
  readonly newsTag: Locator;
  readonly eventsTag: Locator;
  readonly educationTag: Locator;
  readonly initiativesTag: Locator;
  readonly adsTag: Locator;
  readonly imageUploadInput: Locator;
  readonly sourceInput: Locator;
  readonly contentEditor: Locator;
  readonly contentCounter: Locator;
  readonly authorSection: Locator;
  readonly dateSection: Locator;
  readonly cancelButton: Locator;
  readonly previewButton: Locator;
  readonly publishButton: Locator;

  constructor(page: Page) {
    super(page, page.locator('form'));

    // ---------- TITLE ----------
    this.titleInput = this.root.locator('textarea[formcontrolname="title"]');
    this.titleCounter = this.root.locator('.title-wrapper span.field-info').first();

    // ---------- TAGS ----------
    this.tagsSection = this.root.locator('.tags-block');
    this.newsTag = this.tagsSection.getByText('News', { exact: true });
    this.eventsTag = this.tagsSection.getByText('Events', { exact: true });
    this.educationTag = this.tagsSection.getByText('Education', { exact: true });
    this.initiativesTag = this.tagsSection.getByText('Initiatives', { exact: true });
    this.adsTag = this.tagsSection.getByText('Ads', { exact: true });

    // ---------- IMAGE ----------
    this.imageUploadInput = this.root.locator('input[type="file"]');

    // ---------- SOURCE ----------
    this.sourceInput = this.root.locator('input[formcontrolname="source"]');

    // ---------- CONTENT ----------
    this.contentEditor = this.root.locator('.ql-editor');
    this.contentCounter = this.root.locator('.quill-counter');

    // ---------- AUTHOR / DATE ----------
    this.authorSection = this.root.locator('.date');
    this.dateSection = this.root.locator('.date');

    // ---------- BUTTONS ----------
    this.cancelButton = this.root.locator('.submit-buttons button').filter({ hasText: /^Cancel$/ });
    this.previewButton = this.root.locator('.submit-buttons button').filter({ hasText: /Preview/i });
    this.publishButton = this.root.locator('.submit-buttons button').filter({ hasText: /Publish|Save|Submit/i });
  }

  // ==========================================
  //            BASIC VISIBILITY CHECKS
  // ==========================================

  async expectFormOpened(): Promise<void> {
    await allure.step('check if the news creation form is open', async () => {
      await expect(this.titleInput).toBeVisible();
    });
  }

  async expectAllFieldsVisible(): Promise<void> {
    await allure.step('check visibility of all required fields in the news form', async () => {
      await expect(this.titleInput).toBeVisible();
      await expect(this.tagsSection).toBeVisible();
      await expect(this.imageUploadInput).toBeVisible();
      await expect(this.contentEditor).toBeVisible();
      await expect(this.authorSection).toBeVisible();
      await expect(this.dateSection).toBeVisible();
      await expect(this.sourceInput).toBeVisible();
    });
  }

  async expectButtons(): Promise<void> {
    await allure.step('check visibility of the form control buttons (Cancel, Preview, Publish)', async () => {
      await expect(this.cancelButton).toBeVisible();
      await expect(this.previewButton).toBeVisible();
      await expect(this.publishButton).toBeVisible();
    });
  }

  async expectAllTagsVisible(): Promise<void> {
    await allure.step('check visibility of all available news tags', async () => {
      await expect(this.newsTag).toBeVisible();
      await expect(this.eventsTag).toBeVisible();
      await expect(this.educationTag).toBeVisible();
      await expect(this.initiativesTag).toBeVisible();
      await expect(this.adsTag).toBeVisible();
    });
  }

  // ==========================================
  //               ACTION METHODS
  // ==========================================

  async fillTitle(title: string): Promise<void> {
    await allure.step(`fill the news title field with: "${title}"`, async () => {
      await this.titleInput.fill(title);
    });
  }

  async fillContent(text: string): Promise<void> {
    await allure.step('fill the main text field of the news (Content)', async () => {
      await this.contentEditor.fill(text);
    });
  }

  async fillSource(url: string): Promise<void> {
    await allure.step(`fill the source input with: "${url}"`, async () => {
      await this.sourceInput.fill(url);
    });
  }

  async selectTags(tags: string[]): Promise<void> {
    await allure.step(`select news tags: ${tags.join(', ')}`, async () => {
      for (const tag of tags) {
        await this.tagsSection.getByText(tag, { exact: true }).click();
      }
    });
  }

  async selectNewsTag(): Promise<void> {
    await allure.step('click the "News" tag', async () => {
      await this.newsTag.click();
    });
  }

  async uploadImage(filePath: string): Promise<void> {
    await allure.step(`upload an image from file: ${filePath}`, async () => {
      await this.imageUploadInput.setInputFiles(filePath);
    });
  }

  async clickCancel(): Promise<void> {
    await allure.step('click the "Cancel" button', async () => {
      await this.cancelButton.click();
    });
  }

  async clickPreview(): Promise<void> {
    await allure.step('click the "Preview" button', async () => {
      await this.previewButton.click();
    });
  }

  async clickPublish(): Promise<void> {
    await allure.step('click the "Publish" button', async () => {
      await this.publishButton.click();
    });
  }

  // ==========================================
  //             VALIDATION ASSERTS
  // ==========================================

  async expectPublishButtonToBeDisabled(): Promise<void> {
    await allure.step('check if the "Publish" button is disabled', async () => {
      await expect(this.publishButton).toBeDisabled();
    });
  }

  async expectPublishButtonToBeEnabled(): Promise<void> {
    await allure.step('check if the "Publish" button is enabled', async () => {
      await expect(this.publishButton).toBeEnabled();
    });
  }

  async expectTitleCounterText(expectedText: string): Promise<void> {
    await allure.step(`check the title counter text: "${expectedText}"`, async () => {
      await expect(this.titleCounter).toHaveText(expectedText);
    });
  }

  async expectTitleValue(expectedValue: string): Promise<void> {
    await allure.step('check the current value of the Title field against the character limit', async () => {
      await expect(this.titleInput).toHaveValue(expectedValue);
    });
  }

  async expectTitleCounter(): Promise<void> {
    await allure.step('check the initial state of the Title counter (0/170)', async () => {
      await expect(this.titleCounter).toContainText('0/170');
    });
  }

  async expectTitleBorderToBeRed(): Promise<void> {
    await allure.step('check if the Title field has a red border', async () => {
      await expect(this.titleInput).toHaveCSS('border-color', 'rgb(255, 0, 0)');
    });
  }

  async expectTitleBorderNotToBeRed(): Promise<void> {
    await allure.step('check if the Title field has a red border', async () => {
      await expect(this.titleInput).not.toHaveCSS('border-color', 'rgb(255, 0, 0)');
    });
  }

  async expectTitleCounterToBeRed(): Promise<void> {
    await allure.step('check if the Title counter text is highlighted in red', async () => {
      await expect(this.titleCounter).toHaveCSS('color', 'rgb(235, 24, 13)');
    });
  }

  async expectOnlyThreeTagsCanBeSelected(): Promise<void> {
    await allure.step('check the tag selection limit: only 3 tags can be selected at a time', async () => {
      await this.newsTag.click();
      await this.eventsTag.click();
      await this.educationTag.click();
      await this.adsTag.click();
      await expect(this.adsTag).not.toHaveClass(/selected|active/);
    });
  }

  async expectSourcePlaceholder(): Promise<void> {
    await allure.step('check the placeholder text in the Source field', async () => {
      await expect(this.sourceInput).toHaveAttribute(
        'placeholder',
        'Please add the link of the original article/news/post. Link must start with http(s)://'
      );
    });
  }

  async expectAuthorReadonly(): Promise<void> {
    await allure.step('check the readonly state of the Author field', async () => {
      await expect(this.authorSection).toContainText('Author:');
    });
  }

  async expectDateReadonly(): Promise<void> {
    await allure.step('check the readonly state of the Date field', async () => {
      await expect(this.dateSection).toContainText('Date:');
    });
  }

  async expectCorrectFieldsOrder(): Promise<void> {
    await allure.step('check the correct visual arrangement of form elements from top to bottom', async () => {
      const titleBox = await this.titleInput.boundingBox();
      const tagsBox = await this.tagsSection.boundingBox();
      const imageBox = await this.imageUploadInput.boundingBox();
      const contentBox = await this.contentEditor.boundingBox();
      const authorBox = await this.authorSection.boundingBox();
      const sourceBox = await this.sourceInput.boundingBox();

      if (!titleBox || !tagsBox || !imageBox || !contentBox || !authorBox || !sourceBox) {
        throw new Error('One of the form elements is missing');
      }

      expect(titleBox.y).toBeLessThan(tagsBox.y);
      expect(tagsBox.y).toBeLessThan(imageBox.y);
      expect(imageBox.y).toBeLessThan(contentBox.y);
      expect(contentBox.y).toBeLessThan(authorBox.y);
      expect(authorBox.y).toBeLessThan(sourceBox.y);
    });
  }
}