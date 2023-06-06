/// <reference types='cypress'/>

import {faker} from '@faker-js/faker'
import { loginPage } from '../page_object/loginPagePom';
import { commmonElements } from '../page_object/commonElements';


describe('register page', ()=>{

    before(()=>{
        cy.visit('login');
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        // loginPagePom.loginUser(pa upisemo email i pass)
    });


    it('Login user', () => {
        loginPage.emailInputField.type('test111@test.com');
        loginPage.passwordInputField.type('12345678');
        loginPage.submitButton.click();
        cy.wait(2000);
    });
})


describe('Gallery CRUD via API', () => {

})