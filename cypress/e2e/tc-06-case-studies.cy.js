import CaseStudiesPage from '../pageObjects/caseStudiesPage';

describe('Group 3: Cypress Framework (AI-Driven)', () => {
  const caseStudiesPage = new CaseStudiesPage();

  it('TC-06: Visibility of Case Studies Section', () => {
    caseStudiesPage.verifyCaseStudiesVisibility();
  });
});