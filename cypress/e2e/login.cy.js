/// <reference types='cypress'/>

import {faker} from '@faker-js/faker'
import { loginPage } from '../page_object/loginPagePom';


describe('register page', ()=>{

    before(()=>{
        cy.visit('login');
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        
    });


    it('Login user', () => {
        loginPage.emailInputField.type('test111@test.com');
        loginPage.passwordInputField.type('12345678');
        loginPage.submitButton.click();
        cy.wait(2000);
    });
})