const { expect } = require('@playwright/test');

class FooterPage {
  constructor(page) {
    this.page = page;
    
    // Footer section locator
    this.footer = page.locator('footer');
    
    // Social media links locators
    this.upworkLink = page.locator('a[aria-label="upwork icon"][href="https://www.upwork.com/agencies/luxequality/"]');
    this.linkedinLink = page.locator('a[aria-label="linkedin icon"][href="https://www.linkedin.com/company/luxequality/"]');
    this.facebookLink = page.locator('a[aria-label="facebook icon"][href="https://www.facebook.com/profile.php?id=100093211400603"]');
    this.instagramLink = page.locator('a[aria-label="instagram icon"][href="https://www.instagram.com/luxequality_/"]');
    this.behanceLink = page.locator('a[aria-label="behance icon"][href="https://www.behance.net/LuxeQuality"]');
    this.douLink = page.locator('a[aria-label="dou icon"][href="https://jobs.dou.ua/companies/luxe-quality/"]');
  }

  async scrollToFooter() {
    await this.footer.scrollIntoViewIfNeeded();
  }

  async isFooterVisible() {
    await expect(this.footer).toBeVisible();
  }

  async isSocialMediaLinkVisible(linkLocator) {
    await expect(linkLocator).toBeVisible();
  }

  async getSocialMediaLinkHref(linkLocator) {
    return await linkLocator.getAttribute('href');
  }

  async getSocialMediaLinkTarget(linkLocator) {
    return await linkLocator.getAttribute('target');
  }

  async verifySocialMediaLink(linkLocator, expectedHref) {
    await this.isSocialMediaLinkVisible(linkLocator);
    const href = await this.getSocialMediaLinkHref(linkLocator);
    expect(href).toBe(expectedHref);
    const target = await this.getSocialMediaLinkTarget(linkLocator);
    expect(target).toBe('_blank');
  }

  async verifyAllSocialMediaLinks() {
    await this.verifySocialMediaLink(this.upworkLink, 'https://www.upwork.com/agencies/luxequality/');
    await this.verifySocialMediaLink(this.linkedinLink, 'https://www.linkedin.com/company/luxequality/');
    await this.verifySocialMediaLink(this.facebookLink, 'https://www.facebook.com/profile.php?id=100093211400603');
    await this.verifySocialMediaLink(this.instagramLink, 'https://www.instagram.com/luxequality_/');
    await this.verifySocialMediaLink(this.behanceLink, 'https://www.behance.net/LuxeQuality');
    await this.verifySocialMediaLink(this.douLink, 'https://jobs.dou.ua/companies/luxe-quality/');
  }
}

module.exports = FooterPage;
