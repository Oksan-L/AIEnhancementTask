import LogoPage from '../pageObjects/logoPage';

describe('Group 3: Cypress Framework (AI-Driven)', () => {
  const logoPage = new LogoPage();

  /**
   * TC-05: Company Logo Visibility and Home Redirect.
   * Згідно з Rule #8, всі перевірки знаходяться в одному блоці it().
   */
  it('TC-05: Company Logo Visibility and Home Redirect', () => {
    logoPage.verifyLogoRedirect();
  });
});