const addProcessEvent = document.querySelector('#process-event-add');
const modalTitle = document.querySelector('.modal-title');
const form = document.querySelector('.modal-body');
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
	const processEvent = document.querySelector('#text-process-event').value;
	// set validation here

	$.ajax({
		type: "post",
		url: 'db/saveNewProcessEvent.php',
		success: (e) => {
			$('.modal').modal('hide');
			getProcessList();
		},
		error: (e) => alert(e.responseText),
		data: {dept, processEvent}
	})
}

function showAddProcessEventForm(){
	$('.modal-body').load('ui/new.php');
	$('.modal').modal('show');
	modalTitle.textContent = 'New Process Event';
}

function getProcessList(){
	$.ajax({
		type: "post",
		url: 'db/getProcessEventList.php',
		dataType: "json",
		error: (e) => alert(e.responseText),
		success: (data) => {
			const processEventList = data.map((list, index) => {
				return `<tr>
					<td>${index + 1}</td>
					<td>${list.deptName}</td>
					<td>${list.eventName}</td>
				</tr>`;
			}).join('');
			processEventTable.innerHTML = processEventList;
		}
	})
}

addProcessEvent.addEventListener('click', showAddProcessEventForm)
form.addEventListener('submit', formEvent);
document.addEventListener('DOMContentLoaded', getProcessList);