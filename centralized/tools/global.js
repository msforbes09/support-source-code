// global constants
const form = document.querySelector('.modal-body');
const navLink = document.querySelectorAll('.navbar-link');

// loader
const loader = {
	image : document.querySelector('.loading'),
	show : () => loader.image.classList.remove('loaded'),
	hide : () => loader.image.classList.add('loaded')
}
// button 
const button = {
	wait : trigger => {
		const color = getComputedStyle(trigger).backgroundColor;
		document.documentElement.style.setProperty('--waiting', color);
		trigger.classList.add('clicked');
	},
	done : trigger => trigger.classList.remove('clicked'),
	check : trigger => trigger.classList.contains('clicked') ? true : button.wait(trigger)
}

//capitalize words
const capitalizeWords = (string) => {
	const words = string.trim().split(' ')
	return words.map((list) => list[0].toUpperCase() + list.slice(1).toLowerCase()).join(' ');
}

// department manager object
const departmentManager = {
	load : () => {
		$.ajax({ type: "post", url: 'db/getDeptList.php', dataType: "json",
			error: e => alert(e.responseText),
			complete: () => { loader.hide() }, 
			success: (data) => {
				const deptList = data.map((list, index) => `<tr><td>${index + 1}</td><td>${list.deptName}</td></tr>` ).join('');
				deptTable.innerHTML = deptList;
			}
		})
	}, 
	add : data => {
		if (button.check(form.querySelector('[type="submit"]'))) return;	
		$.ajax({type: "post", url: 'db/saveNewDept.php', data,
			error: e => alert(e.responseText),
			complete: () => button.done(document.querySelector('.clicked')),
			success: e => {
				if(e) {
					alert(e);
					return;
				}
				loader.show();
				$('.modal').modal('hide');
				departmentManager.load();
			}
		})
	}
}
// staff manager object	
const staffManager = {
	load : () => {
		$.ajax({ type: "post", url: 'db/getStaffList.php', dataType: "json",
			error: e => alert(e.responseText),
			complete: () => { loader.hide() }, 
			success: (data) => {
				const staffList = data.map((list, index) => `<tr><td>${index + 1}</td><td>${list.idNum}</td><td>${list.fullName}</td><td>${list.nickName}</td><td>${list.deptName}</td></tr>`).join('');
				staffTable.innerHTML = staffList;
			}
		})
	},
	add : data => {
		if (button.check(form.querySelector('[type="submit"]'))) return;	
		$.ajax({ type: "post", url: 'db/saveNewStaff.php', data,
			error: e => alert(e.responseText),
			complete: () => button.done(document.querySelector('.clicked')),
			success: e => {
				if(e) {
					alert(e);
					return;
				}
				loader.show();
				$('.modal').modal('hide');
				staffManager.load();
			}
		})
	}
}
// process manager object
const processManager = {
	load : () => {
		$.ajax({ type: "post", url: 'db/getProcessList.php', dataType: "json",
			error: e => alert(e.responseText),
			complete: () => { loader.hide() }, 
			success: (data) => {
				const processList = data.map((list, index) => `<tr><td>${index + 1}</td><td>${list.deptName}</td><td>${list.procName}</td></tr>`).join('');
				processTable.innerHTML = processList;
			}
		})
	},
	add : data => {
		if (button.check(form.querySelector('[type="submit"]'))) return;	
		$.ajax({ type: "post", url: 'db/saveNewProcess.php', data,
			error: e => alert(e.responseText),
			complete: () => button.done(document.querySelector('.clicked')),
			success: e => {
				if(e) {
					alert(e);
					return;
				}
				loader.show();
				$('.modal').modal('hide');
				processManager.load();
			} 
		})
	}
}
// event manager object
const eventManager = {
	load : () => {
		$.ajax({ type: "post", url: 'db/getProcessEventList.php', dataType: "json",
			error: e => alert(e.responseText),
			complete: () => { loader.hide() }, 
			success: (data) => {
				const processEventList = data.map((list, index) => `<tr><td>${index + 1}</td><td>${list.deptName}</td><td>${list.eventName}</td></tr>`).join('');
				processEventTable.innerHTML = processEventList;
			}
		})
	},
	add : data => {
		if (button.check(form.querySelector('[type="submit"]'))) return;	
		$.ajax({ type: "post", url: 'db/saveNewProcessEvent.php', data,
			error: e => alert(e.responseText),
			complete: () => button.done(document.querySelector('.clicked')),
			success: e => {
				if(e) {
					alert(e);
					return;
				}
				loader.show();
				$('.modal').modal('hide');
				eventManager.load();
			}
		})
	}
}
// category manager object
const categoryManager = {
	load : () => {
		$.ajax({ type: "post", url: 'db/getPlanCategoryList.php', dataType: "json",
			error: e => alert(e.responseText),
			complete: () => { loader.hide() }, 
			success: (data) => {
				const planCategoryList = data.map((list, index) => `<tr><td>${index + 1}</td><td>${list.deptName}</td><td>${list.planCategory}</td><td>${list.categoryDesc}</td><td>${list.categoryPoint}</td></tr>`).join('');
				planCategoryTable.innerHTML = planCategoryList;
			}
		})
	},
	add : data => {
		if (button.check(form.querySelector('[type="submit"]'))) return;	
		$.ajax({ type: "post", url: 'db/saveNewPlanCategory.php', data,
			error: e => alert(e.responseText),
			complete: () => button.done(document.querySelector('.clicked')),
			success: e => {
				if(e) {
					alert(e);
					return;
				}
				loader.show();
				$('.modal').modal('hide');
				categoryManager.load();
			}
		})
	}
}
// mistake manager object
const mistakeManager = {
	load : () => {
		$.ajax({ type: "post", url: 'db/getMistakeCategoryList.php', dataType: "json",
			error: e => alert(e.responseText),
			complete: () => { loader.hide() }, 
			success: (data) => {
				const mistakeCategoryList = data.map((list, index) => `<tr><td>${index + 1}</td><td>${list.deptName}</td><td>${list.mistakeCategory}</td><td>${list.mistakeDesc}</td><td>${list.mistakePoint}</td></tr>`).join('');
				mistakeCategoryTable.innerHTML = mistakeCategoryList;
			}
		})
	},
	add : data => {
		if (button.check(form.querySelector('[type="submit"]'))) return;	
		$.ajax({ type: "post", url: 'db/saveNewMistakeCategory.php', data,
			error: e => alert(e.responseText),
			complete: () => button.done(document.querySelector('.clicked')),
			success: e => {
				if(e) {
					alert(e);
					return;
				}
				loader.show();
				$('.modal').modal('hide');
				mistakeManager.load();
			}
		})
	}
}
//navigating loader
navLink.forEach(link => {
	link.addEventListener('click', loader.show);
})
// set focus
$('.modal').on('shown.bs.modal', function () {
	form.querySelector('.form-control').focus();
})