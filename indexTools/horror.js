const start = document.querySelector('#start');
const ghost = document.querySelector('.image');
const ghostRight = getComputedStyle(ghost).right;
const ghostBottom = getComputedStyle(ghost).bottom;

function playSound(){
	const audio = document.querySelector('audio');
	audio.play();
}
function horrify(e){
	const num = Math.floor(Math.random() * 10);
	if (num === 1){
		const size = (Math.floor(Math.random() * 15) / 10) + 1 ;
		const x = Math.floor(Math.random() * (window.innerWidth - ghost.offsetWidth));
		const y = Math.floor(Math.random() * (window.innerHeight - ghost.offsetHeight * size));

		ghost.style.transform = `scale(${size})`;
		ghost.style.right = `${x}px`;
		ghost.style.bottom = `${y}px`;
		ghost.classList.add('ghostShow');

		setTimeout(() => {
			ghost.style.right = ghostRight;
			ghost.style.bottom = ghostBottom;
			ghost.style.transform = `scale(1)`;
			ghost.classList.remove('ghostShow');
		}, 1500)
	}
}
function blink(){
	const blinker = Math.floor(Math.random() * 20);
	blinker === 1 ? ghost.classList.add('ghostBlink') : ghost.classList.remove('ghostBlink')
}

start.addEventListener('mouseover', playSound);
setInterval(horrify, 800);
setInterval(blink, 80);;