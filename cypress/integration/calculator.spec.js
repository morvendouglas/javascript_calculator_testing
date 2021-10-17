describe("Calculator", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('number buttons should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#running-total').should('contain', '2')
  })

  it('should do the arithmetical operations that update the display with the result of the operation', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('#running-total').should('contain', '4')
  })

  it('should be able to do multiple operations chained together', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('#running-total').should('contain', '2')
  })

  // Is the output as expected for a range of numbers (for example, positive, negative,
  //  decimals and very large numbers)?

  it('should should return a negative number', () => {
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('#running-total').should('contain', '-2')

  })

  it('should return a decimal number', () => {
    cy.get('#number7').click()
    cy.get('#operator-divide').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('#running-total').should('contain', '1.4')

  })

  it('should use a decimal number', () => {
    cy.get('#number2').click()
    cy.get('#decimal').click()
    cy.get('#number2').click()
    cy.get('#operator-divide').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('#running-total').should('contain', '0.44000000000000006')

  })

  it('should return a large number', () => {
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#operator-multiply').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('#running-total').should('contain', '998001')

  })

  // What does the code do in exceptional circumstances? Specifically,
  // if you divide by zero, what is the effect? Write a test to describe 
  // what you'd prefer to happen, and then correct the code to make that
  // test pass (you will need to modify the Calculator model to meet this
  // requirement).






})