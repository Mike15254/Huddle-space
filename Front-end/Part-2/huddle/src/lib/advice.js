'use strict';

const showButton = document.querySelectorAll('.show-btn');
const closeButton = document.querySelector('.close-btn');
const quotes = document.querySelector('.quotes');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < showButton.length; i++) {
	showButton[i].adddEventListener('click', actionOpen);
}

const actionOpen = function () {
	quotes.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const actionClose = function () {
	quotes.classList.add('hidden');
	overlay.classList.add('hidden');
};

closeButton.addEventListener('click', actionClose);
overlay.addEventListener('click', actionClose);
