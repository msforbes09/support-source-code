const staffTable = document.querySelector('#staff-table');
const addStaff = document.querySelector('#staff-add');

//handle form events
function formEvent(e){
	e.preventDefault();
	const formId = e.target.getAttribute('id');
	switch(formId){
		case 'new-staff-input':
		saveNewStaff();
			break;
	}
}

function showAddForm(){
	$('.modal-title').text('New Staff');
	$('.modal-body').load('ui/new.php');
	$('.modal').modal('show');
}

function saveNewStaff(){
	const idNum = document.querySelector('#text-id').value.toUpperCase().trim();
	const firstName = capitalizeWords(document.querySelector('#text-first-name').value);
	const middleName = capitalizeWords(document.querySelector('#text-middle-name').value);
	const lastName = capitalizeWords(document.querySelector('#text-last-name').value);
	const nickName = capitalizeWords(document.querySelector('#text-nick-name').value);
	const dept = document.querySelector('#select-dept').value;

	const regexId = /^FIT\s[\d]{4}$/;
	const regexName = /[^a-z\s]/gi;

	if (regexName.test(firstName) || regexName.test(middleName) || regexName.test(lastName) || regexName.test(nickName)){
		alert('Please use letters only for names!');
		return;
	} else if(!regexId.test(idNum)){
		alert('Please check your id number! \n ex: FIT 0000');
		return;
	}
	staffManager.add({idNum, firstName, middleName, lastName ,nickName, dept});
}

form.addEventListener('submit', formEvent);
addStaff.addEventListener('click', showAddForm);
document.addEventListener('DOMContentLoaded', staffManager.load);