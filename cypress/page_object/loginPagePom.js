class LoginPage {

    get emailInputField(){
        return cy.get('#email')
    }

    get passwordInputField(){
        return cy.get('#password');
    }

    get submitButton(){
        return cy.get("button[type='submit']");
    }

    loginUser(email, pass) {
        this.passwordInputFieldemailInputField.type(email);
        this.passwordInputField.type(pass);
        this.submitButton.click();
    }
}

export const loginPage = new LoginPage();