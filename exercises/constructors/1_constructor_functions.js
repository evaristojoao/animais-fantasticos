// Criar um novo objecto com as mesmas características do objecto anterior e até adicionar características novas (propriedades)
function Carro() { // Pascalcase em funções constructoras
    this.marca = 'Marca';
    this.preco = 0;
  }
  const honda = new Carro(); // instancia do objeto (objeto que vem do constructor)
  honda.marca = 'Honda';
  honda.preco = 4000;

  const fiat = new Carro();
  fiat.marca = 'Fiat';
  fiat.preco = 3000;

// FORMA 2
  function Carro2(marca, precoInicial) {
    this.taxa = 1.2;
    const precoFinal = precoInicial * this.taxa;
    this.marca = marca;
    this.preco = precoFinal;
  }
  const mazda = new Carro2('Mazda', 5000);


 
