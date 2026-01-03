const { expect } = require('@playwright/test');

class QAOutsourcingServicesPage {
  constructor(page) {
    this.page = page;
    // Page heading locator
    this.mainHeading = page.locator('h1').filter({ hasText: 'QA Outsourcing Services' }).first();
  }

  async verifyURL() {
    await expect(this.page).toHaveURL(/.*qa-outsourcing-services\/$/);
  }

  async verifyMainHeading() {
    await expect(this.mainHeading).toBeVisible();
    await expect(this.mainHeading).toContainText('QA Outsourcing Services');
  }
}

module.exports = QAOutsourcingServicesPage;

