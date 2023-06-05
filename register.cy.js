/// <reference types='cypress'/>

import {faker} from '@faker-js/faker'
import { registerPage } from '../page_object/registerPagePom';

describe('register page', ()=>{

    before(()=>{
        cy.visit('register');
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        
    });


    it('Register user', () => {
        registerPage.firstNameInputField.type('Dora');
        registerPage.lastNameInputField.type('Bo');
        registerPage.eMailInputField.type(`test111@test.com`);
        registerPage.passwordInputField.type('12345678');
        registerPage.passwordConfirmationInputField.type('12345678');
        registerPage.checkInput.click();
        registerPage.submitButton.click();
        cy.wait(2000);
    });
})



