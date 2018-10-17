const addDept = document.querySelector('#dept-add');
const modalTitle = document.querySelector('.modal-title');
const form = document.querySelector('.modal-body');
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

	$.ajax({
		type: "post",
		url: 'db/saveNewDept.php',
		success: (e) => {
			if(e) {
				alert(e);
				return;
			}
			$('.modal').modal('hide');
			getDeptList();
		},
		error: (e) => alert(e.responseText),
		data: {dept}
	})
}

function showAddDeptForm(){
	$('.modal-body').load('ui/new.php');
	$('.modal').modal('show');
	modalTitle.textContent = 'New Department';
}

function getDeptList(){
	$.ajax({
		type: "post",
		url: 'db/getDeptList.php',
		dataType: "json",
		error: (e) => alert(e.responseText),
		success: (data) => {
			const deptList = data.map((list, index) => {
				return `<tr>
					<td>${index + 1}</td>
					<td>${list.deptName}</td>
				</tr>`;
			}).join('');
			deptTable.innerHTML = deptList;
		}
	})
}

addDept.addEventListener('click', showAddDeptForm)
form.addEventListener('submit', formEvent);
document.addEventListener('DOMContentLoaded', getDeptList);