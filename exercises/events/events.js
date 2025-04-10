var changeTop = function () {
  console.log('test1');
}

var changeTop2 = () => {
  console.log('teste2');
}

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((element) => {
    if (window.addEventListener('click',function () {
        element.classList.add('classeAdicionada');
        console.log('classe adicionada');
    }));
});

itensMenu[0].classList.add('classeActiva');

const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img,possuiAtributo);
});

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log('clicou');
}

linkExterno.addEventListener('click', handleLinkExterno);


function handleKeyboard(event) {
    console.log(event.key); // tecla que foi pressionada
}
window.addEventListener('keydown', handleKeyboard);


const imgs2 = document.querySelectorAll('body > nav > ul');
function handleImg (event) {
    console.log(event.target);
}

window.addEventListener('click', handleImg);
