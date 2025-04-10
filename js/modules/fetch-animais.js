import initAnimaNumeros from './anima-numeros.js'; // Importa a função `initAnimaNumeros` do módulo `anima-numeros.js`

export default function initFetchAnimais() {
  async function fetchAnimais(url) { // Função assíncrona que busca os animais a partir de uma URL
    try {
      const animaisResponse = await fetch(url); // Faz uma requisição à URL e espera pela resposta
      const animaisJSON = await animaisResponse.json(); // Converte a resposta para JSON
      const numerosGrid = document.querySelector('.numeros-grid'); // Seleciona o elemento com a classe `numeros-grid`
      animaisJSON.forEach(animal => { // Para cada animal no JSON
        const divAnimal = createAnimal(animal); // Cria um elemento `div` para o animal
        numerosGrid.appendChild(divAnimal); // Adiciona o elemento `div` ao `numerosGrid`
      });
      initAnimaNumeros(); // Inicializa a animação dos números
    } catch(erro) { // Se ocorrer um erro
      console.log(erro); // Exibe o erro no console
    }
  }
  
  function createAnimal(animal) { // Função que cria um elemento `div` para o animal
    const div = document.createElement('div'); // Cria um elemento `div`
    div.classList.add('numero-animal'); // Adiciona a classe `numero-animal` ao `div`
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`; // Define o conteúdo HTML do `div`
    return div; // Retorna o `div`
  }
  
  fetchAnimais('./animaisapi.json'); // Chama a função `fetchAnimais` com a URL da API de animais
}