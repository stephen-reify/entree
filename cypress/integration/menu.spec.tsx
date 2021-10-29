/// <reference types="cypress" />

describe("menu app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display Menu heading", () => {
    cy.findByRole("heading", { level: 1 });
  });

  it("should show the menu items", () => {
    cy.findByText("Fried Chicken");
    cy.findByText("Fried Okra");
  });

  it.only("should support adding a menu item and displaying it on the home page", () => {
    cy.findByText("Admin").click();
    cy.findByLabelText("Name").type("Fried Fried");
    cy.findByLabelText("Description").type("It will literally kill you.");
    cy.findByLabelText("Price").type("1.99");
    cy.findByRole("button", { name: "Save Menu Item" }).click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.findAllByText("Fried Fried");
  });
});
