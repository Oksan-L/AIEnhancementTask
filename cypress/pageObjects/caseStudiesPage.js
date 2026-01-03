export default class CaseStudiesPage {
  verifyCaseStudiesVisibility() {
    cy.visit('/');
    
    cy.prompt([
      "Scroll the page down until the 'Case Studies' section is fully visible",
      "Check that multiple project cards are displayed in the case studies area",
      "Verify that each project card contains a visible title or project name",
      "Verify that each card has a short text description of the project",
      "Check that a button or link like 'Full case study' or 'More about project' is present on the cards"
    ]);
  }
}