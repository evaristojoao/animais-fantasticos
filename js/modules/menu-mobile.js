// Importa a função `outsideClick` do módulo `outsideclick.js`
import outsideClick from './outsideclick.js';

// Exporta a função `initMenuMobile` como padrão
export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]'); // Seleciona o botão do menu com o atributo `data-menu="button"`
  const menuList = document.querySelector('[data-menu="list"]'); // Seleciona a lista do menu com o atributo `data-menu="list"`
  const eventos = ['click', 'touchstart']; // Define os eventos que serão utilizados
  
  if(menuButton) { // Verifica se o botão do menu existe
    function openMenu(event) { // Função que abre o menu
      menuList.classList.add('active'); // Adiciona a classe 'active' à lista do menu
      menuButton.classList.add('active'); // Adiciona a classe 'active' ao botão do menu
      outsideClick(menuList, eventos, () => { // Chama a função `outsideClick` para fechar o menu ao clicar fora dele
        menuList.classList.remove('active'); // Remove a classe 'active' da lista do menu
        menuButton.classList.remove('active'); // Remove a classe 'active' do botão do menu
      });
    }
    eventos.forEach(evento => menuButton.addEventListener(evento, openMenu)); // Adiciona os eventos ao botão do menu para abrir o menu
  }
}