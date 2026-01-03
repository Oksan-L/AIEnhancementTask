const { expect } = require('@playwright/test');

class MobileNavigationPage {
  constructor(page) {
    this.page = page;
    
    // Mobile menu locators
    this.burgerMenuButton = page.locator('button[aria-label="Burger menu button"]');
    this.navigationMenu = page.locator('nav.Navigation_list__u4M5M').first();
  }

  async isBurgerMenuVisible() {
    await expect(this.burgerMenuButton).toBeVisible();
  }

  async clickBurgerMenu() {
    await this.burgerMenuButton.click();
  }

  async isNavigationMenuVisible() {
    await expect(this.navigationMenu).toBeVisible();
  }

  async clickCloseButton() {
    await this.burgerMenuButton.click();
  }

  async isNavigationMenuHidden() {
    await expect(this.navigationMenu).not.toBeVisible();
  }

  async verifyBurgerMenuIconState(expectedState) {
    const svg = this.burgerMenuButton.locator('svg');
    await expect(svg).toBeVisible();
    
    if (expectedState === 'hamburger') {
      const paths = svg.locator('path');
      const pathCount = await paths.count();
      expect(pathCount).toBeGreaterThan(1);
    } else if (expectedState === 'close') {
      const path = svg.locator('path');
      const dValue = await path.getAttribute('d');
      expect(dValue).toContain('M14 1.03683L1 14.1565');
    }
  }
}

module.exports = MobileNavigationPage;
