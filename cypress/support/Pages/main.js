class main{

    get textfield(){
        return    cy.get("[placeholder='Enter your todo']")
       }


       get add(){
        return cy.get('.bg-blue-600')
       }

       get delete(){
        return cy.get('.float-right')
       }

       
       

}

export default main