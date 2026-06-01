# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-news-validation.spec.ts >> News Creation — Field Validation and Button States >> TC2 - should validate Title field limits and Publish button states
- Location: tests/create-news-validation.spec.ts:8:7

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('form').locator('textarea[formcontrolname="title"]')
Expected: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
Received: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('form').locator('textarea[formcontrolname="title"]')
    9 × locator resolved to <textarea maxlength="171" formcontrolname="title" _ngcontent-ng-c890437260="" class="ng-invalid ng-touched ng-dirty" placeholder="e.g. Coffee takeaway with 20% discount"></textarea>
      - unexpected value "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - link "skip to the main content" [ref=e6] [cursor=pointer]:
        - /url: .main-content
      - banner "Welcome to header" [ref=e7]:
        - generic [ref=e9]:
          - link "Image green city logo" [ref=e10] [cursor=pointer]:
            - /url: "#/greenCity"
            - link "Image green city logo" [ref=e11]
          - generic [ref=e12]:
            - navigation [ref=e13]:
              - tablist [ref=e14]:
                - listitem [ref=e15]:
                  - link "Eco news" [ref=e16] [cursor=pointer]:
                    - /url: "#/greenCity/news"
                - listitem [ref=e17]:
                  - link "Events" [ref=e18] [cursor=pointer]:
                    - /url: "#/greenCity/events"
                - listitem [ref=e19]:
                  - link "Places" [ref=e20] [cursor=pointer]:
                    - /url: "#/greenCity/places"
                - listitem [ref=e21]:
                  - link "About us" [ref=e22] [cursor=pointer]:
                    - /url: "#/greenCity/about"
                - listitem [ref=e23]:
                  - link "My space" [ref=e24] [cursor=pointer]:
                    - /url: "#/greenCity/profile"
                - listitem [ref=e25]:
                  - link "UBS courier" [ref=e26] [cursor=pointer]:
                    - /url: "#/ubs"
            - menu [ref=e28]:
              - listitem "site bookmark" [ref=e29] [cursor=pointer]:
                - img [ref=e30]
              - listitem "site notification" [ref=e31] [cursor=pointer]:
                - img [ref=e32]
              - search "site search" [ref=e33] [cursor=pointer]:
                - img [ref=e34]
              - menu "language switcher" [ref=e35]:
                - option "english" [ref=e36] [cursor=pointer]:
                  - generic [ref=e37]: En
                  - img [ref=e38]
              - menu "profile options collapsed" [ref=e39]:
                - listitem [ref=e40] [cursor=pointer]: Max
      - generic [ref=e41]:
        - generic "Tab To Main"
        - generic [ref=e42]:
          - main [ref=e46]:
            - generic [ref=e47]:
              - generic [ref=e48]:
                - heading "Create news" [level=2] [ref=e49]
                - paragraph [ref=e51]: Please provide as many details as you can - place and time of the event, the goal of gathering, etc. You can come back and update news anytime after publishing.
              - generic [ref=e53]:
                - generic [ref=e54]:
                  - generic [ref=e55]:
                    - generic [ref=e56]:
                      - heading "Title" [level=3] [ref=e57]
                      - generic [ref=e58]: 171/170
                    - textbox [active] [ref=e60]:
                      - /placeholder: e.g. Coffee takeaway with 20% discount
                      - text: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                  - generic [ref=e61]:
                    - heading "Pick tags for news" [level=3] [ref=e62]
                    - paragraph [ref=e63]: Only 3 tags can be added
                    - generic [ref=e65]:
                      - button "News" [ref=e66] [cursor=pointer]:
                        - generic [ref=e68]: News
                      - button "Events" [ref=e69] [cursor=pointer]:
                        - generic [ref=e71]: Events
                      - button "Education" [ref=e72] [cursor=pointer]:
                        - generic [ref=e74]: Education
                      - button "Initiatives" [ref=e75] [cursor=pointer]:
                        - generic [ref=e77]: Initiatives
                      - button "Ads" [ref=e78] [cursor=pointer]:
                        - generic [ref=e80]: Ads
                  - generic [ref=e81]:
                    - generic [ref=e82]:
                      - heading "Source (optional)" [level=3] [ref=e83]
                      - generic [ref=e84]: Please add the link of original article/news/post. Link must start with http(s)://
                    - textbox [ref=e86]:
                      - /placeholder: Link to external source
                  - generic [ref=e87]:
                    - heading "Picture (optional)" [level=3] [ref=e88]
                    - generic [ref=e89]:
                      - generic [ref=e92]:
                        - text: Drop your image here or
                        - generic [ref=e93]: browse
                        - button "browse" [ref=e94]
                      - generic [ref=e95]:
                        - generic "Crop photo" [ref=e99]
                        - generic [ref=e112]:
                          - button "Cancel" [ref=e113] [cursor=pointer]
                          - button "Submit" [ref=e114] [cursor=pointer]
                      - paragraph [ref=e115]: Upload only PNG or JPG. File size must be less than 10MB
                - generic [ref=e116]:
                  - generic [ref=e117]:
                    - heading "Content" [level=3] [ref=e118]
                    - paragraph [ref=e119]: Must be minimum 20 and maximum 63 206 symbols
                  - generic [ref=e120]:
                    - generic [ref=e121]:
                      - generic [ref=e122]:
                        - button [ref=e123] [cursor=pointer]:
                          - img [ref=e124]
                        - button [ref=e127] [cursor=pointer]:
                          - img [ref=e128]
                        - button [ref=e130] [cursor=pointer]:
                          - img [ref=e131]
                        - button [ref=e134] [cursor=pointer]:
                          - img [ref=e135]
                      - generic [ref=e139]:
                        - button [ref=e140] [cursor=pointer]:
                          - img [ref=e141]
                        - button [ref=e146] [cursor=pointer]:
                          - img [ref=e147]
                      - generic [ref=e151]:
                        - button [ref=e152] [cursor=pointer]:
                          - img [ref=e153]
                        - button [ref=e155] [cursor=pointer]:
                          - img [ref=e156]
                      - generic [ref=e158]:
                        - button [ref=e159] [cursor=pointer]:
                          - img [ref=e160]
                        - button [ref=e164] [cursor=pointer]:
                          - img [ref=e165]
                      - generic [ref=e166]:
                        - button [ref=e167] [cursor=pointer]:
                          - img [ref=e168]
                        - button [ref=e171] [cursor=pointer]:
                          - img [ref=e172]
                      - generic [ref=e175]:
                        - button [ref=e176] [cursor=pointer]:
                          - img [ref=e177]
                        - button [ref=e179] [cursor=pointer]:
                          - img [ref=e180]
                      - button [ref=e183] [cursor=pointer]:
                        - img [ref=e184]
                      - generic [ref=e190]:
                        - button "Normal" [ref=e191] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e192]
                        - text: Small Normal Large Huge
                      - generic [ref=e196]:
                        - button "Normal" [ref=e197] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e198]
                        - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                      - generic [ref=e201]:
                        - button [ref=e203] [cursor=pointer]:
                          - img [ref=e204]
                        - button [ref=e207] [cursor=pointer]:
                          - img [ref=e208]
                      - generic [ref=e258]:
                        - button "Sans Serif" [ref=e259] [cursor=pointer]:
                          - text: Sans Serif
                          - img [ref=e260]
                        - text: Sans Serif Serif Monospace
                      - button [ref=e265] [cursor=pointer]:
                        - img [ref=e266]
                      - button [ref=e268] [cursor=pointer]:
                        - img [ref=e269]
                      - generic [ref=e274]:
                        - button [ref=e275] [cursor=pointer]:
                          - img [ref=e276]
                        - button [ref=e280] [cursor=pointer]:
                          - img [ref=e281]
                        - button [ref=e285] [cursor=pointer]:
                          - img [ref=e286]
                      - button [ref=e300] [cursor=pointer]:
                        - img [ref=e301]
                    - generic [ref=e306]:
                      - generic [ref=e307]:
                        - text: e.g. Short description of news, agenda for event
                        - paragraph [ref=e308]
                      - text: "Visit URL: EditRemove"
                  - paragraph
                - generic [ref=e309]:
                  - paragraph [ref=e310]: "Date: Jun 1, 2026"
                  - paragraph [ref=e311]: "Author: Max"
                - generic [ref=e312]:
                  - button "Cancel" [ref=e313] [cursor=pointer]
                  - button "Preview" [ref=e314] [cursor=pointer]
                  - button "Publish" [disabled] [ref=e315]
          - contentinfo [ref=e317]:
            - generic [ref=e318]:
              - generic [ref=e319]:
                - link "GreenCity home" [ref=e321] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e322]
                - navigation [ref=e323]:
                  - menu [ref=e324]:
                    - listitem [ref=e325]:
                      - link "Eco news" [ref=e326] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e327]:
                      - link "Events" [ref=e328] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e329]:
                      - link "Places" [ref=e330] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e331]:
                      - link "About Us" [ref=e332] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e333]:
                      - link "My Space" [ref=e334] [cursor=pointer]:
                        - /url: "#/greenCity/profile/2537"
                    - listitem [ref=e335]:
                      - link "UBS Courier" [ref=e336] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e337]:
                    - listitem [ref=e338]:
                      - paragraph [ref=e339]: Follow us
                    - listitem [ref=e340]:
                      - link "Twitter link" [ref=e341] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e342]
                      - link "LinkedIn link" [ref=e343] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e344]
                      - link "Facebook link" [ref=e345] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e346]
                      - link "Instagram link" [ref=e347] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e348]
                      - link "YouTube link" [ref=e349] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e350]
              - generic [ref=e351]: © Copyright 2026. Green City.
    - button "chat" [ref=e352] [cursor=pointer]:
      - img "chat" [ref=e353]
  - generic [ref=e354]: Welcome to the search window
```

# Test source

```ts
  83  |       await expect(this.cancelButton).toBeVisible();
  84  |       await expect(this.previewButton).toBeVisible();
  85  |       await expect(this.publishButton).toBeVisible();
  86  |     });
  87  |   }
  88  | 
  89  |   async expectAllTagsVisible(): Promise<void> {
  90  |     await allure.step('check visibility of all available news tags', async () => {
  91  |       await expect(this.newsTag).toBeVisible();
  92  |       await expect(this.eventsTag).toBeVisible();
  93  |       await expect(this.educationTag).toBeVisible();
  94  |       await expect(this.initiativesTag).toBeVisible();
  95  |       await expect(this.adsTag).toBeVisible();
  96  |     });
  97  |   }
  98  | 
  99  |   // ==========================================
  100 |   //               ACTION METHODS
  101 |   // ==========================================
  102 | 
  103 |   async fillTitle(title: string): Promise<void> {
  104 |     await allure.step(`fill the news title field with: "${title}"`, async () => {
  105 |       await this.titleInput.fill(title);
  106 |     });
  107 |   }
  108 | 
  109 |   async fillContent(text: string): Promise<void> {
  110 |     await allure.step('fill the main text field of the news (Content)', async () => {
  111 |       await this.contentEditor.fill(text);
  112 |     });
  113 |   }
  114 | 
  115 |   async fillSource(url: string): Promise<void> {
  116 |     await allure.step(`fill the source input with: "${url}"`, async () => {
  117 |       await this.sourceInput.fill(url);
  118 |     });
  119 |   }
  120 | 
  121 |   async selectTags(tags: string[]): Promise<void> {
  122 |     await allure.step(`select news tags: ${tags.join(', ')}`, async () => {
  123 |       for (const tag of tags) {
  124 |         await this.tagsSection.getByText(tag, { exact: true }).click();
  125 |       }
  126 |     });
  127 |   }
  128 | 
  129 |   async selectNewsTag(): Promise<void> {
  130 |     await allure.step('click the "News" tag', async () => {
  131 |       await this.newsTag.click();
  132 |     });
  133 |   }
  134 | 
  135 |   async uploadImage(filePath: string): Promise<void> {
  136 |     await allure.step(`upload an image from file: ${filePath}`, async () => {
  137 |       await this.imageUploadInput.setInputFiles(filePath);
  138 |     });
  139 |   }
  140 | 
  141 |   async clickCancel(): Promise<void> {
  142 |     await allure.step('click the "Cancel" button', async () => {
  143 |       await this.cancelButton.click();
  144 |     });
  145 |   }
  146 | 
  147 |   async clickPreview(): Promise<void> {
  148 |     await allure.step('click the "Preview" button', async () => {
  149 |       await this.previewButton.click();
  150 |     });
  151 |   }
  152 | 
  153 |   async clickPublish(): Promise<void> {
  154 |     await allure.step('click the "Publish" button', async () => {
  155 |       await this.publishButton.click();
  156 |     });
  157 |   }
  158 | 
  159 |   // ==========================================
  160 |   //             VALIDATION ASSERTS
  161 |   // ==========================================
  162 | 
  163 |   async expectPublishButtonToBeDisabled(): Promise<void> {
  164 |     await allure.step('check if the "Publish" button is disabled', async () => {
  165 |       await expect(this.publishButton).toBeDisabled();
  166 |     });
  167 |   }
  168 | 
  169 |   async expectPublishButtonToBeEnabled(): Promise<void> {
  170 |     await allure.step('check if the "Publish" button is enabled', async () => {
  171 |       await expect(this.publishButton).toBeEnabled();
  172 |     });
  173 |   }
  174 | 
  175 |   async expectTitleCounterText(expectedText: string): Promise<void> {
  176 |     await allure.step(`check the title counter text: "${expectedText}"`, async () => {
  177 |       await expect(this.titleCounter).toHaveText(expectedText);
  178 |     });
  179 |   }
  180 | 
  181 |   async expectTitleValue(expectedValue: string): Promise<void> {
  182 |     await allure.step('check the current value of the Title field against the character limit', async () => {
> 183 |       await expect(this.titleInput).toHaveValue(expectedValue);
      |                                     ^ Error: expect(locator).toHaveValue(expected) failed
  184 |     });
  185 |   }
  186 | 
  187 |   async expectTitleCounter(): Promise<void> {
  188 |     await allure.step('check the initial state of the Title counter (0/170)', async () => {
  189 |       await expect(this.titleCounter).toContainText('0/170');
  190 |     });
  191 |   }
  192 | 
  193 |   async expectTitleBorderToBeRed(): Promise<void> {
  194 |     await allure.step('check if the Title field has a red border', async () => {
  195 |       await expect(this.titleInput).toHaveCSS('border-color', 'rgb(255, 0, 0)');
  196 |     });
  197 |   }
  198 | 
  199 |   async expectTitleBorderNotToBeRed(): Promise<void> {
  200 |     await allure.step('check if the Title field has a red border', async () => {
  201 |       await expect(this.titleInput).not.toHaveCSS('border-color', 'rgb(255, 0, 0)');
  202 |     });
  203 |   }
  204 | 
  205 |   async expectTitleCounterToBeRed(): Promise<void> {
  206 |     await allure.step('check if the Title counter text is highlighted in red', async () => {
  207 |       await expect(this.titleCounter).toHaveCSS('color', 'rgb(235, 24, 13)');
  208 |     });
  209 |   }
  210 | 
  211 |   async expectOnlyThreeTagsCanBeSelected(): Promise<void> {
  212 |     await allure.step('check the tag selection limit: only 3 tags can be selected at a time', async () => {
  213 |       await this.newsTag.click();
  214 |       await this.eventsTag.click();
  215 |       await this.educationTag.click();
  216 |       await this.adsTag.click();
  217 |       await expect(this.adsTag).not.toHaveClass(/selected|active/);
  218 |     });
  219 |   }
  220 | 
  221 |   async expectSourcePlaceholder(): Promise<void> {
  222 |     await allure.step('check the placeholder text in the Source field', async () => {
  223 |       await expect(this.sourceInput).toHaveAttribute(
  224 |         'placeholder',
  225 |         'Please add the link of the original article/news/post. Link must start with http(s)://'
  226 |       );
  227 |     });
  228 |   }
  229 | 
  230 |   async expectAuthorReadonly(): Promise<void> {
  231 |     await allure.step('check the readonly state of the Author field', async () => {
  232 |       await expect(this.authorSection).toContainText('Author:');
  233 |     });
  234 |   }
  235 | 
  236 |   async expectDateReadonly(): Promise<void> {
  237 |     await allure.step('check the readonly state of the Date field', async () => {
  238 |       await expect(this.dateSection).toContainText('Date:');
  239 |     });
  240 |   }
  241 | 
  242 |   async expectCorrectFieldsOrder(): Promise<void> {
  243 |     await allure.step('check the correct visual arrangement of form elements from top to bottom', async () => {
  244 |       const titleBox = await this.titleInput.boundingBox();
  245 |       const tagsBox = await this.tagsSection.boundingBox();
  246 |       const imageBox = await this.imageUploadInput.boundingBox();
  247 |       const contentBox = await this.contentEditor.boundingBox();
  248 |       const authorBox = await this.authorSection.boundingBox();
  249 |       const sourceBox = await this.sourceInput.boundingBox();
  250 | 
  251 |       if (!titleBox || !tagsBox || !imageBox || !contentBox || !authorBox || !sourceBox) {
  252 |         throw new Error('One of the form elements is missing');
  253 |       }
  254 | 
  255 |       expect(titleBox.y).toBeLessThan(tagsBox.y);
  256 |       expect(tagsBox.y).toBeLessThan(imageBox.y);
  257 |       expect(imageBox.y).toBeLessThan(contentBox.y);
  258 |       expect(contentBox.y).toBeLessThan(authorBox.y);
  259 |       expect(authorBox.y).toBeLessThan(sourceBox.y);
  260 |     });
  261 |   }
  262 | }
```