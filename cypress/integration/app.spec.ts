describe("App navigation", () => {
  beforeEach(() => {
    // by default, with "/" Cypress will visit the baseUrl defined in cypress.json
    cy.visit("/");
  });

  it("can increment the counter", () => {
    cy.findByText(/count: 0/i).should("exist");

    // find the increment button and increment two times
    cy.findByRole("button", { name: /increment/i })
      .click()
      .click();

    cy.findByText(/count: 2/i).should("exist");
  });

  it("can decrement the counter", () => {
    cy.findByText(/count: 0/i).should("exist");

    // find the decrement button and decrement two times
    cy.findByRole("button", { name: /decrement/i })
      .click()
      .click();

    cy.findByText(/count: -2/i).should("exist");
  });
})

export {}
