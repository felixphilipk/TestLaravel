
import login from "../../support/Pages/login"
import registration from "../../support/Pages/registration"
var crypto = require("crypto");

let emailstring = crypto.randomBytes(3).toString('hex');
let email = emailstring + Math.floor(Math.random() * 1000000000).toString()
let emailconcat = email + "@sharklasers.com"
let password = "pass" + Math.floor(Math.random() * 1000000000).toString()
let name = "name" + Math.floor(Math.random() * 1000000000).toString()

describe("Registration",()=>{
 const loginPage = new login()
 const registrationPage = new registration()

    it("Registration", () => { 
        
        cy.visit('/')
        loginPage.signUp.click()
        registrationPage.name.type(name)
        registrationPage.email.type(emailconcat)
        registrationPage.password.type(password)
        registrationPage.Register.click()
        cy.wait(10000)

        // assertions 
        cy.get('.capitalize').should('contain.text', 'Welcome');


})


it("Registered User Login",()=>{
    cy.visit('/')
    loginPage.email(emailconcat)
    loginPage.password(password)
    loginPage.signIn.click()
  // assertions 
  cy.get('.capitalize').should('contain.text', 'Welcome');

})



})