const addPlanCategory = document.querySelector('#plan-category-add');
const planCategoryTable = document.querySelector('#plan-category-table');

//handle form events
function formEvent(e){
	e.preventDefault();
	const formId = e.target.getAttribute('id');

	switch(formId){
		case 'new-plan-category-input':
			saveNewPlanCategory();
			break;
	}
}

function saveNewPlanCategory(){
	const dept = document.querySelector('#select-dept').value;
	const planCategory = capitalizeWords(document.querySelector('#text-plan-category').value);
	const categoryDesc = capitalizeWords(document.querySelector('#text-category-description').value);
	const categoryPoint = parseInt(document.querySelector('#text-category-point').value);
	// set validation here
	const regex = /[^a-z0-9\s]/gi;
	if (regex.test(planCategory) || regex.test(categoryDesc)){
		alert('Please use alphanumeric keys only!');
		return;
	}
	categoryManager.add({dept, planCategory, categoryDesc, categoryPoint})
}

function showAddPlanCategoryForm(){
	if (button.check(this)) return;	
	$('.modal-title').text('New Plan Category');
	$('.modal-body').load('ui/new.php', () => {
		$('.modal').modal('show');
		button.done(this);
	});
}

addPlanCategory.addEventListener('click', showAddPlanCategoryForm)
form.addEventListener('submit', formEvent);
document.addEventListener('DOMContentLoaded', categoryManager.load);