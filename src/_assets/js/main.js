// Footer Date
document.getElementById('year').innerHTML = new Date().getFullYear();

// Menu
document.addEventListener('DOMContentLoaded', () => {
	let hamBurger = document.querySelector('.hamburger');
	let menuCont = document.querySelector('.menu-container');

	// On click
	hamBurger.addEventListener('click', function() {

		// Toggle class 'is-open'
		hamBurger.classList.toggle('is-open');
    menuCont.classList.toggle('is-open');

		// disable body scroll
		document.body.classList.toggle('no-scroll');
	});
});

import './partials/_browser-update';
