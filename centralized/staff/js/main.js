const modalTitle = document.querySelector('.modal-title');
const form = document.querySelector('.modal-body');
const addStaff = document.querySelector('#staff-add');

//handle form events
function formEvent(e){
	const formId = e.target.getAttribute('id');
	switch(formId){
		case 'new-staff-input':
		saveNewStaff();
			break;
	}
}

function showAddForm(){
	$('.modal-body').load('ui/new.php');
	$('.modal').modal('show');
	modalTitle.textContent = 'New Staff';
}

function saveNewStaff(){
	const idNum = document.querySelector('#text-id').value;
	const firstName = document.querySelector('#text-first-name').value;
	const middleName = document.querySelector('#text-middle-name').value;
	const lastName = document.querySelector('#text-last-name').value;
	const nickName = document.querySelector('#text-nick-name').value;
	// set validation here

	$.ajax({
		type: "post",
		url: 'db/saveNewStaff.php',
		error: () => alert("Something went wrong!"),
		success: () => {
			$('.modal').modal('hide');
		},
		data: {idNum, firstName, middleName, lastName ,nickName}
	})
	// console.log(idNum, firstName, middleName, lastName ,nickName);
}

form.addEventListener('submit', formEvent);
addStaff.addEventListener('click', showAddForm);