# Test Cases for https://luxequality.com/

## Group 1: Playwright + Cursor IDE

### TC-01: Navigation to "QA Outsourcing Services" Page (Menu Bar)
**Preconditions:**
- Browser is opened at `https://luxequality.com/`.

**Steps:**
1. Locate the main navigation menu.
2. Click on the "Services" and "QA Outsourcing Services".

**Expected Result:**
- The URL changes to a path containing `/qa-outsourcing-services/`. 
- The main heading of the page contains the text "QA Outsourcing Services".

---

### TC-02: Contact Form Validation (Negative Test)
**Preconditions:**
- User is on the "Contact Us" page (`https://luxequality.com/contacts/`).

**Steps:**
1. Leave all mandatory fields (Name, Email, Message) empty.
2. Click the "Send Message" button.

**Expected Result:**
- The form is not submitted.
- Validation error messages appear below the required fields.

---

## Group 2: Playwright + Claude Desktop

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

---

## Group 3: Cypress Framework

### TC-05: Company Logo Visibility and Home Redirect
**Preconditions:**
- User is on any internal page of the website. (A list of several pages from which a random page is selected)

**Steps:**
1. Locate the company logo in the Header.
2. Click on the logo.

**Expected Result:**
1. The logo image is visible.
2. Clicking the logo redirects the user back to the Home page (`https://luxequality.com/`).

---

### TC-06: Visibility of "Case Studies" Section
**Preconditions:**
- The Home page is opened.

**Steps:**
1. Scroll down to the "Case Studies" section.

**Expected Result:**
- At least one case study card is visible.
- The card contains a title, image / description, and a "More about project" / "Full case study" button.