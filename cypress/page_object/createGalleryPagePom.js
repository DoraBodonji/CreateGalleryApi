class CreateGallery {
    get createGalleryTab(){
        return cy.get(".nav-link").eq(2)
    }
    get titleInputField(){
        return cy.get("#title")
    }

    get descriprtionInputField(){
        return cy.get('#description')
    }

    get imagesInputField(){
        return cy.get('.form-control').eq(2)
    }

    get addImageButton(){
        return cy.get('button').contains('Add image')
    }

    get submitButton(){
        return cy.get('.btn').contains('Submit')
    }

    get cancelButton(){
        return cy.get(".btn").contains('Cancel')
    }
}

export const createGalleryPage = new CreateGallery();