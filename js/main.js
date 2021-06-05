/*

let rezultatas = 0;

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');
const ulDOM = document.querySelector('ul');

const gameInProgressMessage = 'Žaidimas progrese';
const initialH1Text = h1DOM.innerText;

ulDOM.innerHTML = `<li>Tu pasileidai zaidima - sekmes!</li>`;

minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas;
    h1DOM.innerText = gameInProgressMessage;
    ulDOM.innerHTML += `<li>"Paspaudei minusa ir dabartinis rezultatas yra ${numberDOM.innerText}."</li>`;
})

plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas;
    h1DOM.innerText = gameInProgressMessage;
    ulDOM.innerHTML += `<li>"Paspaudei pliusa ir dabartinis rezultatas yra ${numberDOM.innerText}."</li>`;
})

resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = initialH1Text;
    ulDOM.innerHTML += `<li>"Paspaudei reset ir dabartinis rezultatas yra ${numberDOM.innerText}."</li>`;
})*/

const buttonDOM = document.querySelector('button');
const inputDOM = document.querySelector('input'//#message);
const spanDOM = document.querySelector('span');
const inputBgColorDOM = document.querySelector('#bg-color');
const inputTextColorDOM = document.querySelector('#text-color');


inputDOM.style.color = 'red';

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = '';
    spanDOM.style.backgroundColor = inputBgColorDOM.value;
    spanDOM.style.color = inputTextColorDOM.value;




})