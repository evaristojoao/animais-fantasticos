function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  const andre = new Pessoa('André', 28);

  console.log(Pessoa.prototype); // retorna o objeto
  console.log(andre.prototype); // undefined

  // funcao.prototype - É possível adicionar novas propriedades e métodos ao objeto prototype.
  Pessoa.prototype.andar = function() {
    return this.nome + ' andou';
  }
  Pessoa.prototype.nadar = function() {
    return this.nome + ' nadou';
  }

  console.log(Pessoa.prototype); // retorna o objeto

  