// global constants
const form = document.querySelector('.modal-body');

// loader
const loader = {
	image : document.querySelector('.loading'),
	show : () => loader.image.classList.remove('loaded'),
	hide : () => setTimeout(() => loader.image.classList.add('loaded'), 200)
}

const capitalizeWords = (string) => {
	const words = string.trim().split(' ')
	const capitalized = words.map((list) => {
		return list[0].toUpperCase() + list.slice(1).toLowerCase();
	}).join(' ');
	return capitalized;
}

// department manager object
const departmentManager = {
	load : () => {
		$.ajax({ type: "post", url: 'db/getDeptList.php', dataType: "json",
			error: (e) => alert(e.responseText),
			success: (data) => {
				const deptList = data.map((list, index) => `<tr><td>${index + 1}</td><td>${list.deptName}</td></tr>` ).join('');
				deptTable.innerHTML = deptList;
				loader.hide();		
			}
		})
	}, 
	add : data => {
		$.ajax({type: "post", url: 'db/saveNewDept.php', data,
			error: (e) => alert(e.responseText),
			success: (e) => {
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
			error: (e) => alert(e.responseText),
			success: (data) => {
				const staffList = data.map((list, index) => `<tr><td>${index + 1}</td><td>${list.idNum}</td><td>${list.fullName}</td><td>${list.nickName}</td><td>${list.deptName}</td></tr>`).join('');
				staffTable.innerHTML = staffList;
				loader.hide();		
			}
		})
	},
	add : data => {
		$.ajax({ type: "post", url: 'db/saveNewStaff.php', data,
			error: (e) => alert(e.responseText),
			success: (e) => {
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
			error: (e) => alert(e.responseText),
			success: (data) => {
				const processList = data.map((list, index) =>  `<tr><td>${index + 1}</td><td>${list.deptName}</td><td>${list.procName}</td></tr>`).join('');
				processTable.innerHTML = processList;
				loader.hide();		
			}
		})
	},
	add : data => {
		$.ajax({ type: "post", url: 'db/saveNewProcess.php', data,
			error: (e) => alert(e.responseText),
			success: (e) => {
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
			error: (e) => alert(e.responseText),
			success: (data) => {
				const processEventList = data.map((list, index) => `<tr><td>${index + 1}</td><td>${list.deptName}</td><td>${list.eventName}</td></tr>`).join('');
				processEventTable.innerHTML = processEventList;
				loader.hide();		
			}
		})
	},
	add : data => {
		$.ajax({ type: "post", url: 'db/saveNewProcessEvent.php', data,
			error: (e) => alert(e.responseText),
			success: (e) => {
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
			error: (e) => alert(e.responseText),
			success: (data) => {
				const planCategoryList = data.map((list, index) => `<tr><td>${index + 1}</td><td>${list.deptName}</td><td>${list.planCategory}</td><td>${list.categoryDesc}</td><td>${list.categoryPoint}</td></tr>`).join('');
				planCategoryTable.innerHTML = planCategoryList;
				loader.hide();		
			}
		})
	},
	add : data => {
		$.ajax({ type: "post", url: 'db/saveNewPlanCategory.php', data,
			error: (e) => alert(e.responseText),
			success: (e) => {
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
			error: (e) => alert(e.responseText),
			success: (data) => {
				const mistakeCategoryList = data.map((list, index) => `<tr><td>${index + 1}</td><td>${list.deptName}</td><td>${list.mistakeCategory}</td><td>${list.mistakeDesc}</td><td>${list.mistakePoint}</td></tr>`).join('');
				mistakeCategoryTable.innerHTML = mistakeCategoryList;
				loader.hide();		
			}
		})
	},
	add : data => {
		$.ajax({ type: "post", url: 'db/saveNewMistakeCategory.php', data,
			error: (e) => alert(e.responseText),
			success: (e) => {
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