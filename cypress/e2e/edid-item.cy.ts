describe('EdidItemComponent Cypress Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should toggle the "active" class on button click', () => {
    cy.get('app-edid-item button').should('not.have.class', 'active');

    cy.get('app-edid-item button').click({ multiple: true });

    cy.get('app-edid-item button').should('have.class', 'active');

    cy.get('app-edid-item button').click({ multiple: true });

    cy.get('app-edid-item button').should('not.have.class', 'active');
  });
});
