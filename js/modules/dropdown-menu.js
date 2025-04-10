import outsideClick from './outsideclick.js'; // Importa a função outsideClick do módulo outsideclick.js

export default function initDropdownMenu() { // Exporta a função initDropdownMenu como padrão
    const dropdownMenus = document.querySelectorAll('[data-dropdown]'); // Seleciona todos os elementos com o atributo data-dropdown
    dropdownMenus.forEach(menu => { // Itera sobre cada elemento selecionado
      ['touchstart', 'click'].forEach(userEvent => { // Adiciona os eventos 'touchstart' e 'click' a cada elemento
        menu.addEventListener(userEvent, handleClick); // Adiciona o evento handleClick ao evento do usuário
      });
    });
  
    function handleClick(event) { // Define a função handleClick
      event.preventDefault(); // Previne o comportamento padrão do evento
      this.classList.add('active'); // Adiciona a classe 'active' ao elemento que disparou o evento
        outsideClick(this, ['touchstart', 'click'],() => { // Chama a função outsideClick passando o elemento, eventos e callback
            this.classList.remove('active'); // Remove a classe 'active' do elemento quando o callback é executado
        });
    };
}