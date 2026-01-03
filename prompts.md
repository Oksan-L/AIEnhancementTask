    ---- Cursor IDE ----

1. Act as a Senior QA Automation Engineer. Based on the rules defined in my @.cursor/rules/ai-instructions.mdc generate Playwright automation code for the following two test cases:
@TestCases.md (3-29) 
Execution Instructions:
Use playwright-mcp to explore https://luxequality.com/. Do not guess locators; discover and validate them via MCP tools as per Rule #4.
Create corresponding Page Objects in AIEnhancementTask/pageObjects first.
Then, create the spec files in AIEnhancementTask/specs.
Ensure that for TC-02 (Contact Form), you accurately identify validation mechanisms (HTML5 required or custom JS messages) using MCP before writing assertions.
Strictly follow the folder structure and naming conventions defined in my rules. Do not create any files outside the AIEnhancementTask directory.

2. Fix the failing test. Error log: @powershell (68-110) 
Instructions:
Use playwright-mcp to check the real site.
Follow Rule #2 and #4: update the Page Object in AIEnhancementTask/pageObjects first.
Do not change the spec file if the issue is in the locator.
Ensure no duplicate files are created.
        // You`ve hit your usage limit. Get Cursor Pro for more Agent usage, unlimited Tab, and more.

    ---- Claude Desktop ----

3. Act as a Senior QA Automation Engineer. Use playwright-mcp to inspect `https://luxequality.com/` and generate Playwright automation code for the following two test cases:
```markdown
### TC-03: Footer Social Media Links Verification
**Preconditions:**
- The Home page is opened.
- User scrolls down to the Footer section.
**Steps:**
1. Locate social media icons (UpWork, LinkedIn, Facebook, Instagram, Behance, Dou).
**Expected Result:**
- All icons are visible and clickable, each icon has a valid `href` attribute pointing to the respective external platform.
- Links are configured to open in a new tab (`target="_blank"`).
- Links point to the correct company profiles on social media.
---
### TC-04: Mobile Navigation Menu Functionality (Responsive)
**Preconditions:**
- Browser viewport is set to mobile size (e.g., 375x812).
**Steps:**
1. Click on the "Hamburger" menu icon.
2. Click the "Close" (X) icon.
**Expected Result:**
- The "Hamburger" menu icon is visible.
1. The navigation menu slides appears. The menu opens smoothly without breaking the layout.
2. The menu closes correctly when the close button is clicked.
```
Strict Instructions according to my `.cursorrules`:
1. Locator Discovery: Use MCP to find real selectors for social media icons in the footer and the mobile menu elements (hamburger and close buttons). Do not guess.
2. POM Pattern: Create Page Object classes in `AIEnhancementTask/pageObjects` and spec files in `AIEnhancementTask/specs`.
3. Mobile Testing: For TC-04, ensure the test sets the viewport to 375x812 before interacting with the menu.
4. Citations: In your response, clearly state which locators were discovered via MCP.

4. Act as a Senior QA Automation Engineer. Your task is to generate Playwright automation code for Group 2 (TC-03 and TC-04) for the website https://luxequality.com/.
CRITICAL CONSTRAINTS:
Read Instructions First: Strictly follow all rules defined in AIEnhancementTask/.cursor/rules/ai-instructions.mdc.
No Extra Output: Do NOT generate any summaries, conclusions, analysis, or README updates. Provide ONLY the code for Page Objects and Spec files.
MCP Usage: Use playwright-mcp to discover and validate real locators on the live site. Do not guess selectors.
Language: Use strictly JavaScript (.js).
Test Cases to Implement:
### TC-03: Footer Social Media Links Verification
**Preconditions:**
- The Home page is opened.
- User scrolls down to the Footer section.
**Steps:**
1. Locate social media icons (UpWork, LinkedIn, Facebook, Instagram, Behance, Dou).
**Expected Result:**
- All icons are visible and clickable, each icon has a valid `href` attribute pointing to the respective external platform.
- Links are configured to open in a new tab (`target="_blank"`).
- Links point to the correct company profiles on social media.
---
### TC-04: Mobile Navigation Menu Functionality (Responsive)
**Preconditions:**
- Browser viewport is set to mobile size (e.g., 375x812).
**Steps:**
1. Click on the "Hamburger" menu icon.
2. Click the "Close" (X) icon.
**Expected Result:**
- The "Hamburger" menu icon is visible.
1. The navigation menu slides appears. The menu opens smoothly without breaking the layout.
2. The menu closes correctly when the close button is clicked.
Provide code for Page Objects in AIEnhancementTask/pageObjects.
Provide code for Spec files in AIEnhancementTask/specs.


5. Update the code based on the new Rule #8 in AIEnhancementTask/.cursor/rules/ai-instructions.mdc.
Tasks:
Consolidate Tests: Refactor tc-03-footer-social-media-links.spec.js and tc-04-mobile-navigation-menu.spec.js to ensure each has exactly one test() block. All assertions must be sequential within that single block.
Verification: After refactoring, the total number of tests reported by npx playwright test must be exactly 4.
Constraint: Do not create new files. Update only existing files in pageObjects and specs folders.
        // You've used 90% of your session limit