// Objetos
// Constructor Functions
// EXEMPLO REAL

  const Dom = {
    selector: 'li',
    element() {
      return document.querySelector(this.selector);
    },
    ativar() {
        this.element().classList.add('ativar');
    }
  }

  Dom.ativar(); // ativa a classe ativar no li
  Dom.selector = 'ul';
  Dom.ativar(); // ativa a classe ativar no ul