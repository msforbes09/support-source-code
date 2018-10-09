const background = document.querySelector('.background');
const nav = document.querySelector('.nav')
const navY = nav.offsetTop;
const main = document.querySelector('main');
const navKey = document.querySelectorAll('[data-target]');

// change image during scrolls
function setImage(){
	const scrolled = window.scrollY;
	const height = background.offsetHeight;
	let image;

	scrolled >= navY ? nav.classList.add('fixed') : nav.classList.remove('fixed');
	scrolled > height ? image = 'url(\'../image/cad1.jpg\')' : image = 'url(\'../image/cad3.jpg\')';
	document.documentElement.style.setProperty('--image', image);
}

function navigate(){
	const target = document.querySelector(`#${this.dataset.target}`);
	window.scrollTo(0, target.offsetTop - nav.offsetHeight);
}

document.addEventListener('scroll', setImage);
navKey.forEach(key => {
	key.addEventListener('click', navigate);
})