const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    // Navigation menu locators
    this.servicesMenu = page.locator('nav').getByRole('link', { name: 'Services' });
    this.qaOutsourcingServicesLink = page.locator('a[href="/qa-outsourcing-services/"]');
  }

  async navigate() {
    await this.page.goto('https://luxequality.com/');
  }

  async clickServicesMenu() {
    await this.servicesMenu.hover();
  }

  async clickQAOutsourcingServices() {
    await this.qaOutsourcingServicesLink.click();
  }

  async navigateToQAOutsourcingServices() {
    await this.clickServicesMenu();
    await this.clickQAOutsourcingServices();
  }
}

module.exports = HomePage;

