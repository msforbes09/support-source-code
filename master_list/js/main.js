$(function(){
function load(){//load table
	$.ajax({
			type: 'post',
			url: 'db/readList.php'
		}).done(function(data){
			$("#content").html(data)
		}).fail(function(data){
			alert('Failed.')
		})
}
$(document).on('click','#newStaffButton',function(){//show modal
	$('.modal-title').text('Add Record');
	$('.modal-body').load('db/newStaffInput.php');
	$('.modal').modal('show');
})
$(document).on('submit','#newStaff',function(e){
	e.preventDefault();
	const staff = {
		idNum : $('#idText').val(),
		firstName : $('#firstNameText').val(),
	    middleName : $('#middleNameText').val(),
	    lastName : $('#lastNameText').val(),
	    nickName : $('#nickNameText').val(),
	    birthDate : $('#birthDateText').val(),
	    hiredDate : $('#hiredDateText').val(),
	    email : $('#emailText').val(),
	    phoneNumber : $('#phoneNumberText').val(),
	    statId : $('#statList').val(),
	    jobId : $('#jobList').val(),
	    teamId : $('#teamList').val(),
	    gender : $('#genderText').val()
	}
	$.ajax({
		type: 'post',
		url: 'db/newStaffSave.php',
		data: staff
	}).done(function(data){
		$('.modal').modal('hide');
		load();
	}).fail(function(data){
		alert(data);
	})

	console.table(staff);
})
$(document).on('click','#test',function(){
	const a = 'asdf asdf asdf'.split(' ')
    	.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    	.join(' ');
	console.log(a)
})
load()
})