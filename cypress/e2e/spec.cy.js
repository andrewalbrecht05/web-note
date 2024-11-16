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

  it('Navigates to the create folder page and creates a new folder', () => {
    //cy.login();
    cy.visit('http://localhost:5001');
    cy.login();
    cy.get('.create_folder').click();
    cy.wait(500); // Wait for 0.5 seconds for redirection
    cy.url().should('include', '/create-folder');
    cy.get('input[name="title"]').type('My New Folder');
    cy.get('.create-folder-button').click();
    cy.wait(500); // Wait for 0.5 seconds for redirection
    cy.url().should('eq', 'http://localhost:5001/');
    cy.contains('My New Folder');
  });

  it('Creates a new note within a folder', () => {
    cy.login();
    cy.get('.create_folder').click();
    cy.wait(500); // Wait for 0.5 seconds for redirection
    cy.url().should('include', '/create-note');
    cy.get('input[name="title"]').type('My New Note');
    cy.get('select[name="folder_id"]').select('My New Folder');
    cy.get('.create-note-button').click();
    cy.wait(500); // Wait for 0.5 seconds for redirection
    cy.url().should('eq', 'http://localhost:5001/');
    cy.contains('My New Note');
  });

  it('Logs out a user', () => {
    cy.login();
    cy.get('.button__new-note').contains('Logout').click();
    cy.wait(500); // Wait for 0.5 seconds for redirection
    cy.url().should('include', '/login');
  });
});
