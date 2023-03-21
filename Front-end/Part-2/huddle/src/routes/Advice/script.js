'use strict';

const openButton = document.query_selector_all('.show-btn');
const quotes = document.querySelector('.quotes');
const showButton = document.query_selector_all('.show-btn');
const closeButton = document.querySelector('.close-btn');

const openQuotes = function () {
	quotes.classList.remove('hidden');
	overlay.classList.remove('hidden');
};
const closeQuotes = function () {
	quotes.classList.add('hidden');
	overlay.classList.add('hidden');
};
for (let i = 0; i < showButton.length; i++) showButton[i].addEventListener('click', openQuotes);

closeButton.addEventListener('click', closeQuotes);
overlay.addEventListener('click', closeQuotes);
