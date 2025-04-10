// Crie um objecto de um cachorro que represente
// um labrador preto com 10 anos, que late ao 
// ver um homem

var cachorro = {
  raca: 'labrador',
  idade: 10,
  cor: 'preto',
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}

var pessoa = {
  nome: 'João',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true
}

console.log(pessoa.nome)

var quadrado = {
  lados: 4,
  area(lado) { // método
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  }
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))



