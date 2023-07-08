const navbar = document.querySelector('nav'); /* looks for nav tag*/
const menu = navbar.querySelector('ul');
const openBtn = navbar.querySelector('.fa-bars'); /* the . means selecting within the fa library*/
const closeBtn = menu.querySelector('.fa-times');

openBtn.onclick = () => menu.classList.toggle('menu');
closeBtn.onclick = () => menu.classList.toggle('menu');