describe('Blog app', function() {
    beforeEach(function() {
      cy.visit('http://localhost:3000')
    })
  
    it('front page can be opened', function() {
      cy.contains('username')
      cy.contains('password')
    })
    it('login form can be opened', function() {
        cy.contains('login').click()
    })
    it('user can log in', function() {
        cy.contains('login').click()
        cy.get('#username').type('root')
        cy.get('#password').type('sekret')
        cy.get('#login-button').click()
        cy.contains('root logged-in')
    })
    describe('when logged in', function() {
        beforeEach(function() {
          cy.contains('login').click()
          cy.get('input:first').type('root')
          cy.get('input:last').type('sekret')
          cy.get('#login-button').click()
        })
    
        it('a new blog can be created', function() {
          cy.contains('new blog').click()
          cy.get('#title').type('a blog created by cypress')
          cy.get('#author').type('Nasir Ibrahim Abba')
          cy.get('#url').type('https://fullstackopen.com/en/part6/flux_architecture_and_redux/')
          cy.get('#likes').type(1)
          cy.contains('addblog').click()
          cy.contains('a blog created by cypress ')      
        })
        it('a new blog can be view', function() {
            cy.contains('view').click()
            cy.contains('likes').click()
            cy.contains('delete').click()
        })
    })
})