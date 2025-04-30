// Exporta a função `outsideClick` como padrão
export default function outsideClick(element, events, callback) {
    const html = document.documentElement; // Seleciona o elemento HTML principal (documento)
    const outside = 'data-outside'; // Define uma string para o atributo de controle
  
    if(!element.hasAttribute(outside)) { // Verifica se o elemento não tem o atributo `data-outside`
      events.forEach(userEvent => { // Para cada evento na lista de eventos
        setTimeout(() => html.addEventListener(userEvent, handleOutsideClick)); // Adiciona um listener de evento ao HTML após um pequeno atraso
      });
      element.setAttribute(outside, ''); // Adiciona o atributo `data-outside` ao elemento
    }

    function handleOutsideClick(event) { // Função que lida com o clique fora do elemento
      if(!element.contains(event.target)) { // Verifica se o clique não foi dentro do elemento
        element.removeAttribute(outside); // Remove o atributo `data-outside` do elemento
        events.forEach(userEvent => { // Remove os listeners de evento do HTML
          html.removeEventListener(userEvent, handleOutsideClick);
        });
        callback(); // Executa a função de callback
      }
    }
}