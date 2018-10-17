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
	const idNum = document.querySelector('#text-id').value.toUpperCase().trim();
	const firstName = capitalizeWords(document.querySelector('#text-first-name').value);
	const middleName = capitalizeWords(document.querySelector('#text-middle-name').value);
	const lastName = capitalizeWords(document.querySelector('#text-last-name').value);
	const nickName = capitalizeWords(document.querySelector('#text-nick-name').value);
	const dept = document.querySelector('#select-dept').value;
	// set validation here
	// console.log(idNum, firstName, middleName, lastName, nickName)
	const regexId = /^FIT\s[\d]{4}$/;
	const regexName = /[^a-z\s]/gi;

	if (regexName.test(firstName) || regexName.test(middleName) || regexName.test(lastName) || regexName.test(nickName)){
		alert('Please use letters only for names!');
		return;
	} else if(!regexId.test(idNum)){
		alert('Please check your id number! \n ex: FIT 0000');
		return;
	}

	$.ajax({
		type: "post",
		url: 'db/saveNewStaff.php',
		success: (e) => {
			if(e) {
				alert(e);
				return;
			}s
			$('.modal').modal('hide');
			getStaffList();
		},
		error: (e) => alert(e.responseText),
		data: {idNum, firstName, middleName, lastName ,nickName, dept}
	})
}

function getStaffList(){
	$.ajax({
		type: "post",
		url: 'db/getStaffList.php',
		dataType: "json",
		error: (e) => alert(e.responseText),
		success: (data) => {
			const staffList = data.map((list, index) => {
				return `<tr>
					<td>${index + 1}</td>
					<td>${list.idNum}</td>
					<td>${list.fullName}</td>
					<td>${list.nickName}</td>
					<td>${list.deptName}</td>
				</tr>`;
			}).join('');
			staffTable.innerHTML = staffList;
		}
	})
}

form.addEventListener('submit', formEvent);
addStaff.addEventListener('click', showAddForm);
document.addEventListener('DOMContentLoaded', getStaffList);