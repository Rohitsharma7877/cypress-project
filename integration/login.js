describe('Goodread', ()=>{
    it('go to google page',()=>{
        cy.visit('https://www.goodreads.com/');
        cy.contains('Sign In').should('have.text', 'Sign In').click();
        cy.contains('Sign in with email').click();
        cy.get('#ap_email').type('rohitsharma.sharma194@gmail.com');
        cy.get('#ap_password').type('rohit123')
    })
})



