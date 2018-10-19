const addMistakeCategory = document.querySelector('#mistake-category-add');
const mistakeCategoryTable = document.querySelector('#mistake-category-table');

//handle form events
function formEvent(e){
	e.preventDefault();
	
	const formId = e.target.getAttribute('id');
	switch(formId){
		case 'new-mistake-category-input':
			saveNewMistakeCategory();
			break;
	}
}

function saveNewMistakeCategory(){
	const dept = document.querySelector('#select-dept').value;
	const mistakeCategory = capitalizeWords(document.querySelector('#text-mistake-category').value);
	const mistakeDesc = capitalizeWords(document.querySelector('#text-mistake-description').value);
	const mistakePoint = parseFloat(document.querySelector('#text-category-point').value);
	// set validation here
	const regex = /[^a-z0-9\s]/gi;
	if (regex.test(mistakeCategory) || regex.test(mistakeDesc)){
		alert('Please use alphanumeric keys only!');
		return;
	}
	mistakeManager.add({dept, mistakeCategory, mistakeDesc, mistakePoint})
}

function showAddMistakeCategoryForm(){
	if (button.check(this)) return;	
	$('.modal-title').text('New Mistake Category');
	$('.modal-body').load('ui/new.php', () => {
		$('.modal').modal('show');
		button.done(this);
	});
}

addMistakeCategory.addEventListener('click', showAddMistakeCategoryForm)
form.addEventListener('submit', formEvent);
document.addEventListener('DOMContentLoaded', mistakeManager.load());