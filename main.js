/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n    constructor(list) {\n        this.accordionList = document.querySelectorAll(list);\n        this.activeClass = 'ativo';\n    }\n\n    toggleAccordion(item) {\n        item.classList.toggle(this.activeClass);\n        item.nextElementSibling.classList.toggle(this.activeClass);\n    }\n\n    // adiciona os eventos ao accordion\n    addAccordionEvent() {\n        this.accordionList.forEach((item) => {\n            item.addEventListener('click',() => this.toggleAccordion(item));\n        });\n    }\n\n    // iniciar funçao\n    init() {\n        if (this.accordionList.length) {\n            // ativar primeiro item\n            this.toggleAccordion(this.accordionList[0]);\n            this.addAccordionEvent();\n        }\n        return this;\n    }\n}\n\n//# sourceURL=webpack:///./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n    function animaNumeros() { // Função que anima os números\n        const numeros = document.querySelectorAll('[data-numero]'); // Seleciona todos os elementos com o atributo `data-numero`\n\n        numeros.forEach((numero) => { // Para cada elemento selecionado\n            const total = +numero.innerText; // Obtém o valor total do número (convertido para número)\n            const inscremento = Math.floor(total / 100); // Calcula o incremento dividindo o total por 100\n            let start = 0; // Define o valor inicial como 0\n            const timer = setInterval(() => { // Cria um intervalo que será executado a cada 25ms multiplicado por um valor aleatório\n                start = start + inscremento; // Incrementa o valor inicial\n                numero.innerText = start; // Atualiza o texto do elemento com o valor inicial\n                if (start > total) { // Se o valor inicial for maior que o total\n                    numero.innerText = total; // Define o texto do elemento como o valor total\n                    clearInterval(timer); // Limpa o intervalo\n                }\n            },25 * Math.random());\n        });\n    }\n\n    function handleMutation(mutation) { // Função que lida com as mutações observadas\n        if (mutation[0].target.classList.contains('ativo')) { // Se o alvo da mutação contiver a classe 'ativo'\n            observer.disconnect(); // Desconecta o observador\n            animaNumeros(); // Chama a função que anima os números\n        }\n    }\n\n    const observerTarget = document.querySelector('.numeros'); // Seleciona o alvo do observador\n    const observer = new MutationObserver(handleMutation); // Cria uma instância de MutationObserver e passa a função de callback\n\n    observer.observe(observerTarget,{ attributes: true }); // Inicia a observação do alvo com a configuração de observar atributos\n}\n\n//# sourceURL=webpack:///./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n // Importa a função outsideClick do módulo outsideclick.js\n\nfunction initDropdownMenu() { // Exporta a função initDropdownMenu como padrão\n    const dropdownMenus = document.querySelectorAll('[data-dropdown]'); // Seleciona todos os elementos com o atributo data-dropdown\n    dropdownMenus.forEach(menu => { // Itera sobre cada elemento selecionado\n      ['touchstart', 'click'].forEach(userEvent => { // Adiciona os eventos 'touchstart' e 'click' a cada elemento\n        menu.addEventListener(userEvent, handleClick); // Adiciona o evento handleClick ao evento do usuário\n      });\n    });\n  \n    function handleClick(event) { // Define a função handleClick\n      event.preventDefault(); // Previne o comportamento padrão do evento\n      this.classList.add('active'); // Adiciona a classe 'active' ao elemento que disparou o evento\n        (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'],() => { // Chama a função outsideClick passando o elemento, eventos e callback\n            this.classList.remove('active'); // Remove a classe 'active' do elemento quando o callback é executado\n        });\n    };\n}\n\n//# sourceURL=webpack:///./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n // Importa a função `initAnimaNumeros` do módulo `anima-numeros.js`\n\nfunction initFetchAnimais() {\n  async function fetchAnimais(url) { // Função assíncrona que busca os animais a partir de uma URL\n    try {\n      const animaisResponse = await fetch(url); // Faz uma requisição à URL e espera pela resposta\n      const animaisJSON = await animaisResponse.json(); // Converte a resposta para JSON\n      const numerosGrid = document.querySelector('.numeros-grid'); // Seleciona o elemento com a classe `numeros-grid`\n      animaisJSON.forEach(animal => { // Para cada animal no JSON\n        const divAnimal = createAnimal(animal); // Cria um elemento `div` para o animal\n        numerosGrid.appendChild(divAnimal); // Adiciona o elemento `div` ao `numerosGrid`\n      });\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Inicializa a animação dos números\n    } catch(erro) { // Se ocorrer um erro\n      console.log(erro); // Exibe o erro no console\n    }\n  }\n  \n  function createAnimal(animal) { // Função que cria um elemento `div` para o animal\n    const div = document.createElement('div'); // Cria um elemento `div`\n    div.classList.add('numero-animal'); // Adiciona a classe `numero-animal` ao `div`\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`; // Define o conteúdo HTML do `div`\n    return div; // Retorna o `div`\n  }\n  \n  fetchAnimais('./animaisapi.json'); // Chama a função `fetchAnimais` com a URL da API de animais\n}\n\n//# sourceURL=webpack:///./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n    fetch('https://blockchain.info/ticker')\n      .then(response => response.json())\n      .then((bitcoin) => {\n        const btcPreco = document.querySelector('.btc-preco');\n        btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n      }).catch(erro => console.log(Error(erro)));\n  }\n  \n\n//# sourceURL=webpack:///./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\n// Exporta a função `initFuncionamento` como padrão\nfunction initFuncionamento() {\n    const funcionamento = document.querySelector('[data-semana]'); // Seleciona o elemento com o atributo `data-semana`\n    const diasSemana = funcionamento.dataset.semana.split(',').map(Number); // Obtém os dias da semana do atributo `data-semana` e converte para números\n    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number); // Obtém os horários do atributo `data-horario` e converte para números\n    \n    const dataAgora = new Date(); // Obtém a data e hora atuais\n    const diaAgora = dataAgora.getDay(); // Obtém o dia da semana atual (0-6)\n    const horarioAgora = dataAgora.getHours(); // Obtém a hora atual (0-23)\n    \n    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; // Verifica se o dia atual está nos dias de funcionamento\n    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]); // Verifica se a hora atual está dentro do horário de funcionamento\n    \n    if(semanaAberto && horarioAberto) { // Se estiver aberto na semana e no horário\n      funcionamento.classList.add('aberto'); // Adiciona a classe 'aberto' ao elemento\n    }\n}\n\n//# sourceURL=webpack:///./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n// Importa a função `outsideClick` do módulo `outsideclick.js`\n\n\n// Exporta a função `initMenuMobile` como padrão\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]'); // Seleciona o botão do menu com o atributo `data-menu=\"button\"`\n  const menuList = document.querySelector('[data-menu=\"list\"]'); // Seleciona a lista do menu com o atributo `data-menu=\"list\"`\n  const eventos = ['click', 'touchstart']; // Define os eventos que serão utilizados\n  \n  if(menuButton) { // Verifica se o botão do menu existe\n    function openMenu(event) { // Função que abre o menu\n      menuList.classList.add('active'); // Adiciona a classe 'active' à lista do menu\n      menuButton.classList.add('active'); // Adiciona a classe 'active' ao botão do menu\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => { // Chama a função `outsideClick` para fechar o menu ao clicar fora dele\n        menuList.classList.remove('active'); // Remove a classe 'active' da lista do menu\n        menuButton.classList.remove('active'); // Remove a classe 'active' do botão do menu\n      });\n    }\n    eventos.forEach(evento => menuButton.addEventListener(evento, openMenu)); // Adiciona os eventos ao botão do menu para abrir o menu\n  }\n}\n\n//# sourceURL=webpack:///./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n    constructor(botaoAbrir,botaoFechar,containerModal) {\n        this.botaoAbrir = document.querySelector(botaoAbrir);\n        this.botaoFechar = document.querySelector(botaoFechar);\n        this.containerModal = document.querySelector(containerModal);\n\n        // bind this ao callback para fazer referencia ao objeto da classe \n        this.eventToggleModal = this.eventToggleModal.bind(this);\n        this.cliqueForaModal = this.cliqueForaModal.bind(this);\n    }\n\n    // Abre ou fecha o modal \n    toggleModal() {\n        this.containerModal.classList.toggle('ativo');\n    }\n\n    // Adiciona o evento de toggle ao modal \n    eventToggleModal(event) {\n        event.preventDefault();\n        this.toggleModal();\n    }\n\n    // Fecha ao clicar no modal do lado de fora \n    cliqueForaModal(event) {\n        if (event.target === this.containerModal) {\n            this.toggleModal();\n        }\n    }\n\n    // Adiciona os eventos aos elementos do modal \n    addModalEvents() {\n        this.botaoAbrir.addEventListener('click',this.eventToggleModal);\n        this.botaoFechar.addEventListener('click',this.eventToggleModal);\n        this.containerModal.addEventListener('click',this.cliqueForaModal);\n    }\n\n    init() {\n        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n            this.addModalEvents();\n            return this; \n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\n// Exporta a função `outsideClick` como padrão\nfunction outsideClick(element, events, callback) {\n    const html = document.documentElement; // Seleciona o elemento HTML principal (documento)\n    const outside = 'data-outside'; // Define uma string para o atributo de controle\n  \n    if(!element.hasAttribute(outside)) { // Verifica se o elemento não tem o atributo `data-outside`\n      events.forEach(userEvent => { // Para cada evento na lista de eventos\n        setTimeout(() => html.addEventListener(userEvent, handleOutsideClick)); // Adiciona um listener de evento ao HTML após um pequeno atraso\n      });\n      element.setAttribute(outside, ''); // Adiciona o atributo `data-outside` ao elemento\n    }\n\n    function handleOutsideClick(event) { // Função que lida com o clique fora do elemento\n      if(!element.contains(event.target)) { // Verifica se o clique não foi dentro do elemento\n        element.removeAttribute(outside); // Remove o atributo `data-outside` do elemento\n        events.forEach(userEvent => { // Remove os listeners de evento do HTML\n          html.removeEventListener(userEvent, handleOutsideClick);\n        });\n        callback(); // Executa a função de callback\n      }\n    }\n}\n\n//# sourceURL=webpack:///./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\n// Exporta a função `initAnimacaoScroll` como padrão\nfunction initAnimacaoScroll() {\n    // Seleciona todas as seções com o atributo `data-anime=\"scroll\"`\n    const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n    // Verifica se existem seções selecionadas\n    if(sections.length) {\n      // Calcula a metade da altura da janela do navegador\n      const windowMetade = window.innerHeight * 0.6;\n  \n      // Função que anima a rolagem\n      function animaScroll() {\n        // Para cada seção selecionada\n        sections.forEach((section) => {\n          // Obtém a distância do topo da seção em relação ao topo da janela\n          const sectionTop = section.getBoundingClientRect().top;\n          // Verifica se a seção é visível (se está acima da metade da janela)\n          const isSectionVisible = (sectionTop - windowMetade) < 0;\n          // Se a seção for visível, adiciona a classe 'ativo'\n          if(isSectionVisible)\n            section.classList.add('ativo');\n          // Se a seção não for visível e tiver a classe 'ativo', remove a classe 'ativo'\n          else if(section.classList.contains('ativo')) {\n            section.classList.remove('ativo');\n          }\n        })\n      }\n  \n      // Chama a função `animaScroll` para animar as seções ao carregar a página\n      animaScroll();\n  \n      // Adiciona um listener de evento de rolagem para chamar a função `animaScroll`\n      window.addEventListener('scroll', animaScroll);\n    }\n}\n\n//# sourceURL=webpack:///./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n    constructor(links,options) {\n        this.linksInternos = document.querySelectorAll(links);\n        if (options === undefined) {\n            this.options = { behavior: 'smooth',block: 'start' };\n        } else {\n            this.options = options;\n        }\n\n        this.scrollToSection = this.scrollToSection.bind(this);\n    }\n\n    scrollToSection(event) {\n        event.preventDefault();\n        const href = event.currentTarget.getAttribute('href');\n        const section = document.querySelector(href);\n        section.scrollIntoView(this.options);\n    }\n\n    addLinkEvent() {\n        this.linksInternos.forEach((link) => {\n            link.addEventListener('click', (event) => { \n                this.scrollToSection(event);\n             });\n        });\n    }\n\n    init() {\n        if (this.linksInternos.length) {\n            this.addLinkEvent();\n        }\n        return this;\n    }\n}\n\n\n//# sourceURL=webpack:///./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n    constructor(menu,content) {\n        this.tabMenu = document.querySelectorAll(menu);\n        this.tabContent = document.querySelectorAll(content);\n        this.activeClass = 'ativo';\n    }\n\n    // Ativa a tab de acordo com o index da mesma \n    activeTab(index) {\n        this.tabContent.forEach((section) => {\n            section.classList.remove(this.activeClass);\n        });\n        const direcao = this.tabContent[index].dataset.anime;\n        this.tabContent[index].classList.add(this.activeClass,direcao);\n\n    }\n\n    // Adiciona os eventos nas tabs\n    addTabNavEvent() {\n        this.tabMenu.forEach((itemMenu,index) => {\n            itemMenu.addEventListener('click',() => this.activeTab(index));\n        });\n    }\n\n    init() {\n        if (this.tabMenu.length && this.tabContent.length) {\n            // Ativar primeiro item\n            this.activeTab(0);\n            this.addTabNavEvent();\n        }\n        return this;\n    }\n}\n\n\n//# sourceURL=webpack:///./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\n    constructor(tooltips) {\n      this.tooltips = document.querySelectorAll(tooltips);\n  \n      // bind do objeto da classe aos callbacks\n      this.onMouseLeave = this.onMouseLeave.bind(this);\n      this.onMouseMove = this.onMouseMove.bind(this);\n      this.onMouseOver = this.onMouseOver.bind(this);\n    }\n  \n    // Move a tooltip com base em seus estilos\n    // de acordo com a posição do mouse\n    onMouseMove(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      if (event.pageX + 240 > window.innerWidth) {\n        this.tooltipBox.style.left = `${event.pageX - 190}px`;\n      } else {\n        this.tooltipBox.style.left = `${event.pageX + 20}px`;\n      }\n    }\n  \n    // Remove a tooltip e os eventos de mousemove e mouseleave\n    onMouseLeave({ currentTarget }) {\n      this.tooltipBox.remove();\n      currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\n      currentTarget.removeEventListener('mousemove', this.onMouseMove);\n    }\n  \n    // Cria a tooltip box e coloca no body\n    criarTooltipBox(element) {\n      const tooltipBox = document.createElement('div');\n      const text = element.getAttribute('aria-label');\n      tooltipBox.classList.add('tooltip');\n      tooltipBox.innerText = text;\n      document.body.appendChild(tooltipBox);\n      this.tooltipBox = tooltipBox;\n    }\n    \n    // Cria a tooltip e adiciona os eventos\n    // de mousemove e mouseleave ao target\n    onMouseOver({ currentTarget }) {\n      // cria a tooltipbox e coloca em uma propriedade\n      this.criarTooltipBox(currentTarget);\n      currentTarget.addEventListener('mousemove', this.onMouseMove);\n      currentTarget.addEventListener('mouseleave', this.onMouseLeave);\n    }\n  \n    // Adiciona os eventos de mouseover a cada tooltip\n    addTooltipsEvent() {\n      this.tooltips.forEach((item) => {\n        item.addEventListener('mouseover', this.onMouseOver);\n      });\n    }\n  \n    init() {\n      if (this.tooltips.length) {\n        this.addTooltipsEvent();\n      }\n      return this;\n    }\n  }\n  \n\n//# sourceURL=webpack:///./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\n\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt');\naccordion.init();\n\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\n\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\n\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-tooltip]');\ntooltip.init();\n\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;