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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\n// Função initAccordion para configurar a funcionalidade de acordeão, comum em listas de FAQ.\nfunction initAccordion() { \n    const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n    const activeClass = 'ativo';\n\n    if (accordionList.length) { // Verifica se existem elementos <dt> na lista. Se houver pelo menos um, o código interno é executado.\n        accordionList[0].classList.add(activeClass);\n        accordionList[0].nextElementSibling.classList.add(activeClass); // Adiciona a classe ativo ao elemento seguinte do primeiro <dt> (geralmente um <dd>, que contém a resposta), fazendo-o ficar visível.\n\n        // Função interna activeAccordion, que será executada quando um <dt> for clicado.\n        function activeAccordion() {\n            this.classList.toggle(activeClass); // Utiliza toggle para adicionar ou remover a classe ativo no elemento <dt> que foi clicado (this refere-se ao elemento atual).\n            this.nextElementSibling.classList.toggle(activeClass); // Aplica o mesmo toggle no próximo elemento irmão do <dt> (o <dd>), alternando sua visibilidade.\n        }\n\n        accordionList.forEach((item) => {\n            item.addEventListener('click',activeAccordion);\n        });\n    }\n}\n\n//# sourceURL=webpack:///./js/modules/accordion.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n    const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n    const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n    const containerModal = document.querySelector('[data-modal=\"container\"]');\n    \n    if(botaoAbrir && botaoFechar && containerModal) {\n      function toggleModal(event) {\n        event.preventDefault();\n        containerModal.classList.toggle('ativo'); // Exibir ou ocultar a modal.\n      }\n      function cliqueForaModal(event) {\n        if(event.target === this) { // Verifica se o clique (event.target) é o próprio contêiner da modal (this).\n          toggleModal(event); // Se for, chama a função toggleModal para fechar a modal. Isso permite que a modal seja fechada ao clicar fora de seu conteúdo, mas ainda dentro do contêiner.\n        }\n      }\n    \n      botaoAbrir.addEventListener('click', toggleModal);\n      botaoFechar.addEventListener('click', toggleModal);\n      containerModal.addEventListener('click', cliqueForaModal);\n    }\n  }\n  \n\n//# sourceURL=webpack:///./js/modules/modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\n// Scroll suave ao clicar em links internos.\nfunction initScrollSuave() {\n    // Seleciona todos os links (<a>) dentro de um elemento com a classe js-menu cujo atributo href inicia com \"#\". Esses links apontam para âncoras internas da página.\n    const linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n\n    function scrollToSection(event) {\n        event.preventDefault(); // Impede o comportamento padrão do link, que seria pular imediatamente para a seção destino.\n        const href = event.currentTarget.getAttribute('href'); // Obtém o valor do atributo href do link clicado, que indica qual seção deve ser rolada para a visualização.\n        const section = document.querySelector(href); // Seleciona a seção da página que corresponde ao href obtido.\n\n        // Usa o método scrollIntoView para rolar até a seção selecionada de forma suave.\n        section.scrollIntoView({ // \n            behavior: 'smooth',\n            block: 'start',\n        });\n\n        // forma alternativa\n        // const topo = section.offsetTop;\n        // window.scrollTo({\n        //   top: topo,\n        //   behavior: 'smooth',\n        // });\n    }\n\n    linksInternos.forEach((link) => {\n        link.addEventListener('click',scrollToSection);\n    });\n}\n\n\n//# sourceURL=webpack:///./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() { // Inicializa a navegação por abas\n    const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n    const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n\n    if (tabMenu.length && tabContent.length) { // Verifica se existem elementos para serem manipulados\n        tabContent[0].classList.add('ativo'); // Adiciona a classe ativo à primeira seção de conteúdo, tornando-a visível (ativa) por padrão.\n\n        // Percorre todas as seções de conteúdo e remove a classe ativo, garantindo que nenhuma delas esteja ativa antes de ativar a desejada.\n        function activeTab(index) { \n            tabContent.forEach((section) => {\n                section.classList.remove('ativo');\n            });\n            const direcao = tabContent[index].dataset.anime;\n            tabContent[index].classList.add('ativo', direcao); // Adiciona a classe ativo à seção de conteúdo com o índice correspondente ao botão clicado.\n        }\n\n        // Itera sobre cada item do menu de abas, utilizando o índice para associar cada botão à sua respectiva seção.\n        tabMenu.forEach((itemMenu, index) => { \n            itemMenu.addEventListener('click',() => {\n                activeTab(index);\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() { // Função principal que inicializa os tooltips\n    const tooltips = document.querySelectorAll('[data-tooltip]'); // Seleciona todos os elementos com o atributo data-tooltip\n  \n    tooltips.forEach((item) => { // Para cada elemento selecionado\n      item.addEventListener('mouseover', onMouseOver); // Adiciona um evento de mouseover que chama a função onMouseOver\n    });\n  \n    function onMouseOver(event) { // Função chamada quando o mouse passa sobre o elemento\n      const tooltipBox = criarTooltipBox(this); // Cria a caixa de tooltip e armazena na constante tooltipBox\n  \n      onMouseMove.tooltipBox = tooltipBox; // Define a tooltipBox na função onMouseMove\n      this.addEventListener('mousemove', onMouseMove); // Adiciona um evento de mousemove que chama a função onMouseMove\n  \n      onMouseLeave.tooltipBox = tooltipBox; // Define a tooltipBox na função onMouseLeave\n      onMouseLeave.element = this; // Define o elemento atual na função onMouseLeave\n      this.addEventListener('mouseleave', onMouseLeave); // Adiciona um evento de mouseleave que chama a função onMouseLeave\n    }\n  \n    const onMouseLeave = { // Objeto que define o comportamento ao sair do elemento\n      handleEvent() { // Método chamado quando o evento é disparado\n        this.tooltipBox.remove(); // Remove a caixa de tooltip\n        this.element.removeEventListener('mouseleave', onMouseLeave); // Remove o evento de mouseleave\n        this.element.removeEventListener('mousemove', onMouseMove); // Remove o evento de mousemove\n      }\n    };\n  \n    const onMouseMove = { // Objeto que define o comportamento ao mover o mouse\n      handleEvent(event) { // Método chamado quando o evento é disparado\n        this.tooltipBox.style.top = event.pageY + 20 + 'px'; // Define a posição vertical da caixa de tooltip\n        this.tooltipBox.style.left = event.pageX + 20 + 'px'; // Define a posição horizontal da caixa de tooltip\n      }\n    };\n  \n    function criarTooltipBox(element) { // Função que cria a caixa de tooltip\n      const tooltipBox = document.createElement('div'); // Cria um elemento div\n      const text = element.getAttribute('aria-label'); // Obtém o texto do atributo aria-label do elemento\n      tooltipBox.classList.add('tooltip'); // Adiciona a classe tooltip ao elemento div\n      tooltipBox.innerText = text; // Define o texto da caixa de tooltip\n      document.body.appendChild(tooltipBox); // Adiciona a caixa de tooltip ao corpo do documento\n      return tooltipBox; // Retorna a caixa de tooltip\n    }\n}\n\n\n\n//# sourceURL=webpack:///./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n\n\n\n\n\n\n\n\n\n\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack:///./js/script.js?");

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