const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-links');
const toggleBtn = document.querySelector('.toggleBtn');

const openMenu = () => {
	closeBtn.classList.toggle('hide');
	menuBtn.classList.toggle('hide');
	mobileMenu.classList.toggle('hide');
}

const closeMenu = () => {
	closeBtn.classList.toggle('hide');
	menuBtn.classList.toggle('hide');
	mobileMenu.classList.toggle('hide');
}


menuBtn.addEventListener('click', openMenu);

closeBtn.addEventListener('click', closeMenu);