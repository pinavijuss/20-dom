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

/*

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
*/


// const customerDOM = document.querySelector('#customer');
// const orderDOM = document.querySelector('.order');
// const buttonDOM = document.querySelector('button');
// const sriubaDOM = document.querySelector('#sriuba');
// const patiekalasDOM = document.querySelector('#patiekalas');
// const desertasDOM = document.querySelector('#desertas');
// const gerimasDOM = document.querySelectorAll('input[name="gerimas"]');


// function arNoriu(DOM) {
//     return DOM.checked ? 'nori' : 'nenori';
// }

// function kurisPazymetas(DOMlist) {
//     for (const itemDOM of DOMlist) {
//         if (itemDOM.checked) {
//             return itemDOM.value;
//         }
//     }
// }


// buttonDOM.addEventListener('click', (event) => {
//     event.preventDefault();

// function mealChecked(item) {
//     if (item.checked) {
//         return 'nori';
//     }
//     return 'nepasirinko';
// }


// function drinkChecked(item) {
//      for (let i = 0; i < item.length; i++)
//          if (item[i].checked) {
//              return item[i].value;
//         }





// }
// let customerName = '';
// if (customerDOM.value === '') {
//     customerName = 'nepateiktas'
// } else {
//     customerDOM.value
// }








// orderDOM.innerText = `Uzsakovas, kurio vardas ${customerName} ${customerDOM.value}, ${mealChecked(sriubaDOM)} sriubos,
//  ${mealChecked(patiekalasDOM)} pagrindinio patiekalo, ${mealChecked(desertasDOM)} deserto,
//   ${drinkChecked(gerimasDOM)} yra pasirinktas gerimas`;




// Uzsakovas, kurio  nerastas arba kurio vardas Petras

// const onePtsDOM = document.querySelector('[data-points=1]');
// const twoPtsDom = document.querySelector('[data-points=2]');
// const threePtsDOM = document.querySelector('[data-points=3]');

// let homePoints = 0;
// for (let i = 0; i < homeTeamPtsDOM.length; i++) {

//     const buttonPush = homeTeamPtsDOM[i];
//     buttonPush.addEventListener('click', () => {
//         homePoints += i + 1;
//         homeTeamResultDOM.innertext = homePoints;
//     })
// }

// const lentaDOM = document.querySelector('.lenta');
// const homeTeamResultDOM = lentaDOM.querySelector('[data-komanda="namu"]');
// const guestTeamResultDOM = lentaDOM.querySelector('[data-komanda="sveciu"]');
// const aiksteleDOM = document.querySelector('.aikstele');

// const homeTeamDOM = aiksteleDOM.querySelector('[data-komanda="namu"]');
// const homeTeamPtsDOM = homeTeamDOM.querySelectorAll('button');

// const guestTeamDOM = aiksteleDOM.querySelector('[data-komanda="sveciu"]');
// const guestTeamPtsDOM = guestTeamDOM.querySelectorAll('button');

// let namuRezultatas = 0;
// let sveciuRezultatas = 0;

// for (let i = 0; i < 3; i++) {
//     guestTeamPtsDOM[i].addEventListener('click', () => {
//         namuRezultatas += i + 1;
//         namuRezultatasDOM.innerText = namuRezultatas;
//     })
// }

// function generuotiLenta(selector, count) {
//     const DOM = document.querySelector(selector);
//     if (!DOM) {
//         console.error('ERROR: nerastas elementas');
//         return false;
//     }

//     if (count < 0 ||
//         count % 1 !== 0) {
//         console.error('ERROR: skaicius turi buti teigiamas ir sveikasis');
//         return false;
//     }

//     let HTML = '';
//     for (let i = 1; i <= count; i++) {
//         HTML += `<div>${i}</div>`;
//     }

//     DOM.innerHTML = HTML;
// }

// generuotiLenta('.lenta', 8);


function generuotiSocials(selector, icons) {
    if (selector === '' ||
        typeof selector !== 'string') {
        console.error('ERROR: netinkamas parametras');
        return false;

    }
    if (!Array.isArray(icons) ||
        icons.lenght === 0) {
        console.error('ERROR: negali buti tuscias array');
        return false;
    }

    const iconsDOM = document.querySelector(selector);

    let HTML = '';
    for (let i = 0; i < icons.length; i++) {
        if (typeof icons[i] !== 'string' ||
            icons[i] === '') {
            console.error('ERROR: netinkamas parametras');
        } else

            HTML += `<i class="fa fa-${icons[i]}"></i>`;
        console.log(icons);
    }

    iconsDOM.innerHTML = HTML;

}



const icons = ['facebook', 'twitter', 5, [], '', 'linkedin', 'pinterest'];

generuotiSocials('.socials', icons);