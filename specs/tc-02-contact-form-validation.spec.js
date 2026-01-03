const { test, expect } = require('@playwright/test');
const ContactPage = require('../pageObjects/ContactPage');

test.describe('TC-02: Contact Form Validation (Negative Test)', () => {
  test('should display validation errors when submitting empty required fields', async ({ page }) => {
    const contactPage = new ContactPage(page);

    // Precondition: User is on the "Contact Us" page
    await contactPage.navigate();

    // Steps:
    // 1. Leave all mandatory fields (Name, Email, Message) empty
    // Note: Message is optional according to the form, so we only validate Name and Email

    // 2. Click the "Send Message" button
    await contactPage.clickSendMessage();

    // Expected Result:
    // - The form is not submitted
    // - Validation error messages appear below the required fields
    await contactPage.verifyFormNotSubmitted();
  });
});

