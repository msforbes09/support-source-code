const addProcess = document.querySelector('#process-add');
const modalTitle = document.querySelector('.modal-title');
const form = document.querySelector('.modal-body');
const processTable = document.querySelector('#process-table');

//handle form events
function formEvent(e){
	e.preventDefault();
	const formId = e.target.getAttribute('id');

	switch(formId){
		case 'new-process-input':
		saveNewProcess();
			break;
	}
}

function saveNewProcess(){
	const dept = document.querySelector('#select-dept').value;
	const process = capitalizeWords(document.querySelector('#text-process').value);
	// set validation here
	const regex = /[^a-z0-9\s]/gi;

	if(regex.test(process)){
		alert('Please use alphanumeric only!');
		return;
	}

	$.ajax({
		type: "post",
		url: 'db/saveNewProcess.php',
		success: (e) => {
			if(e) {
				alert(e);
				return;
			}
			$('.modal').modal('hide');
			getProcessList();
		},
		error: (e) => alert(e.responseText),
		data: {dept, process}
	})
}

function showAddProcessForm(){
	$('.modal-body').load('ui/new.php');
	$('.modal').modal('show');
	modalTitle.textContent = 'New Process';
}

function getProcessList(){
	$.ajax({
		type: "post",
		url: 'db/getProcessList.php',
		dataType: "json",
		error: (e) => alert(e.responseText),
		success: (data) => {
			const processList = data.map((list, index) => {
				return `<tr>
					<td>${index + 1}</td>
					<td>${list.deptName}</td>
					<td>${list.procName}</td>
				</tr>`;
			}).join('');
			processTable.innerHTML = processList;
		}
	})
}

addProcess.addEventListener('click', showAddProcessForm)
form.addEventListener('submit', formEvent);
document.addEventListener('DOMContentLoaded', getProcessList);