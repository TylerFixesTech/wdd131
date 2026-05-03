                    
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let card = document.querySelector('.card');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        body.style.backgroundColor = '#111';
        body.style.color = '#fff';

        card.style.backgroundColor = '#222';
        card.style.borderColor = '#fff';

        logo.src = 'byui-logo-white.png';
    } 
    else {
        // code for changes to colors and logo
        body.style.backgroundColor = '#fff';
        body.style.color = '#000';

        card.style.backgroundColor = '#fff';
        card.style.borderColor = '#999';

        logo.src = 'byui-logo-blue.webp';
    }
}           
                 