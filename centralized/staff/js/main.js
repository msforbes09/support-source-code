const staffTable = document.querySelector('#staff-table');
const modalTitle = document.querySelector('.modal-title');
const form = document.querySelector('.modal-body');
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
		success: () => {
			$('.modal').modal('hide');
			getStaffList();
		},
		error: (e) => alert(e.statusText),
		data: {idNum, firstName, middleName, lastName ,nickName}
	})
}

function getStaffList(){
	$.ajax({
		type: "post",
		url: 'db/getStaffList.php',
		dataType: "json",
		error: (e) => alert(e.statusText),
		success: (data) => {
			const staffList = data.map((list, index) => {
				return `<tr>
					<td>${index + 1}</td>
					<td>${list.idNum}</td>
					<td>${list.fullName}</td>
					<td>${list.nickName}</td>
				</tr>`;
			}).join('');
			staffTable.innerHTML = staffList;
		}
	})
}

form.addEventListener('submit', formEvent);
addStaff.addEventListener('click', showAddForm);
document.addEventListener('DOMContentLoaded', getStaffList);