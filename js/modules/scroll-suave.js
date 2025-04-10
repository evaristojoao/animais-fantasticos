// Scroll suave ao clicar em links internos.
export default function initScrollSuave() {
    // Seleciona todos os links (<a>) dentro de um elemento com a classe js-menu cujo atributo href inicia com "#". Esses links apontam para âncoras internas da página.
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault(); // Impede o comportamento padrão do link, que seria pular imediatamente para a seção destino.
        const href = event.currentTarget.getAttribute('href'); // Obtém o valor do atributo href do link clicado, que indica qual seção deve ser rolada para a visualização.
        const section = document.querySelector(href); // Seleciona a seção da página que corresponde ao href obtido.

        // Usa o método scrollIntoView para rolar até a seção selecionada de forma suave.
        section.scrollIntoView({ // 
            behavior: 'smooth',
            block: 'start',
        });

        // forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //   top: topo,
        //   behavior: 'smooth',
        // });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click',scrollToSection);
    });
}
