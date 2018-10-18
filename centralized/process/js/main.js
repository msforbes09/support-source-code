const addProcess = document.querySelector('#process-add');
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
	processManager.add({dept, process});
}

function showAddProcessForm(){
	$('.modal-title').text('New Process');
	$('.modal-body').load('ui/new.php');
	$('.modal').modal('show');
}


addProcess.addEventListener('click', showAddProcessForm)
form.addEventListener('submit', formEvent);
document.addEventListener('DOMContentLoaded', processManager.load);