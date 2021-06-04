//console.log('labas');
/*
Pakeisti tekstini turini h1 elemente i "labas vakaras!"
*/

// const h1DOM = document.querySelector('h1');
// h1DOM.innerText = 'Labas vakaras!';

// const pDOM = document.querySelector('p');
// pDOM.innerText = 'Šiandien gražus oras';

/*const liDOM = document.querySelectorAll('li');
const ingredientai = [];

for (let i = 0; i < liDOM.length; i++) {
    const ingredientas = liDOM[i].innerText.toUpperCase();
    ingredientai.push(ingredientas);
}

console.log(ingredientai);
*/


// const liDOM = document.querySelectorAll('li');
// for (let i = 0; i < liDOM.length; i++) {
// liDOM[i].classList.add('darzove');

// }

// const liDOM = document.querySelectorAll('li');
// for (let i = 0; i < liDOM.length; i++) {
// liDOM[i].innerText = 'Išrauta daržovė';

// }

// const liDOM = document.querySelectorAll('li');
// for (let i = 0; i < liDOM.length; i++) {

//     if (liDOM[i].innerText === ('Svogunas')) {
//         liDOM[i].innerText = 'Išrauta daržovė';
//     }
// }
// const logoDOM = document.querySelector('.logo');
// const hamburgerDOM = document.querySelector('.hamburger');
// const navDOM = document.querySelector('nav');

// hamburgerDOM.addEventListener('click', () => {
//     logoDOM.classList.toggle('big');
//     navDOM.classList.toggle('visible');
// });


let rezultatas = 0;


const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');
const h1 = h1DOM.innerText;

minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas;
    h1DOM.innerText = 'Žaidimas progrese'
})

plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas;
    h1DOM.innerText = 'Žaidimas progrese'
})

resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = h1;


    // if (numberDom.innerText === 0) {
    // h1DOM.innerText = h1DOM;
    // }
})




