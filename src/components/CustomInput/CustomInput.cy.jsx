import React from 'react'
import CustomInput from './CustomInput'

describe('CustomInput Component', () => {
  beforeEach(() => {
    cy.mount(
        <CustomInput
            placeholder="Enter text"
            type="text"
            validate={(value) => (value.length < 3 ? 'Input too short' : '')}
            value=""
            handleChange={cy.stub().as('handleChange')}
            name="testInput"
        />
    );
  });

  it('renders the input field', () => {
    cy.get('input[placeholder="Enter text"]').should('exist');
  });

  it('displays an error message for invalid input', () => {
    cy.get('input[placeholder="Enter text"]').type('ab');
    cy.get('.error-message').should('contain.text', 'Input too short');
    cy.get('input').should('have.class', 'error');
  });

  it('calls the handleChange function on input', () => {
    cy.get('input[placeholder="Enter text"]').type('new input');
    cy.get('@handleChange').should('have.been.called');
  });
});
