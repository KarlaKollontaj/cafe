let search = document.querySelector('.search-box');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

document.querySelector('#search-icon').onclick = () => {
    search.classList.add('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.add('active');
    search.classList.remove('active');
}

window.onscroll =  () => {
    search.classList.remove('active');
    navbar.classList.remove('active');
}

window.addEventListener('scroll', () => {
    header.classList.add('shadow', window.scrollY > 0)
})