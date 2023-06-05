/// <reference types='cypress'/>

import {faker} from '@faker-js/faker'

describe("Register", () => {
    before(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        
    })
    beforeEach("Register API", () =>{
       var eMail =faker.internet.email();
        cy.request({
        method: "POST",
        url:  'https://gallery-api.vivifyideas.com/api/auth/register',
        body:{"first_name":"Dora","last_name":"Dora","email":eMail,"password":"12345678","password_confirmation":"12345678","terms_and_conditions":true}
       }).its('body').then((response) => {
        cy.log(response);
        const token = response.access_token;
        expect(token).to.be.a('string');
        const userId = response.user_id;
        expect(userId).to.be.a('number');

        window.localStorage.setItem('token',token);
        window.localStorage.setItem('user_id',userId);
        cy.log(token);
        cy.log(userId);
       }) 
    });
    
    it("Login API", () =>{
        cy.visit("");

        cy.wait(2000);

    })
})

describe("Register without first-name", () => {
    before(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        
    })
    beforeEach("Register API", () =>{
       var eMail =faker.internet.email();
        cy.request({
        method: "POST",
        url:  'https://gallery-api.vivifyideas.com/api/auth/register',
        body:{"last_name":"Dora","email":eMail,"password":"12345678","password_confirmation":"12345678","terms_and_conditions":true}
       }).its('body').then((response) => {
        cy.log(response);
       }) 
    });

    
    
    it("Login API", () =>{
        cy.visit("");

        cy.wait(2000);

    })
})

describe('Email validation - email without ".com"', () => {
    before(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        
    })
    beforeEach("Register API", () =>{
       var eMail =faker.internet.email();
        cy.request({
        method: "POST",
        url:  'https://gallery-api.vivifyideas.com/api/auth/register',
        body:{"first_name":"Dora","last_name":"Dora","email":'test222@gmail',"password":"12345678","password_confirmation":"12345678","terms_and_conditions":true}
       }).its('body').then((response) => {
        cy.log(response);
       }) 
    });

    
    
    it("Login API", () =>{
        cy.visit("");

        cy.wait(2000);

    })
})

describe('Email validation - email without "@"', () => {
    before(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        
    })
    beforeEach("Register API", () =>{
       var eMail =faker.internet.email();
        cy.request({
        method: "POST",
        url:  'https://gallery-api.vivifyideas.com/api/auth/register',
        body:{"first_name":"Dora","last_name":"Dora","email":'test222gmail.com',"password":"12345678","password_confirmation":"12345678","terms_and_conditions":true}
       }).its('body').then((response) => {
        cy.log(response);
       }) 
    });

    
    
    it("Login API", () =>{
        cy.visit("");

        cy.wait(2000);

    })
})

describe('Password with 8 characters all letters', () => {
    before(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        
    })
    beforeEach("Register API", () =>{
       var eMail =faker.internet.email();
        cy.request({
        method: "POST",
        url:  'https://gallery-api.vivifyideas.com/api/auth/register',
        body:{"first_name":"Dora","last_name":"Dora","email":eMail,"password":"aaaaaaaa","password_confirmation":"aaaaaaaa","terms_and_conditions":true}
       }).its('body').then((response) => {
        cy.log(response);
       }) 
    });

    
    
    it("Login API", () =>{
        cy.visit("");

        cy.wait(2000);

    })
})

describe("Accepted terms and conditions isn't checked", () => {
    before(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        
    })
    beforeEach("Register API", () =>{
       var eMail =faker.internet.email();
        cy.request({
        method: "POST",
        url:  'https://gallery-api.vivifyideas.com/api/auth/register',
        body:{"first_name":"Dora","last_name":"Dora","email":eMail,"password":"12345678","password_confirmation":"12345678","terms_and_conditions":false}
       }).its('body').then((response) => {
        cy.log(response);
       }) 
    });

    
    
    it("Login API", () =>{
        cy.visit("");

        cy.wait(2000);

    })
})

