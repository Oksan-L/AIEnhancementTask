const { expect } = require('@playwright/test');

class ContactPage {
  constructor(page) {
    this.page = page;
    // Form field locators
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.messageTextarea = page.locator('#message');
    this.sendMessageButton = page.locator('button#send_message_button_contacts');
    
    // Error message locators
    this.nameError = page.locator('#name').locator('..').locator('span.Input_error_message__pxv16');
    this.emailError = page.locator('#email').locator('..').locator('span.Input_error_message__pxv16');
    this.messageError = page.locator('#message').locator('..').locator('span.Input_error_message__pxv16');
  }

  async navigate() {
    await this.page.goto('https://luxequality.com/contacts/');
  }

  async clickSendMessage() {
    await this.sendMessageButton.click();
  }

  async verifyNameError() {
    await expect(this.nameError).toBeVisible();
    await expect(this.nameError).toContainText('This is a required field');
  }

  async verifyEmailError() {
    await expect(this.emailError).toBeVisible();
    await expect(this.emailError).toContainText('This is a required field');
  }

  async verifyFormNotSubmitted() {
    // Verify we're still on the contact page (form didn't submit)
    await expect(this.page).toHaveURL(/.*contacts\/$/);
    // Verify error messages are visible
    await this.verifyNameError();
    await this.verifyEmailError();
  }
}

module.exports = ContactPage;

