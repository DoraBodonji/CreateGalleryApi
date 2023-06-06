/// <reference types='cypress'/>

import {faker} from '@faker-js/faker'
import {createGallery, createGalleryPage} from '../page_object/createGalleryPagePom'
import { loginPage } from '../page_object/loginPagePom';
import {commonElements} from '../page_object/commonElements'
before(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
    }); 

beforeEach(()=>{
    cy.visit('login');
    // loginPage.emailInputField.type('test111@test.com');
    // loginPage.passwordInputField.type('12345678');
    // loginPage.submitButton.click();
    loginPage.loginUser('test111@test.com','12345678')
    cy.wait(3000)
    cy.visit('create')
})
describe('create gallery', ()=>{

    it('Create Gallery', () => {
        createGalleryPage.createGalleryTab.click();
        createGalleryPage.titleInputField.type('Cat');
        createGalleryPage.descriprtionInputField.type('Mjau');
        createGalleryPage.imagesInputField.type('https://res.cloudinary.com/demo/image/upload/w_300/kitten.jpg');
        createGalleryPage.submitButton.click();

       commonElements.galleryName.eq(0).should('contain', 'Cat'); //asertacija
    });

    it('Without Title', () => {
        createGalleryPage.createGalleryTab.click();
        createGalleryPage.descriprtionInputField.type('Mjau');
        createGalleryPage.imagesInputField.type('https://res.cloudinary.com/demo/image/upload/w_300/kitten.jpg');
        createGalleryPage.submitButton.click();
    });

    it('Title with 1 character', () => {
        createGalleryPage.createGalleryTab.click();
        createGalleryPage.titleInputField.type('C');
        createGalleryPage.descriprtionInputField.type('Mjau');
        createGalleryPage.imagesInputField.type('https://res.cloudinary.com/demo/image/upload/w_300/kitten.jpg');
        createGalleryPage.submitButton.click();
    });

    it('All empty fields', () => {
        createGalleryPage.createGalleryTab.click();
        createGalleryPage.submitButton.click();
    });

    
    it('More than one url in images input', () => {
        createGalleryPage.createGalleryTab.click();
        createGalleryPage.titleInputField.type('Cat');
        createGalleryPage.descriprtionInputField.type('Mjau');
        createGalleryPage.imagesInputField.type('https://res.cloudinary.com/demo/image/upload/w_300/kitten.jpghttps://res.cloudinary.com/demo/image/upload/w_300/kitten.jpg');
        createGalleryPage.submitButton.click();
    });

    it('Images field with gif extension', () => {
        createGalleryPage.createGalleryTab.click();
        createGalleryPage.titleInputField.type('Cat');
        createGalleryPage.descriprtionInputField.type('Mjau');
        createGalleryPage.imagesInputField.type('https://res.cloudinary.com/demo/image/upload/w_300/kitten.gif');
        createGalleryPage.submitButton.click();
    });

    
    it('Title with 2 character', () => {
        createGalleryPage.createGalleryTab.click();
        createGalleryPage.titleInputField.type('Ca');
        createGalleryPage.descriprtionInputField.type('Mjau');
        createGalleryPage.imagesInputField.type('https://res.cloudinary.com/demo/image/upload/w_300/kitten.jpg');
        createGalleryPage.submitButton.click();
    });

    it('Title that starts with spaces', () => {
        createGalleryPage.createGalleryTab.click();
        createGalleryPage.titleInputField.type(' Cat');
        createGalleryPage.descriprtionInputField.type('Mjau');
        createGalleryPage.imagesInputField.type('https://res.cloudinary.com/demo/image/upload/w_300/kitten.jpg');
        createGalleryPage.submitButton.click();
    });

    it('Description with 1 characters', () => {
        createGalleryPage.createGalleryTab.click();
        createGalleryPage.titleInputField.type('Cat');
        createGalleryPage.descriprtionInputField.type('M');
        createGalleryPage.imagesInputField.type('https://res.cloudinary.com/demo/image/upload/w_300/kitten.jpg');
        createGalleryPage.submitButton.click();
    });


    

})