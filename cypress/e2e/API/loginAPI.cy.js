/// <reference types='cypress'/>

import {faker} from '@faker-js/faker'
import { method } from 'cypress/types/bluebird'
import { loginPage } from '../../page_object/loginPagePom';


// const registeredEmail= "ssss@test.com";

describe("Login page-PO", () => {
    before(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        
    })
    beforeEach("Login API", () =>{
     
        // cy.LoginViaApi();
     
    });

    it.only("Negative case- login invalid pass Login API", () =>{
        // const randomPass = faker.internet.password();
        //nacin za dobavljanje vrednosti iz enviromenta
        let validEmail = Cypress.env('registeredEmail');
        let validPassword = Cypress.env('validPassword')
        // const{email, validPassword} = Cypress.env({});
        cy.LoginViaApi(validEmail,validPassword);
        cy.visit('');
        cy.wait(2000)
        // cy.url().should('contain', 'login')
        // cy.wait(2000);
    })


    it("Negative case- login invalid email Login API", () =>{
        cy.LoginViaApi("ssss1@test.com","1234567");
        cy.visit('');
        cy.wait(2000)
        cy.url().should('contain', 'login')
        cy.wait(2000);
    })

    it.only('Login user intercept',()=>{
    cy.intercept({
            method: "POST",
            url:  'https://gallery-api.vivifyideas.com/api/auth/login',
        }).as('succesfullLogin')

        cy.visit('/login')
        loginPage.loginUser(Cypress.env('registeredEmail'),Cypress.env('validPassword'))

        cy.wait('@succesfullLogin').then((res)=>{
            console.log(res.response);
            let token = res.response.body.access_token;
            expect(token).to.be.a('string')
            expect(res.response.statusCode).eq(200)
        })

    })
})