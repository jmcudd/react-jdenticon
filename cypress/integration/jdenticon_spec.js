describe("Jdenticon Test", () => {
  it("renders Jdenticon images", () => {
    cy.visit("/");

    // Check for the existence of the Jdenticon images
    cy.get('svg[data-jdenticon-value="Hello World"]').should("exist");
    cy.get('svg[data-jdenticon-value="React"]').should("exist");
    cy.get('svg[data-jdenticon-value="GitHub"]').should("exist");

    // Take screenshots of the Jdenticon images
    cy.get('svg[data-jdenticon-value="Hello World"]').screenshot(
      "Hello World Jdenticon"
    );
    cy.get('svg[data-jdenticon-value="React"]').screenshot("React Jdenticon");
    cy.get('svg[data-jdenticon-value="GitHub"]').screenshot("GitHub Jdenticon");

    // Optionally, take a screenshot of the entire page
    cy.screenshot("Full Page");
  });
});
