const addProcessEvent = document.querySelector('#process-event-add');
const processEventTable = document.querySelector('#process-event-table');

//handle form events
function formEvent(e){
	e.preventDefault();
	const formId = e.target.getAttribute('id');

	switch(formId){
		case 'new-process-event-input':
		saveNewProcessEvent();
			break;
	}
}

function saveNewProcessEvent(){
	const dept = document.querySelector('#select-dept').value;
	const processEvent = capitalizeWords(document.querySelector('#text-process-event').value);
	// set validation here
	const regex = /[^a-z\s]/gi;

	if(regex.test(processEvent)){
		alert('Please use letters only!');
		return;
	}
	eventManager.add({dept, processEvent})
}

function showAddProcessEventForm(){
	$('.modal-title').text('New Process Event');
	$('.modal-body').load('ui/new.php');
	$('.modal').modal('show');
}

addProcessEvent.addEventListener('click', showAddProcessEventForm)
form.addEventListener('submit', formEvent);
document.addEventListener('DOMContentLoaded', eventManager.load());