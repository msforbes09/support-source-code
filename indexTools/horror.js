const start = document.querySelector('#start');

function playSound(){
	const audio = document.querySelector('audio');
	audio.play();
}

start.addEventListener('mouseover', playSound);
// audio.play();