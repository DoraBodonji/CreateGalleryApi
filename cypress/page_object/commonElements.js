class CommmonElements {
    get myGalleriesBtn(){
        return cy.get('a').contains('My Galleries')
    }
    get logoutBtn(){
        return cy.get('a').contains('Logout')
    }

    get galleryName(){
        return cy.get('.box-title');
    }

    get termsAndConditions(){
        return cy.get('.alert-danger')
    }

    get emailAlert(){
        return cy.get('.alert')
    }

    get passAlert(){
        return cy.get('.alert-danger')
    }

    get h1(){
        return cy.get('.title-style')
    }
}

export const commmonElements = new CommmonElements();