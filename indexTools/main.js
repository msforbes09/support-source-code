const test = document.querySelector('#test');
const header = document.querySelector('.header')

// change image during scrolls
function setImage(){
	const scrolled = window.scrollY;
	const height = header.offsetHeight;
	let image;
	scrolled > height ? image = 'url(\'../image/cad1.jpg\')' : image = 'url(\'../image/cad3.jpg\')'
	document.documentElement.style.setProperty('--image', image)
}

document.addEventListener('scroll', setImage);