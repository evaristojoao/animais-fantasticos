// array
var videoGames = ['Switch','PS4','Xbox','3DS'];
var ultimoItem = videoGames.pop(); // retorna ultimo indice
console.log(ultimoItem)

console.log('---------------------------------');

// loops
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

console.log('---------------------------------');

for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === 'PS4') {
    break;
  }
}
console.log('---------------------------------');

// Exercicio: Crie uma array com os anos que o Brasil ganhou a copa 1959, 1962, 1970, 1994, 2002;
// Interaja com o array utilizando um loop, para mostrar na console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
var frutas = ['Banana','Pera','Maçã','Abacaxi','Uva']
frutas.forEach(function (fruta) {
    console.log(fruta);
});

console.log('---------------------------------');

var copa = ['1959','1962','1970','1994','2022']
copa.forEach(function (ano) {
  console.log(`O Brasil ganhou a copa de ${ano}`);
});

console.log('---------------------------------');

var frutas = ['Banana','Maçã','Pera','Uva','Melância']
for (let fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta]);
    if (frutas[fruta] === 'Pera') {
        break;
    };
};

var ultimaFruta = frutas[frutas.length - 1];
