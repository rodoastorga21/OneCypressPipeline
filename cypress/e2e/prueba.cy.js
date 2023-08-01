describe('test 1', () => {
    it('Test 1', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        cy.get('#APjFqb').should('be.visible').type('emol.com')
    })

    it('Test 2', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        cy.get('#APjFqb').should('be.visible').type('lun.com')
    })
})
    