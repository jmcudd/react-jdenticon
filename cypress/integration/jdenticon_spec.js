describe('Jdenticon Test', () => {
  it('renders Jdenticon images', () => {
    cy.visit('/');
    cy.get('svg[data-jdenticon-value="Hello World"]').should('exist');
    cy.get('svg[data-jdenticon-value="React"]').should('exist');
    cy.get('svg[data-jdenticon-value="GitHub"]').should('exist');
  });
});
