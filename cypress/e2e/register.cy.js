/// <reference types='cypress'/>

import {faker} from '@faker-js/faker'
import { registerPage } from '../page_object/registerPagePom';
import { commmonElements } from '../page_object/commonElements';

describe('register page', ()=>{

    before(()=>{
        cy.visit('register');
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        
    });


    // it('Register user', () => {
    //    cy.url().should('contain', 'register');
    //    registerPage.registerUser('Dora', 'Bo', 'test37@gmail.com', '12345678', '12345678');
    // //    registerPage.firstNameInputField.should('have.value','Dora');
    // // registerPage.firstNameInputField
    // // .should('have.value','');
    // // .type('Dora')
    // // .should('contain','Dora')
    //    commmonElements.myGalleriesBtn
    //    .should('be.visible')
    //    .and('have.css','color','rgb(255, 255, 255)');

    //    commmonElements.logoutBtn.should('be.visible');
    //    commmonElements.galleryName.eq(4).should('contain', 'Flower')
    // });



    it("Accepted terms and conditions isn't checked", () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get("button[type='submit']").click();
        cy.wait(2000);

        commmonElements.termsAndConditions
        .should('contain','The terms and conditions must be accepted.')
        .should('have.css','background-color', 'rgb(248, 215, 218)')
    });


    it.only('Register with spaces', () => {
        cy.visit('register');
        cy.get('#first-name').type(' ');
        cy.get('#last-name').type(' ');
        cy.get('#email').type('ssss119@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);

        cy.url().should('contain', 'register');
        commmonElements.h1.should('contain', 'Register');


    });


    it('Exceeding maximum characters for the first name', () => {
        var a = '';
        for(let i = 0; i < 257; i++){
            a += 'a';
        }
        cy.visit('register');
        cy.get('#first-name').type(a);
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);

        cy.url().should('contain', 'register');
    });


    it('Exceeding maximum characters for the last name', () => {
        var a = '';
        for(let i = 0; i < 257; i++){
            a += 'a';
        }
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type(a);
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
        cy.url().should('contain', 'register');
    });


    it('Email validation - email without ".com"', () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss199@test');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);

        commmonElements.emailAlert.should('contain','The email must be a valid email address.')
    });


    it('Email validation - email without "@"', () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);

        cy.url().should('contain', 'register');
    });


    it('Password with 8 characters all letters', () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('aaaaaaaa');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);

        commmonElements.passAlert
        .should('contain','The password confirmation does not match.')
        .should('have.css','background-color', 'rgb(248, 215, 218)')
    });


     
})



