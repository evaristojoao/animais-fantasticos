// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep'); // Seleciona o input do CEP
const btnCep = document.getElementById('btnCep'); // Seleciona o botão de buscar CEP
const resultadoCep = document.querySelector('.resultadoCep'); // Seleciona o elemento onde o resultado será exibido

btnCep.addEventListener('click', handleClick); // Adiciona um evento de clique ao botão

function handleClick(event) { // Função que lida com o clique no botão
  event.preventDefault(); // Previne o comportamento padrão do formulário
  const cep = inputCep.value; // Obtém o valor do CEP digitado
  buscaCep(cep); // Chama a função para buscar o CEP
}

function buscaCep(cep) { // Função que busca o CEP na API
  fetch(`https://viacep.com.br/ws/${cep}/json/`) // Faz uma requisição à API com o CEP
  .then(response => response.text()) // Converte a resposta para texto
  .then(body => {
    resultadoCep.innerText = body; // Exibe o resultado no elemento
  })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin em reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector('.btc'); // Seleciona o elemento onde o valor do Bitcoin será exibido

function fetchBtc() { // Função que busca o valor do Bitcoin na API
  fetch('https://blockchain.info/ticker') // Faz uma requisição à API
  .then(response => response.json()) // Converte a resposta para JSON
  .then(btcJson => {
    btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ','); // Exibe o valor de compra do Bitcoin em reais
  })
}

// setInterval(fetchBtc, 1000 * 30); // Atualiza o valor do Bitcoin a cada 30 segundos

fetchBtc(); // Chama a função para buscar o valor do Bitcoin

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector('.proxima'); // Seleciona o botão de próxima piada
const paragrafoPiada = document.querySelector('.piada'); // Seleciona o elemento onde a piada será exibida

function puxarPiada() { // Função que busca uma piada na API
  fetch('https://api.chucknorris.io/jokes/random') // Faz uma requisição à API
  .then(r => r.json()) // Converte a resposta para JSON
  .then(piada => {
    paragrafoPiada.innerText = piada.value; // Exibe a piada no elemento
  })
}

btnProxima.addEventListener('click', puxarPiada); // Adiciona um evento de clique ao botão de próxima piada

puxarPiada(); // Chama a função para buscar uma piada

function puxarPost() { // Função que busca posts na API
  fetch('https://jsonplaceholder.typicode.com/posts/') // Faz uma requisição à API
  .then(r => r.json()) // Converte a resposta para JSON
  .then(r => {
    console.log(r) // Exibe os posts no console
  })
}

puxarPost(); // Chama a função para buscar posts