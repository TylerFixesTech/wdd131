let title = document.querySelector('h1');

console.log(title);

title.textContent = 'Web page Components';

//document.querySelector('#topics').style.color = 'red';


const wrapper = document.getElementById('content');

wrapper.style.backgroundColor = 'lightblue';

let list = document.querySelector('.list')

list.style.border = '3px solid black';

let para = document.querySelector('p');

para.style.fontSize = '2em';

para.classList.add('background');

const image = document.querySelector('img');

image.setAttribute('src', 'images/new_logo.jpg');

const headertwo = document.querySelector('h2');
const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');

let dropdown = document.querySelector('#webdevlist');

dropdown.addEventListener('change', function() {
    headertwo.style.color = 'purple';
    css.style.color = 'purple';
    js.style.color = 'purple';
    let codeValue = dropdown.value;
    document.getElementById(codeValue).style.color = 'red';
}) ;

