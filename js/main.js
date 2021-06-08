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


const customerDOM = document.querySelector('#customer');
const orderDOM = document.querySelector('.order');
const buttonDOM = document.querySelector('button');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const gerimasDOM = document.querySelectorAll('input[name="gerimas"]');


function arNoriu(DOM) {
    return DOM.checked ? 'nori' : 'nenori';
}

function kurisPazymetas(DOMlist) {
    for (const itemDOM of DOMlist) {
        if (itemDOM.checked) {
            return itemDOM.value;
        }
    }
}


buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();

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

    const vardas = customerDOM.value.trim();
    const pasirinktasGerimas = kurisPazymetas(gerimasDOM);
    const sakinioPradzia = vardas ? 'vardu ' + vardas : 'nenudores vardo';
    const sakinioPabaiga = pasirinktasGerimas ? pasirinktasGerimas + ' yra pasirinktas gerimas' : 'gerimo nepasirinko';

    orderDOM.innerText = `Uzsakovas ${sakinioPradzia} ${arNoriu(sriubaDOM)} sriubos, ${arNoriu(patiekalasDOM)} pagrindinio patiekalo, ${arNoriu(desertasDOM)} deserto ir ${sakinioPabaiga}.`;
})






    // orderDOM.innerText = `Uzsakovas, kurio vardas ${customerName} ${customerDOM.value}, ${mealChecked(sriubaDOM)} sriubos,
    //  ${mealChecked(patiekalasDOM)} pagrindinio patiekalo, ${mealChecked(desertasDOM)} deserto,
    //   ${drinkChecked(gerimasDOM)} yra pasirinktas gerimas`;




// Uzsakovas, kurio  nerastas arba kurio vardas Petras