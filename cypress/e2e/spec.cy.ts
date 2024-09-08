describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Search Tickets:')

    cy.get('[data-testid="search-control"]').type("Hello World");
    cy.get('[data-testid="search-button"]').click();
    cy.url().should("have.text", "/listing")
  })
})


describe("Test for Listing page", ()=>{
    it("visit page", ()=>{
      cy.viewport("iphone-3")
      cy.visit("/listing/helloworld")
    })
})