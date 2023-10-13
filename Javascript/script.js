let btnRed = document.querySelector('#btnRed');
let btnBlue = document.querySelector('#btnBlue');
let btnGreen = document.querySelector('#btnGreen');
let btnOrange = document.querySelector('#btnOrange');
let btnPurple = document.querySelector('#btnPurple');
let content = document.querySelector('p');

btnRed.addEventListener('click',() => content.style.color = 'red')
btnBlue.addEventListener('click',() => content.style.color = 'blue')
btnGreen.addEventListener('click',() => content.style.color = 'green')
btnOrange.addEventListener('click',() => content.style.color = 'orange')
btnPurple.addEventListener('click',() => content.style.color = 'purple')