function capitalizeWords(string){
	const words = string.trim().split(' ')
	const capitalized = words.map((list) => {
		return list[0].toUpperCase() + list.slice(1).toLowerCase();
	}).join(' ');
	return capitalized;
}