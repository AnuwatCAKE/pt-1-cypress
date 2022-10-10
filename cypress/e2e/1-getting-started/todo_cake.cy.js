describe("todo First cake", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });
  it("display cypress should ", () => {
    cy.get(".todoapp").should("be.visible"); 
    cy.get(".todoapp h1").should("have.text", "todos");
    cy.get(".new-todo").should("be.visible");
    cy.get('.todo-list li').should('have.length', 2)
    cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
    cy.get(".todo-list li").last().should("have.text", "Walk the dog");
    cy.get(".info p")
      .first()
      .should("have.text", "Double-click to edit a todo");
    cy.get(".info p").last().should("have.text", "Forked from TodoMVC");
  });


  it("display cypress click ", () => {
    

        cy.get('.toggle').first().check()
        cy.get('.toggle').last().check()
        cy.get('#toggle-all').click
        cy.get('.filters li > .selected').click

       
      
        }
      );
    });

