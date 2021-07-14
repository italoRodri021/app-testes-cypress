describe("Teste do App WEB", () => {
  // -> Teste da req lista de usuarios
  it('Lista de usuarios - "home-page" ', () => {
    cy.visit("/home"); // -> Rota
    // -> Tamanho da lista
    cy.get('[data-cy="ion-item-listUsers"]').should("have.length", 7);
  });

  // -> Teste de formulário
  it("Teste de Formulario", () => {
    
    cy.visit("/home");

    // -> Validando se o texto digitado está correto
    cy.get(".input-text")
      .type("Italo Rodrigues dos Santos")
      .should("have.value", "Italo Rodrigues dos Santos");
  });

  it("mostra a página de carregamento", () => {
    cy.visit("/"); // -> Defina rota de carregamento
    cy.contains("Bem-vindo ao meu nosso app");
    /**
     * cy.contains -> Testa se a pagina possui uma mensagem de boas vindas
     * "Bem-vindo ao meu nosso app"
     **/
  });

  it('mostra a página "Page About" ', () => {
    cy.visit("/about"); // -> Defina a rota "about"
    cy.contains("Sobre o app");
    /**
     * cy.contains -> Testa se existe o texto "Sobre o app"
     */
  });

  /*
    it('Testando chamadas com resposta em JSONs',() => {
        // -> Interceptando dados para testar
        cy.intercept({ method: 'GET', url: 'https://google.com.br', fixture: 'data'})
        .as('getProducts');
        cy.visit('/product'); // -> Defina a rota "product"
        cy.wait('[@getProducts]');
        cy.get('ion-card').should('have.length', 5)
    });
*/

  it('Testando Botao Salvar "Page About', () => {
    // -> O componente a ser testado pode ser chamado diretor
    cy.get("[data-cy=btn-save]").click();
  });

  it('Testando Botoes pagina "Page About" ', () => {
    cy.visit("/about"); // -> Defina a rota "about"
    /**
     * Testando se o button não é visivel
     */
    cy.get("ion-button").should("be.not.visible");
  });

  it('Testando Arrays da "Page Product"', () => {
    cy.visit("/product"); // -> Defina a rota "product"
    cy.get("ion-item").should("have.length", 5);
    /**
     * cy.get().should -> Especifica que o
     */
  });
});
