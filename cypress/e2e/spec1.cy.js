describe('App E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5001'); // Adjust URL if needed
  });

  it('Should redirect to login page if not authenticated', () => {
    cy.url().should('include', '/login');
  });

  it('Logs in a user', () => {
    cy.get('input[name="name"]').type('andrew');
    cy.get('input[name="password"]').type('qwerty');
    cy.get('.login-button').click();
    cy.wait(1000); // Wait for 1 second for redirection
    cy.url().should('eq', 'http://localhost:5001/');
  });
})