export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    
    if(botaoAbrir && botaoFechar && containerModal) {
      function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo'); // Exibir ou ocultar a modal.
      }
      function cliqueForaModal(event) {
        if(event.target === this) { // Verifica se o clique (event.target) é o próprio contêiner da modal (this).
          toggleModal(event); // Se for, chama a função toggleModal para fechar a modal. Isso permite que a modal seja fechada ao clicar fora de seu conteúdo, mas ainda dentro do contêiner.
        }
      }
    
      botaoAbrir.addEventListener('click', toggleModal);
      botaoFechar.addEventListener('click', toggleModal);
      containerModal.addEventListener('click', cliqueForaModal);
    }
  }
  