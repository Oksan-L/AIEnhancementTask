const { test, expect } = require('@playwright/test');
const HomePage = require('../pageObjects/HomePage');
const MobileNavigationPage = require('../pageObjects/MobileNavigationPage');

test.describe('TC-04: Mobile Navigation Menu Functionality (Responsive)', () => {
  test.use({
    viewport: { width: 375, height: 812 }
  });

  test('should open and close mobile navigation menu correctly', async ({ page }) => {
    const homePage = new HomePage(page);
    const mobileNavigationPage = new MobileNavigationPage(page);
    
    await homePage.navigate();
    
    await mobileNavigationPage.isBurgerMenuVisible();
    
    await mobileNavigationPage.clickBurgerMenu();
    await mobileNavigationPage.isNavigationMenuVisible();
    
    await mobileNavigationPage.clickCloseButton();
  });
});
