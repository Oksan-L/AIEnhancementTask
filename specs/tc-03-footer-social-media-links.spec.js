const { test, expect } = require('@playwright/test');
const HomePage = require('../pageObjects/HomePage');
const FooterPage = require('../pageObjects/FooterPage');

test.describe('TC-03: Footer Social Media Links Verification', () => {
  test('should verify all social media links are visible, clickable, and have correct attributes', async ({ page }) => {
    const homePage = new HomePage(page);
    const footerPage = new FooterPage(page);
    
    await homePage.navigate();
    await footerPage.scrollToFooter();
    await footerPage.isFooterVisible();
    
    await footerPage.verifySocialMediaLink(
      footerPage.upworkLink,
      'https://www.upwork.com/agencies/luxequality/'
    );
    
    await footerPage.verifySocialMediaLink(
      footerPage.linkedinLink,
      'https://www.linkedin.com/company/luxequality/'
    );
    
    await footerPage.verifySocialMediaLink(
      footerPage.facebookLink,
      'https://www.facebook.com/profile.php?id=100093211400603'
    );
    
    await footerPage.verifySocialMediaLink(
      footerPage.instagramLink,
      'https://www.instagram.com/luxequality_/'
    );
    
    await footerPage.verifySocialMediaLink(
      footerPage.behanceLink,
      'https://www.behance.net/LuxeQuality'
    );
    
    await footerPage.verifySocialMediaLink(
      footerPage.douLink,
      'https://jobs.dou.ua/companies/luxe-quality/'
    );
  });
});
