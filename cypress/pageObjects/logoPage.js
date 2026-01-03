export default class LogoPage {
  constructor() {
    this.internalPages = ['/software-testing-services/', '/contacts/', '/blog/'];
  }

  verifyLogoRedirect() {
    const randomPage = this.internalPages[Math.floor(Math.random() * this.internalPages.length)];
    cy.visit(randomPage);
    
    cy.prompt([
      "Locate the element with class 'Header_logo__mkFev' in the header",
      "Inside that element, click on the image with alt text 'Luxe Quality logo'",
      "Wait for 3000ms for the navigation to finish",
      "Verify that the URL has changed to 'https://luxequality.com/'",
      "Confirm that you are on the Home page by verifying the main title is visible"
    ]);
  }
}