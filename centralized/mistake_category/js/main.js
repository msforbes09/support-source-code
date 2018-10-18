const addMistakeCategory = document.querySelector('#mistake-category-add');
const modalTitle = document.querySelector('.modal-title');
const form = document.querySelector('.modal-body');
const mistakeCategoryTable = document.querySelector('#mistake-category-table');

//handle form events
function formEvent(e){
	e.preventDefault();
	const formId = e.target.getAttribute('id');

	// console.log(formId);
	switch(formId){
		case 'new-mistake-category-input':
			// console.log('ok');
			saveNewMistakeCategory();
			break;
	}
}

function saveNewMistakeCategory(){
	const dept = document.querySelector('#select-dept').value;
	const mistakeCategory = capitalizeWords(document.querySelector('#text-mistake-category').value);
	const mistakeDesc = capitalizeWords(document.querySelector('#text-mistake-description').value);
	const mistakePoint = parseFloat(document.querySelector('#text-category-point').value);
	// set validation here
	const regex = /[^a-z0-9\s]/gi;
	if (regex.test(mistakeCategory) || regex.test(mistakeDesc)){
		alert('Please use alphanumeric keys only!');
		return;
	}

	$.ajax({
		type: "post",
		url: 'db/saveNewMistakeCategory.php',
		success: (e) => {
			if(e) {
				alert(e);
				return;
			}
			$('.modal').modal('hide');
			getMistakeCategoryList()
		},
		error: (e) => alert(e.responseText),
		data: {dept, mistakeCategory, mistakeDesc, mistakePoint}
	})
}

function showAddMistakeCategoryForm(){
	$('.modal-body').load('ui/new.php');
	$('.modal').modal('show');
	modalTitle.textContent = 'New Mistake Category';
}

function getMistakeCategoryList(){
	$.ajax({
		type: "post",
		url: 'db/getMistakeCategoryList.php',
		dataType: "json",
		error: (e) => alert(e.responseText),
		success: (data) => {
			const mistakeCategoryList = data.map((list, index) => {
				return `<tr>
					<td>${index + 1}</td>
					<td>${list.deptName}</td>
					<td>${list.mistakeCategory}</td>
					<td>${list.mistakeDesc}</td>
					<td>${list.mistakePoint}</td>
				</tr>`;
			}).join('');
			mistakeCategoryTable.innerHTML = mistakeCategoryList;
		}
	})
}

addMistakeCategory.addEventListener('click', showAddMistakeCategoryForm)
form.addEventListener('submit', formEvent);
document.addEventListener('DOMContentLoaded', getMistakeCategoryList);