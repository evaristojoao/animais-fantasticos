// Exporta a função `initAnimacaoScroll` como padrão
export default function initAnimacaoScroll() {
    // Seleciona todas as seções com o atributo `data-anime="scroll"`
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    // Verifica se existem seções selecionadas
    if(sections.length) {
      // Calcula a metade da altura da janela do navegador
      const windowMetade = window.innerHeight * 0.6;
  
      // Função que anima a rolagem
      function animaScroll() {
        // Para cada seção selecionada
        sections.forEach((section) => {
          // Obtém a distância do topo da seção em relação ao topo da janela
          const sectionTop = section.getBoundingClientRect().top;
          // Verifica se a seção é visível (se está acima da metade da janela)
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          // Se a seção for visível, adiciona a classe 'ativo'
          if(isSectionVisible)
            section.classList.add('ativo');
          // Se a seção não for visível e tiver a classe 'ativo', remove a classe 'ativo'
          else if(section.classList.contains('ativo')) {
            section.classList.remove('ativo');
          }
        })
      }
  
      // Chama a função `animaScroll` para animar as seções ao carregar a página
      animaScroll();
  
      // Adiciona um listener de evento de rolagem para chamar a função `animaScroll`
      window.addEventListener('scroll', animaScroll);
    }
}