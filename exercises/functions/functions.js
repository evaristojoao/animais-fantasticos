function isTruthy(a) {
  return a;
}

function perimetro(lado) {
  return lado * 4;
}

function nomeCompleto(nome, sobrenome) {
  return `O meu nome é ${nome} ${sobrenome}`;
}

function parOuImpar(a) {
  var num = a % 2 === 0 ? "par" : "ímpar";
  return `O número é ${num}`;
}

function type(a) {
  return typeof a;
}

addEventListener("scroll", function () {
  console.log("João Evaristo");
});

addEventListener("click", function () {
  console.log("clickou");
});
