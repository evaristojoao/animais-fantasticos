export default function initAnimaNumeros() {
    function animaNumeros() { // Função que anima os números
        const numeros = document.querySelectorAll('[data-numero]'); // Seleciona todos os elementos com o atributo `data-numero`

        numeros.forEach((numero) => { // Para cada elemento selecionado
            const total = +numero.innerText; // Obtém o valor total do número (convertido para número)
            const inscremento = Math.floor(total / 100); // Calcula o incremento dividindo o total por 100
            let start = 0; // Define o valor inicial como 0
            const timer = setInterval(() => { // Cria um intervalo que será executado a cada 25ms multiplicado por um valor aleatório
                start = start + inscremento; // Incrementa o valor inicial
                numero.innerText = start; // Atualiza o texto do elemento com o valor inicial
                if (start > total) { // Se o valor inicial for maior que o total
                    numero.innerText = total; // Define o texto do elemento como o valor total
                    clearInterval(timer); // Limpa o intervalo
                }
            },25 * Math.random());
        });
    }

    function handleMutation(mutation) { // Função que lida com as mutações observadas
        if (mutation[0].target.classList.contains('ativo')) { // Se o alvo da mutação contiver a classe 'ativo'
            observer.disconnect(); // Desconecta o observador
            animaNumeros(); // Chama a função que anima os números
        }
    }

    const observerTarget = document.querySelector('.numeros'); // Seleciona o alvo do observador
    const observer = new MutationObserver(handleMutation); // Cria uma instância de MutationObserver e passa a função de callback

    observer.observe(observerTarget,{ attributes: true }); // Inicia a observação do alvo com a configuração de observar atributos
}