import {
  expect,
  Locator,
  Page,
} from '@playwright/test';

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

    this.titleInput = this.root.locator(
      'textarea[formcontrolname="title"]',
    );

    this.titleCounter = this.root.locator(
      '.title-wrapper span.field-info').first();

    // ---------- TAGS ----------

    this.tagsSection = this.root.locator(
      '.tags-block',
    );

    this.newsTag = this.tagsSection.getByText(
      'News',
      { exact: true },
    );

    this.eventsTag = this.tagsSection.getByText(
      'Events',
      { exact: true },
    );

    this.educationTag = this.tagsSection.getByText(
      'Education',
      { exact: true },
    );

    this.initiativesTag = this.tagsSection.getByText(
      'Initiatives',
      { exact: true },
    );

    this.adsTag = this.tagsSection.getByText(
      'Ads',
      { exact: true },
    );

    // ---------- IMAGE ----------

    this.imageUploadInput = this.root.locator(
      'input[type="file"]',
    );

    // ---------- SOURCE ----------

    this.sourceInput = this.root.locator(
      'input[formcontrolname="source"]',
    );

    // ---------- CONTENT ----------

    this.contentEditor = this.root.locator(
      '.ql-editor',
    );

    this.contentCounter = this.root.locator(
      '.quill-counter',
    );

    // ---------- AUTHOR / DATE ----------

    this.authorSection = this.root.locator(
      '.date',
    );

    this.dateSection = this.root.locator(
      '.date',
    );

    // ---------- BUTTONS ----------

    this.cancelButton = this.root
      .locator('.submit-buttons button')
      .filter({
        hasText: /^Cancel$/,
      });

    this.previewButton = this.root
      .locator('.submit-buttons button')
      .filter({
        hasText: /Preview/i,
      });

    this.publishButton = this.root
      .locator('.submit-buttons button')
      .filter({
        hasText: /Publish/i,
      });
  }

  // BASIC CHECKS

  async expectFormOpened(): Promise<void> {
    await expect(this.titleInput).toBeVisible();
  }

  async expectAllFieldsVisible(): Promise<void> {
    await expect(this.titleInput).toBeVisible();

    await expect(this.tagsSection).toBeVisible();

    await expect(this.imageUploadInput).toBeVisible();

    await expect(this.contentEditor).toBeVisible();

    await expect(this.authorSection).toBeVisible();

    await expect(this.dateSection).toBeVisible();

    await expect(this.sourceInput).toBeVisible();
  }

  async expectButtons(): Promise<void> {
    await expect(this.cancelButton).toBeVisible();

    await expect(this.previewButton).toBeVisible();

    await expect(this.publishButton).toBeVisible();
  }

  // TITLE

  async expectTitleCounter(): Promise<void> {
    await expect(this.titleCounter).toContainText(
      '0/170',
    );
  }

  // TAGS

  async expectAllTagsVisible(): Promise<void> {
    await expect(this.newsTag).toBeVisible();

    await expect(this.eventsTag).toBeVisible();

    await expect(this.educationTag).toBeVisible();

    await expect(this.initiativesTag).toBeVisible();

    await expect(this.adsTag).toBeVisible();
  }

  async expectOnlyThreeTagsCanBeSelected(): Promise<void> {
    await this.newsTag.click();

    await this.eventsTag.click();

    await this.educationTag.click();

    await this.adsTag.click();

    await expect(this.adsTag).not.toHaveClass(
      /selected|active/,
    );
  }

  // SOURCE PLACEHOLDER

  async expectSourcePlaceholder(): Promise<void> {
    await expect(this.sourceInput).toHaveAttribute(
      'placeholder',
      'Please add the link of the original article/news/post. Link must start with http(s)://'
    );
  }

  // AUTHOR / DATE

  async expectAuthorReadonly(): Promise<void> {
    await expect(this.authorSection).toContainText(
      'Author:',
    );
  }

  async expectDateReadonly(): Promise<void> {
    await expect(this.dateSection).toContainText(
      'Date:',
    );
  }

  // ORDER CHECK

  async expectCorrectFieldsOrder(): Promise<void> {
    const titleBox =
      await this.titleInput.boundingBox();

    const tagsBox =
      await this.tagsSection.boundingBox();

    const imageBox =
      await this.imageUploadInput.boundingBox();

    const contentBox =
      await this.contentEditor.boundingBox();

    const authorBox =
      await this.authorSection.boundingBox();

    const sourceBox =
      await this.sourceInput.boundingBox();

    if (
      !titleBox ||
      !tagsBox ||
      !imageBox ||
      !contentBox ||
      !authorBox ||
      !sourceBox
    ) {
      throw new Error(
        'One of the form elements is missing',
      );
    }

    // TITLE -> TAGS
    expect(titleBox.y).toBeLessThan(
      tagsBox.y,
    );

    // TAGS -> IMAGE
    expect(tagsBox.y).toBeLessThan(
      imageBox.y,
    );

    // IMAGE -> CONTENT
    expect(imageBox.y).toBeLessThan(
      contentBox.y,
    );

    // CONTENT -> AUTHOR/DATE
    expect(contentBox.y).toBeLessThan(
      authorBox.y,
    );

    // AUTHOR/DATE -> SOURCE
    expect(authorBox.y).toBeLessThan(
      sourceBox.y,
    );
  }

  // Заповнення полів
  async fillTitle(title: string): Promise<void> {
    await this.titleInput.fill(title);
  }

  async fillContent(text: string): Promise<void> {
    await this.contentEditor.fill(text);
  }

  async fillSource(url: string): Promise<void> {
    await this.sourceInput.fill(url);
  }

  // Вибір тегів (передаємо масив рядків, наприклад ['News', 'Events'])
  async selectTags(tags: string[]): Promise<void> {
    for (const tag of tags) {
      await this.tagsSection.getByText(tag, { exact: true }).click();
    }
  }

  // Завантаження файлу (шлях відносно кореня проєкту)
  async uploadImage(filePath: string): Promise<void> {
    await this.imageUploadInput.setInputFiles(filePath);
  }

  // Кліки по кнопках
  async clickCancel(): Promise<void> {
    await this.cancelButton.click();
  }

  async clickPreview(): Promise<void> {
    await this.previewButton.click();
  }

  async clickPublish(): Promise<void> {
    await this.publishButton.click();
  }
}