/// <reference types="cypress" />

describe("Automation", ()=>{
    it("Add Package", ()=>{
        //Login
        cy.visit("https://ecs-qa.kloudship.com")
        cy.get('#login-email').type("kloudship.qa.automation@mailinator.com")
        cy.get('#login-password').type("Password1")
        cy.get('.login-btn-container > .border-radius').click()
        cy.wait(3000)

        //Add Package
        cy.get('.count-card-wrapper > :nth-child(8)').click()
        cy.wait(3000)
        cy.get('.button-disabled > .mat-button-wrapper > .mat-icon').click()
        cy.get('#mat-input-1').type("FirstName_LastName")
        cy.get('#mat-input-2').clear()
        cy.get('#mat-input-2').type(2)
        cy.get('#mat-input-3').clear()
        cy.get('#mat-input-3').type(4)
        cy.get('#mat-input-4').clear()
        cy.get('#mat-input-4').type(8)
        cy.get('app-package-type-manage.ng-star-inserted > .mat-toolbar > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.wait(3000)

        //Logout
        cy.get('app-header.ng-star-inserted > .mat-toolbar > .mat-menu-trigger > .mat-button-wrapper > .mat-icon').click()
        cy.wait(2000)
        cy.get('.mat-menu-content > :nth-child(6)').click()
        cy.wait(3000)
    })

    it("Delete Package", ()=>{
         //Login
         cy.visit("https://ecs-qa.kloudship.com")
         cy.get('#login-email').type("kloudship.qa.automation@mailinator.com")
         cy.get('#login-password').type("Password1")
         cy.get('.login-btn-container > .border-radius').click()
         cy.wait(3000)

         //Delete Package
         cy.get('.count-card-wrapper > :nth-child(8)').click()
         cy.wait(3000)
         cy.contains('FirstName_LastName').click()
         cy.wait(3000)
         cy.get('.selected > .delete').click()
         cy.wait(3000)
         cy.get('.mat-card > :nth-child(2) > .mat-focus-indicator').click()
         
          //Logout
        cy.get('app-header.ng-star-inserted > .mat-toolbar > .mat-menu-trigger > .mat-button-wrapper > .mat-icon').click()
        cy.wait(2000)
        cy.get('.mat-menu-content > :nth-child(6)').click()
        cy.wait(3000)


    })
})