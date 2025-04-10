export default function initTabNav() { // Inicializa a navegação por abas
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if (tabMenu.length && tabContent.length) { // Verifica se existem elementos para serem manipulados
        tabContent[0].classList.add('ativo'); // Adiciona a classe ativo à primeira seção de conteúdo, tornando-a visível (ativa) por padrão.

        // Percorre todas as seções de conteúdo e remove a classe ativo, garantindo que nenhuma delas esteja ativa antes de ativar a desejada.
        function activeTab(index) { 
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativo', direcao); // Adiciona a classe ativo à seção de conteúdo com o índice correspondente ao botão clicado.
        }

        // Itera sobre cada item do menu de abas, utilizando o índice para associar cada botão à sua respectiva seção.
        tabMenu.forEach((itemMenu, index) => { 
            itemMenu.addEventListener('click',() => {
                activeTab(index);
            });
        });
    }
}
