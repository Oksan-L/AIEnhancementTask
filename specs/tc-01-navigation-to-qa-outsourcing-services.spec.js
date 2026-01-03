const { test, expect } = require('@playwright/test');
const HomePage = require('../pageObjects/HomePage');
const QAOutsourcingServicesPage = require('../pageObjects/QAOutsourcingServicesPage');

test.describe('TC-01: Navigation to "QA Outsourcing Services" Page (Menu Bar)', () => {
  test('should navigate to QA Outsourcing Services page from main menu', async ({ page }) => {
    const homePage = new HomePage(page);
    const qaOutsourcingPage = new QAOutsourcingServicesPage(page);

    // Precondition: Browser is opened at https://luxequality.com/
    await homePage.navigate();

    // Steps:
    // 1. Locate the main navigation menu
    // 2. Click on the "Services" and "QA Outsourcing Services"
    await homePage.navigateToQAOutsourcingServices();

    // Expected Result:
    // - The URL changes to a path containing /qa-outsourcing-services/
    await qaOutsourcingPage.verifyURL();

    // - The main heading of the page contains the text "QA Outsourcing Services"
    await qaOutsourcingPage.verifyMainHeading();
  });
});

