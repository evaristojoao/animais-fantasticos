export default class Modal {
    constructor(botaoAbrir,botaoFechar,containerModal) {
        this.botaoAbrir = document.querySelector(botaoAbrir);
        this.botaoFechar = document.querySelector(botaoFechar);
        this.containerModal = document.querySelector(containerModal);

        // bind this ao callback para fazer referencia ao objeto da classe 
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueForaModal = this.cliqueForaModal.bind(this);
    }

    // Abre ou fecha o modal 
    toggleModal() {
        this.containerModal.classList.toggle('ativo');
    }

    // Adiciona o evento de toggle ao modal 
    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    // Fecha ao clicar no modal do lado de fora 
    cliqueForaModal(event) {
        if (event.target === this.containerModal) {
            this.toggleModal();
        }
    }

    // Adiciona os eventos aos elementos do modal 
    addModalEvents() {
        this.botaoAbrir.addEventListener('click',this.eventToggleModal);
        this.botaoFechar.addEventListener('click',this.eventToggleModal);
        this.containerModal.addEventListener('click',this.cliqueForaModal);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvents();
            return this; 
        }
    }
}
