




context('TodoMVC', () => {

   it('', () =>{

        cy.visit("https://todomvc.com/examples/angularjs/#/")

        cy.get("input.new-todo").type('Estudar automação de testes{enter}')
        cy.get("input.new-todo").type('Estudar Matematica{enter}')
        cy.get("input.new-todo").type('Estudar Fisica{enter}')

        //Validação

        cy.get('ul.todo-list li').should('have.length', 3)

   })

});