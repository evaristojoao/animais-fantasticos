export default function initTooltip() { // Função principal que inicializa os tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]'); // Seleciona todos os elementos com o atributo data-tooltip
  
    tooltips.forEach((item) => { // Para cada elemento selecionado
      item.addEventListener('mouseover', onMouseOver); // Adiciona um evento de mouseover que chama a função onMouseOver
    });
  
    function onMouseOver(event) { // Função chamada quando o mouse passa sobre o elemento
      const tooltipBox = criarTooltipBox(this); // Cria a caixa de tooltip e armazena na constante tooltipBox
  
      onMouseMove.tooltipBox = tooltipBox; // Define a tooltipBox na função onMouseMove
      this.addEventListener('mousemove', onMouseMove); // Adiciona um evento de mousemove que chama a função onMouseMove
  
      onMouseLeave.tooltipBox = tooltipBox; // Define a tooltipBox na função onMouseLeave
      onMouseLeave.element = this; // Define o elemento atual na função onMouseLeave
      this.addEventListener('mouseleave', onMouseLeave); // Adiciona um evento de mouseleave que chama a função onMouseLeave
    }
  
    const onMouseLeave = { // Objeto que define o comportamento ao sair do elemento
      handleEvent() { // Método chamado quando o evento é disparado
        this.tooltipBox.remove(); // Remove a caixa de tooltip
        this.element.removeEventListener('mouseleave', onMouseLeave); // Remove o evento de mouseleave
        this.element.removeEventListener('mousemove', onMouseMove); // Remove o evento de mousemove
      }
    };
  
    const onMouseMove = { // Objeto que define o comportamento ao mover o mouse
      handleEvent(event) { // Método chamado quando o evento é disparado
        this.tooltipBox.style.top = event.pageY + 20 + 'px'; // Define a posição vertical da caixa de tooltip
        this.tooltipBox.style.left = event.pageX + 20 + 'px'; // Define a posição horizontal da caixa de tooltip
      }
    };
  
    function criarTooltipBox(element) { // Função que cria a caixa de tooltip
      const tooltipBox = document.createElement('div'); // Cria um elemento div
      const text = element.getAttribute('aria-label'); // Obtém o texto do atributo aria-label do elemento
      tooltipBox.classList.add('tooltip'); // Adiciona a classe tooltip ao elemento div
      tooltipBox.innerText = text; // Define o texto da caixa de tooltip
      document.body.appendChild(tooltipBox); // Adiciona a caixa de tooltip ao corpo do documento
      return tooltipBox; // Retorna a caixa de tooltip
    }
}

