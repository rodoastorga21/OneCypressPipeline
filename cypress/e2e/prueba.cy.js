describe('test 1', () => {
    it('user should be able to log in', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        cy.get('#APjFqb').should('be.visible').type('emol.com')
    })

    
})
    