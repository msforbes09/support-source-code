const addPlanCategory = document.querySelector('#plan-category-add');
const modalTitle = document.querySelector('.modal-title');
const form = document.querySelector('.modal-body');
// const processTable = document.querySelector('#process-table');

//handle form events
function formEvent(e){
	e.preventDefault();
	const formId = e.target.getAttribute('id');

	// console.log(formId);
	switch(formId){
		case 'new-plan-category-input':
			// console.log('ok');
			saveNewPlanCategory();
			break;
	}
}

function saveNewPlanCategory(){
	const dept = document.querySelector('#select-dept').value;
	const categoryDesc = document.querySelector('#text-plan-category').value;
	const categoryPoint = parseInt(document.querySelector('#text-category-point').value);
	// console.log(dept, categoryDesc, categoryPoint);
	// set validation here

	// return;
	$.ajax({
		type: "post",
		url: 'db/saveNewPlanCategory.php',
		success: (e) => {
			$('.modal').modal('hide');
			// getProcessList();
		},
		error: (e) => alert(e.responseText),
		data: {dept, categoryDesc, categoryPoint}
	})
}

function showAddPlanCategoryForm(){
	$('.modal-body').load('ui/new.php');
	$('.modal').modal('show');
	modalTitle.textContent = 'New Plan Category';
}

function getPlanCategoryList(){
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

addPlanCategory.addEventListener('click', showAddPlanCategoryForm)
form.addEventListener('submit', formEvent);
document.addEventListener('DOMContentLoaded', getPlanCategoryList);