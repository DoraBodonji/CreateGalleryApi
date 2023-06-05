class RegisterPage {

    get firstNameInputField() {
        return cy.get('#first-name')
    }

    get lastNameInputField(){
        return cy.get('#last-name')
    }

    get eMailInputField(){
        return cy.get('#email')
    }

    get passwordInputField(){
        return cy.get('#password')
    }

    get passwordConfirmationInputField(){
        return cy.get('#password-confirmation')
    }

    get checkInput(){
        return cy.get('.form-check-input')
    }

    get submitButton(){
        return cy.get("button[type='submit']")
    }

    registerUser(firstName, lastName, email, pass, confirmPass) {
        this.firstNameInputField.type(firstName);
        this.lastNameInputField.type(lastName);
        this.eMailInputField.type(email);
        this.passwordInputField.type(pass);
        this.passwordConfirmationInputField.type(confirmPass);
        this.checkInput.click();
        this.submitButton.click();
    }
}


export const registerPage = new RegisterPage();

