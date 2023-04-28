
import login from "../../support/Pages/login"
import main from "../../support/Pages/main"
import registration from "../../support/Pages/registration"
var crypto = require("crypto");

let emailstring = crypto.randomBytes(3).toString('hex');
let email = emailstring + Math.floor(Math.random() * 1000000000).toString()
let emailconcat = email + "@sharklasers.com"
let password = "pass" + Math.floor(Math.random() * 1000000000).toString()
let name = "name" + Math.floor(Math.random() * 1000000000).toString()
let test =  "test"

describe("Registration",()=>{
 const loginPage = new login()
 const mainPage = new main()
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

 it("Create and delete a todo",()=>{
    cy.visit('/')
    loginPage.email(emailconcat)
    loginPage.password(password)
    loginPage.signIn.click()
 mainPage.textfield.type(test)
  mainPage.add.click()

  // validate test added
  cy.contains("test")
  mainPage.delete.click()
  cy.wait(3000)
  cy.contains('test').should('not.exist');

})





})