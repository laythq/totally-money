describe('Feature Test', () => {
  it('loads index with Student and Income both checked, and three available cards', () => {
    cy.visit('http://localhost:3000')
    cy.get('.AvailableCards').children().should('have.length', 5)
    cy.get('#isStudent').should('checked')
    cy.get('#highIncome').should('checked')
  })

  it('User Story 1: User is a student with high income and selects all three cards', () => {
    cy.visit('http://localhost:3000')
    cy.get("[name='Student Life']").click({ force: true})
    cy.get("[name='Anywhere Card']").click({ force: true})
    cy.get("[name='Liquid Card']").click({ force: true})
    cy.get('.TotalAvailableCredit > p').should('contain', '£4500')
  })

  it('User Story 2: User is a student with high income and selects Student Life and Anywhere Card', () => {
    cy.visit('http://localhost:3000')
    cy.get("[name='Student Life']").click({ force: true})
    cy.get("[name='Anywhere Card']").click({ force: true})
    cy.get('.TotalAvailableCredit > p').should('contain', '£1500')
  })

  it('User Story 3: User is a student with high income and selects Student Life', () => {
    cy.visit('http://localhost:3000')
    cy.get("[name='Student Life']").click({ force: true})
    cy.get('.TotalAvailableCredit > p').should('contain', '£1200')
  })

  it('User Story 4: User is not a student, with high income, and selects Anywhere Card and Liquid Card', () => {
    cy.visit('http://localhost:3000')
    cy.get('#isNotStudent').click()
    cy.get("[name='Liquid Card']").click({ force: true})
    cy.get("[name='Anywhere Card']").click({ force: true})
    cy.get("[name='Student Life']").should('not.exist')
    cy.get('.TotalAvailableCredit > p').should('contain', '£3300')
  })

  it('User Story 5: User is not a student, with low income, and selects Anywhere Card', () => {
    cy.visit('http://localhost:3000')
    cy.get('#isNotStudent').click()
    cy.get('#lowIncome').click()
    cy.get("[name='Liquid Card']").should('not.exist')
    cy.get("[name='Student Life']").should('not.exist')
    cy.get("[name='Anywhere Card']").click({ force: true})
    cy.get('.TotalAvailableCredit > p').should('contain', '£300')
  })

  it('User Story 6: User is a student, with low income, and selects Anywhere Card and Student Life', () => {
    cy.visit('http://localhost:3000')
    cy.get('#lowIncome').click()
    cy.get("[name='Student Life']").click({ force: true})
    cy.get("[name='Anywhere Card']").click({ force: true})
    cy.get("[name='Liquid Card']").should('not.exist')
    cy.get('.TotalAvailableCredit > p').should('contain', '£1500')
  })

  it('User Story 7: User is a student, with low income, and selects Anywhere Card and Student Life, then deselects Anywhere Card', () => {
    cy.visit('http://localhost:3000')
    cy.get('#lowIncome').click()
    cy.get("[name='Student Life']").click({ force: true})
    cy.get("[name='Anywhere Card']").click({ force: true})
    cy.get("[name='Anywhere Card']").click({ force: true})
    cy.get("[name='Liquid Card']").should('not.exist')
    cy.get('.TotalAvailableCredit > p').should('contain', '£1200')
  })

  it('User Story 8: User checks isNotStudent and lowIncome, and re-checks isStudent, and selects Anywhere Card', () => {
    cy.visit('http://localhost:3000')
    cy.get('#isNotStudent').click()
    cy.get('#lowIncome').click()
    cy.get("[name='Liquid Card']").should('not.exist')
    cy.get("[name='Anywhere Card']").click({ force: true})
    cy.get('.TotalAvailableCredit > p').should('contain', '£300')
  })
})
