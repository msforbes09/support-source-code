const addDept = document.querySelector('#dept-add');
const deptTable = document.querySelector('#dept-table');

//handle form events
function formEvent(e){
	e.preventDefault();
	const formId = e.target.getAttribute('id');
	switch(formId){
		case 'new-dept-input':
		saveNewDept();
			break;
	}
}

function saveNewDept(){
	const dept = capitalizeWords(document.querySelector('#text-dept').value);
	// set validation here
	const regex = /[^a-z0-9\s]/gi;
	if (regex.test(dept)){
		alert('Please use alphanumeric keys only!');
		return;
	}
	departmentManager.add({dept});
}

function showAddDeptForm(){
	$('.modal-title').text('New Department');
	$('.modal-body').load('ui/new.php');
	$('.modal').modal('show');
}

addDept.addEventListener('click', showAddDeptForm)
form.addEventListener('submit', formEvent);
document.addEventListener('DOMContentLoaded', departmentManager.load());