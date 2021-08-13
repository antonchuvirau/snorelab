'use strict';

// Toggle mobile menu
const btnOpen = document.querySelector('.m-options__menu-btn');
const btnClose = document.querySelector('.m-menu__close-btn');
const mobileMenu = document.querySelector('.m-menu');

btnOpen.onclick = () => {
  mobileMenu.classList.remove('m-menu_hidden');
}

btnClose.onclick = () => {
  mobileMenu.classList.add('m-menu_hidden');
}