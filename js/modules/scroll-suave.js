export default class ScrollSuave { // Exporta a classe ScrollSuave como módulo padrão, permitindo importá-la com `import ScrollSuave from '...'`

    constructor(links, options) { // Construtor: recebe o seletor dos links (string) e opções (objeto)
      this.linksInternos = document.querySelectorAll(links); // Seleciona todos os elementos <a> que correspondem ao seletor (ex: 'a[href^="#"]')
  
      if (options === undefined) { // Se o parâmetro de opções não for passado...
        this.options = { behavior: 'smooth', block: 'start' }; // Define o comportamento padrão de rolagem: suave e alinhado ao topo da seção
        // ➤ `behavior: 'smooth'` ativa o scroll animado (em vez de instantâneo)
        // ➤ `block: 'start'` alinha a seção ao topo da janela
      } else {
        this.options = options; // Caso opções sejam fornecidas, usa o que foi passado
      }
  
      this.scrollToSection = this.scrollToSection.bind(this); // Faz o bind do método `scrollToSection` para manter o `this` referenciando à instância da classe
      // ➤ Isso é necessário porque `scrollToSection` será usado como callback de evento (onde o this pode ser reatribuído)
    }
  
    scrollToSection(event) { // Método que será chamado ao clicar em um link interno
      event.preventDefault(); // Impede o comportamento padrão do navegador (rolagem instantânea ao href)
      
      const href = event.currentTarget.getAttribute('href'); // Obtém o valor do atributo href do link clicado (ex: "#sobre")
      
      const section = document.querySelector(href); // Seleciona o elemento da seção correspondente ao href
      
      section.scrollIntoView(this.options); // Executa o scroll suave até a seção usando as opções definidas
      // ➤ `scrollIntoView()` é um método nativo que rola a página até o elemento
      // ➤ `this.options` controla o comportamento e posicionamento do scroll
    }
  
    addLinkEvent() { // Método que adiciona o evento de clique em cada link interno
      this.linksInternos.forEach((link) => { // Percorre todos os links encontrados com o seletor informado
        link.addEventListener('click', (event) => { // Adiciona um ouvinte de evento de clique em cada link
          this.scrollToSection(event); // Chama o método que executa a rolagem suave ao clicar
        });
      });
      // ➤ `forEach` permite iterar sobre uma NodeList, chamando a função callback para cada elemento
      // ➤ Cada link terá o evento de scroll suave associado individualmente
    }
  
    init() { // Método público para inicializar a classe e ativar o comportamento
      if (this.linksInternos.length) { // Verifica se existem links internos encontrados (garante que há o que ativar)
        this.addLinkEvent(); // Adiciona os eventos de clique aos links
      }
  
      return this; // Retorna a instância da classe (boa prática para encadeamento ou testes)
      // ➤ Por exemplo: `const scroll = new ScrollSuave(...).init();`
    }
  }
  