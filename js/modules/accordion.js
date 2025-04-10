// Função initAccordion para configurar a funcionalidade de acordeão, comum em listas de FAQ.
export default function initAccordion() { 
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';

    if (accordionList.length) { // Verifica se existem elementos <dt> na lista. Se houver pelo menos um, o código interno é executado.
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass); // Adiciona a classe ativo ao elemento seguinte do primeiro <dt> (geralmente um <dd>, que contém a resposta), fazendo-o ficar visível.

        // Função interna activeAccordion, que será executada quando um <dt> for clicado.
        function activeAccordion() {
            this.classList.toggle(activeClass); // Utiliza toggle para adicionar ou remover a classe ativo no elemento <dt> que foi clicado (this refere-se ao elemento atual).
            this.nextElementSibling.classList.toggle(activeClass); // Aplica o mesmo toggle no próximo elemento irmão do <dt> (o <dd>), alternando sua visibilidade.
        }

        accordionList.forEach((item) => {
            item.addEventListener('click',activeAccordion);
        });
    }
}