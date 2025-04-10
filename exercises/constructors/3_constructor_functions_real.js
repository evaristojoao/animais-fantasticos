// Objetos
// Constructor Functions
// EXEMPLO REAL
// Criar um novo objecto com as mesmas características do objecto anterior e até adicionar características novas (propriedades)

function Dom() {
    this.seletor = 'li';
    const element = document.querySelector(this.seletor);
    this.ativo = function () {
        element.classList.add('ativo');
    };
}

const lista = new Dom();
lista.seletor = 'ul';
lista.ativo();

const lastLi = new Dom();
lastLi.seletor = 'li:last-child';
lastLi.ativo();

//   Lembre-se de usar parâmetros (exemplo abaixo)
// Essa parametrização melhora o encapsulamento e facilita o reaproveitamento do mesmo construtor para manipular diversos elementos e estilos, ao contrário do primeiro exemplo, que era mais rígido e dependente de valores fixos.

function Dom(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function(classe) {
    element.classList.add(classe);
  };
}

const lista = new Dom('ul');
lista.ativo('ativo');

const lastLi = new Dom('li:last-child');
lastLi.ativo('ativo');

