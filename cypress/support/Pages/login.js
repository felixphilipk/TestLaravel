class login {


 email(email){

    cy.get('#username').type(email)

}

password(password){

    cy.get('#password').type(password)
}


get signIn(){
 return    cy.get('.bg-blue-500')
}

get signUp(){

    return cy.get('.inline-block')
}

}

export default login 