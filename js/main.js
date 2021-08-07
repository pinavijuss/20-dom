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

//     function mealChecked(item) {
//         if (item.checked) {
//             return 'nori';
//         }
//         return 'nepasirinko';
//     }


//     function drinkChecked(item) {
//         for (let i = 0; i < item.length; i++)
//             if (item[i].checked) {
//                 return item[i].value;
//             }





//     }
//     let customerName = '';
//     if (customerDOM.value === '') {
//         customerName = 'nepateiktas'
//     } else {
//         customerDOM.value
//     }








//     orderDOM.innerText = `Uzsakovas, kurio vardas ${customerName} ${customerDOM.value}, ${mealChecked(sriubaDOM)} sriubos,
//  ${mealChecked(patiekalasDOM)} pagrindinio patiekalo, ${mealChecked(desertasDOM)} deserto,
//   ${drinkChecked(gerimasDOM)} yra pasirinktas gerimas`;




//     Uzsakovas, kurio  nerastas arba kurio vardas Petras

//     const onePtsDOM = document.querySelector('[data-points=1]');
//     const twoPtsDom = document.querySelector('[data-points=2]');
//     const threePtsDOM = document.querySelector('[data-points=3]');

//     let homePoints = 0;
//     for (let i = 0; i < homeTeamPtsDOM.length; i++) {

//         const buttonPush = homeTeamPtsDOM[i];
//         buttonPush.addEventListener('click', () => {
//             homePoints += i + 1;
//             homeTeamResultDOM.innertext = homePoints;
//         })
//     }

//     const lentaDOM = document.querySelector('.lenta');
//     const homeTeamResultDOM = lentaDOM.querySelector('[data-komanda="namu"]');
//     const guestTeamResultDOM = lentaDOM.querySelector('[data-komanda="sveciu"]');
//     const aiksteleDOM = document.querySelector('.aikstele');

//     const homeTeamDOM = aiksteleDOM.querySelector('[data-komanda="namu"]');
//     const homeTeamPtsDOM = homeTeamDOM.querySelectorAll('button');

//     const guestTeamDOM = aiksteleDOM.querySelector('[data-komanda="sveciu"]');
//     const guestTeamPtsDOM = guestTeamDOM.querySelectorAll('button');

//     let namuRezultatas = 0;
//     let sveciuRezultatas = 0;

//     for (let i = 0; i < 3; i++) {
//         guestTeamPtsDOM[i].addEventListener('click', () => {
//             namuRezultatas += i + 1;
//             namuRezultatasDOM.innerText = namuRezultatas;
//         })
//     }

//     function generuotiLenta(selector, count) {
//         const DOM = document.querySelector(selector);
//         if (!DOM) {
//             console.error('ERROR: nerastas elementas');
//             return false;
//         }

//         if (count < 0 ||
//             count % 1 !== 0) {
//             console.error('ERROR: skaicius turi buti teigiamas ir sveikasis');
//             return false;
//         }

//         let HTML = '';
//         for (let i = 1; i <= count; i++) {
//             HTML += `<div>${i}</div>`;
//         }

//         DOM.innerHTML = HTML;
//     }

//     generuotiLenta('.lenta', 8);










// function renderNav() {

//     const animalDOM = document.getElementById('animal');
//     const buttonDOM = document.querySelector('button');
//     const optionDOM = document.querySelector('.option');

//     let HTML = '';
//     for (const selectorItem of selectors) {
//         HTML += `<option value="${selectorItem.value}">${selectorItem.title}</option>`;

//     }
//     animalDOM.innerHTML = HTML;
// }

// const selectors = [
//     {
//         value: '',
//         title: '--Please choose an option--'
//     },
//     {
//         value: 'zuikis',
//         title: 'Zuikis'
//     },
//     {
//         value: '#',
//         title: '
//     },
//     {
//         value: '#',
//         title: ''
//     }
// ];


// renderNav('header', menu);










// const animalDOM = document.getElementById('animal');
// const buttonDOM = document.querySelector('button');
// const optionDOM = document.querySelector('.option');

// const selectors = [
//     {
//         value: '',
//         title: '--Please choose an option--'
//     },
//     {
//         value: 'zuikis',
//         title: 'Zuikis'
//     },
//     {
//         value: 'barsukas',
//         title: 'Barsukas'
//     },
//     {
//         value: 'lape',
//         title: 'Lape'
//     },
//     {
//         value: 'vilkas',
//         title: 'Vilkas'
//     },
//     {
//         value: 'sernas',
//         title: 'Sernas'
//     },
//     {
//         value: 'vovere',
//         title: 'Vovere'
//     }
// ];


// let HTML = '';
// for (const selectorItem of selectors) {
//     HTML += `<option value="${selectorItem.value}">${selectorItem.title}</option>`;

// }
// animalDOM.innerHTML = HTML;

// buttonDOM.addEventListener('click', (event) => {
//     event.preventDefault();

//     optionDOM.innerText = animalDOM.value + '.';



// });







// debugger;

// const a = 5;
// const b = 8;
// const c = -7;
// const d = 11;

// function sum(x, y) {
//     x *= 2;
//     y += 5;
//     return x + y;
// }

// const ats1 = sum(a, b);
// const ats2 = sum(c, d);

// for (let i = 0; i < 5; i++) {
//     console.log(i);

// }

// const boardParametersDOM = document.querySelector('.option');
// const buttonDOM = document.querySelector('button');
// const inputDOM = document.querySelector('#board');
// const boardDOM = document.querySelector('.board');


// buttonDOM.addEventListener('click', (event) => {
//     event.preventDefault();
//     const n = parseInt(inputDOM.value);
//     boardParametersDOM.innerText = n + 'x' + n;
//     // boardSizeDOM.innerText = `${inputDOM.value} x ${inputDOM.value}`;
//     generateBoard(boardDOM, n);

// })

// function generateBoard(boardElement, boardSize) {
//     const rowSize = getRowSize(boardSize);
//     let linesHTML = '';
//     for (let r = 0; r < boardSize; r++) {
//         linesHTML += `<div class="row ${getEvenOrOddClass(r)}" style ="height: ${rowSize}%;">${getCell(boardSize)}</div>`;
//     }

//     boardElement.innerHTML = linesHTML;
// }

// function getCell(boardSize) {
//     const rowSize = getRowSize(boardSize);
//     let cellsHTML = '';
//     for (let c = 0; c < boardSize; c++) {
//         cellsHTML += `<span class='cell ${getEvenOrOddClass(c)}' style ="width: ${rowSize}%;"></span>`;
//     }

//     return cellsHTML;
// }

// function getRowSize(boardSize) {
//     return 100 / boardSize;
// }

// function getEvenOrOddClass(index) {
//     if (index % 2 === 0) {
//         return 'even';
//     } else {
//         return 'odd'
//     }
// }


// Pagal pasirinkta lentos dydi, reikia sugeneruoti
// reikiama kieki.row elementu.
// Atsizvelgiant i ju kieki, kiekvienos eilutes dydis turi buti tinkamas, jog visos tilptu i tevini elementa.board



// console'je reikia isspausdinti visus galimus laiko variantus paroje, kai norima
//  atvaizduoti valandas ir minutes; kai minutes yra skaiciuojamos 15min tikslumus

// Laukiamias rezultatas, pvz.: 0: 0 0: 15 0: 30 0: 45 1: 0 
// 1: 15 1: 30 1: 45 2: 0 2: 15 2: 30 2: 45 ... 23: 0 23: 15 23: 30 23: 45





// let minutesInterval = 15;
// let time = [];
// let startTime = 0;


// for (let i = 0; startTime < 24 * 60; i++) {

//     let hh = Math.floor(startTime / 60);
//     let mm = startTime % 60;
//     time[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2);
//     time = time + minutesInterval;

// }
// console.log(time);

// let minutes = 

// function time(hours, minutes) {

//     for (let h = 0; h < 24; h++) {
//         for (let m = 0; m < 4; m++) {


//             console.log(`${h}:${m * 15}`);
//         }


//     }
// }

// time(24, 15);


// function time(hours, minutes) {
//     for (let h = 0; h < hours; h++) {

//         for (let m = 0; m < minutes; m++) {
//             console.log(`${h}:${m}`);
//         }
//     }
// }
// time(4, 35);


function time(timeFrom, timeTo, interval) {
    let changedTimeTo = timeTo;
    if (timeFrom > timeTo) {
        changedTimeTo = 24 + timeTo;
    }

    //     const lessonsCount = Math.floor((timeTo - timeFrom) * 60 / interval);

    // }
    // console.log(lessonsCount + 1);

    for (let i = timeFrom * 60; i <= changedTimeTo * 60; i += interval) {

        const h = Math.floor(i / 60);
        const m = i - (h * 60);
        const hMod = h % 24;
        console.log(i, `${hMod % 24 < 10 ? '0' + hMod : hMod}:${m < 10 ? '0' + m : m}`);

    }
}


time(22, 6, 45);



/*




*/