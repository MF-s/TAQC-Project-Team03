# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-news-form-layout.spec.ts >> Create News Form >> TC1 - should display all create news form fields in correct order
- Location: tests/create-news-form-layout.spec.ts:7:7

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  locator('form').locator('input[formcontrolname="source"]')
Expected: "Please add the link of the original article/news/post. Link must start with http(s)://"
Received: "Link to external source"
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" with timeout 5000ms
  - waiting for locator('form').locator('input[formcontrolname="source"]')
    9 × locator resolved to <input type="text" formcontrolname="source" _ngcontent-ng-c890437260="" placeholder="Link to external source" class="ng-untouched ng-pristine ng-valid"/>
      - unexpected value "Link to external source"

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
                      - generic [ref=e58]: 0/170
                    - textbox [ref=e60]:
                      - /placeholder: e.g. Coffee takeaway with 20% discount
                  - generic [ref=e61]:
                    - heading "Pick tags for news" [level=3] [ref=e62]
                    - paragraph [ref=e63]: Only 3 tags can be added
                    - generic [ref=e65]:
                      - button "News" [ref=e66] [cursor=pointer]:
                        - generic [ref=e68]: News
                      - button "Events" [ref=e70] [cursor=pointer]:
                        - generic [ref=e72]: Events
                      - button "Education" [ref=e74] [cursor=pointer]:
                        - generic [ref=e76]: Education
                      - button "Initiatives" [ref=e78] [cursor=pointer]:
                        - generic [ref=e80]: Initiatives
                      - button "Ads" [ref=e81] [cursor=pointer]:
                        - generic [ref=e83]: Ads
                  - generic [ref=e84]:
                    - generic [ref=e85]:
                      - heading "Source (optional)" [level=3] [ref=e86]
                      - generic [ref=e87]: Please add the link of original article/news/post. Link must start with http(s)://
                    - textbox [ref=e89]:
                      - /placeholder: Link to external source
                  - generic [ref=e90]:
                    - heading "Picture (optional)" [level=3] [ref=e91]
                    - generic [ref=e92]:
                      - generic [ref=e95]:
                        - text: Drop your image here or
                        - generic [ref=e96]: browse
                        - button "browse" [ref=e97]
                      - generic [ref=e98]:
                        - generic "Crop photo" [ref=e102]
                        - generic [ref=e115]:
                          - button "Cancel" [ref=e116] [cursor=pointer]
                          - button "Submit" [ref=e117] [cursor=pointer]
                      - paragraph [ref=e118]: Upload only PNG or JPG. File size must be less than 10MB
                - generic [ref=e119]:
                  - generic [ref=e120]:
                    - heading "Content" [level=3] [ref=e121]
                    - paragraph [ref=e122]: Must be minimum 20 and maximum 63 206 symbols
                  - generic [ref=e123]:
                    - generic [ref=e124]:
                      - generic [ref=e125]:
                        - button [ref=e126] [cursor=pointer]:
                          - img [ref=e127]
                        - button [ref=e130] [cursor=pointer]:
                          - img [ref=e131]
                        - button [ref=e133] [cursor=pointer]:
                          - img [ref=e134]
                        - button [ref=e137] [cursor=pointer]:
                          - img [ref=e138]
                      - generic [ref=e142]:
                        - button [ref=e143] [cursor=pointer]:
                          - img [ref=e144]
                        - button [ref=e149] [cursor=pointer]:
                          - img [ref=e150]
                      - generic [ref=e154]:
                        - button [ref=e155] [cursor=pointer]:
                          - img [ref=e156]
                        - button [ref=e158] [cursor=pointer]:
                          - img [ref=e159]
                      - generic [ref=e161]:
                        - button [ref=e162] [cursor=pointer]:
                          - img [ref=e163]
                        - button [ref=e167] [cursor=pointer]:
                          - img [ref=e168]
                      - generic [ref=e169]:
                        - button [ref=e170] [cursor=pointer]:
                          - img [ref=e171]
                        - button [ref=e174] [cursor=pointer]:
                          - img [ref=e175]
                      - generic [ref=e178]:
                        - button [ref=e179] [cursor=pointer]:
                          - img [ref=e180]
                        - button [ref=e182] [cursor=pointer]:
                          - img [ref=e183]
                      - button [ref=e186] [cursor=pointer]:
                        - img [ref=e187]
                      - generic [ref=e193]:
                        - button "Normal" [ref=e194] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e195]
                        - text: Small Normal Large Huge
                      - generic [ref=e199]:
                        - button "Normal" [ref=e200] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e201]
                        - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                      - generic [ref=e204]:
                        - button [ref=e206] [cursor=pointer]:
                          - img [ref=e207]
                        - button [ref=e210] [cursor=pointer]:
                          - img [ref=e211]
                      - generic [ref=e261]:
                        - button "Sans Serif" [ref=e262] [cursor=pointer]:
                          - text: Sans Serif
                          - img [ref=e263]
                        - text: Sans Serif Serif Monospace
                      - button [ref=e268] [cursor=pointer]:
                        - img [ref=e269]
                      - button [ref=e271] [cursor=pointer]:
                        - img [ref=e272]
                      - generic [ref=e277]:
                        - button [ref=e278] [cursor=pointer]:
                          - img [ref=e279]
                        - button [ref=e283] [cursor=pointer]:
                          - img [ref=e284]
                        - button [ref=e288] [cursor=pointer]:
                          - img [ref=e289]
                      - button [ref=e303] [cursor=pointer]:
                        - img [ref=e304]
                    - generic [ref=e309]:
                      - generic [ref=e310]:
                        - text: e.g. Short description of news, agenda for event
                        - paragraph [ref=e311]
                      - text: "Visit URL: EditRemove"
                  - paragraph
                - generic [ref=e312]:
                  - paragraph [ref=e313]: "Date: Jun 2, 2026"
                  - paragraph [ref=e314]: "Author: Max"
                - generic [ref=e315]:
                  - button "Cancel" [ref=e316] [cursor=pointer]
                  - button "Preview" [ref=e317] [cursor=pointer]
                  - button "Publish" [disabled] [ref=e318]
          - contentinfo [ref=e320]:
            - generic [ref=e321]:
              - generic [ref=e322]:
                - link "GreenCity home" [ref=e324] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e325]
                - navigation [ref=e326]:
                  - menu [ref=e327]:
                    - listitem [ref=e328]:
                      - link "Eco news" [ref=e329] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e330]:
                      - link "Events" [ref=e331] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e332]:
                      - link "Places" [ref=e333] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e334]:
                      - link "About Us" [ref=e335] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e336]:
                      - link "My Space" [ref=e337] [cursor=pointer]:
                        - /url: "#/greenCity/profile/2537"
                    - listitem [ref=e338]:
                      - link "UBS Courier" [ref=e339] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e340]:
                    - listitem [ref=e341]:
                      - paragraph [ref=e342]: Follow us
                    - listitem [ref=e343]:
                      - link "Twitter link" [ref=e344] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e345]
                      - link "LinkedIn link" [ref=e346] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e347]
                      - link "Facebook link" [ref=e348] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e349]
                      - link "Instagram link" [ref=e350] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e351]
                      - link "YouTube link" [ref=e352] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e353]
              - generic [ref=e354]: © Copyright 2026. Green City.
    - button "chat" [ref=e355] [cursor=pointer]:
      - img "chat" [ref=e356]
  - generic [ref=e357]: Welcome to the search window
```

# Test source

```ts
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
  183 |       await expect(this.titleInput).toHaveValue(expectedValue);
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
> 223 |       await expect(this.sourceInput).toHaveAttribute(
      |                                      ^ Error: expect(locator).toHaveAttribute(expected) failed
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