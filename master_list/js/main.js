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
	$('.modal-body').load('db/newStaffInput.php');
	$('.modal').modal('show');
})
$(document).on('change','#team_select',function(){//get team process
	$.ajax({
		type: 'post',
		url: 'server/get_job_desc.php',
		data:	{
			team_id: $('#team_select').val()
		}
	}).done(function(data){
		$('#job_desc_select').html(data)
	}).fail(function(data){
		message('Error','Something went wrong!!!')
	})
})
$(document).on('keypress','#id_num_txt',function(){//number only
	return isNumber(event)
})
$('.modal').on('shown.bs.modal', function () {//modal set focus
	$('.default').focus()
})
$(document).on('click','#add_save',function(){
	var id_num = $('#id_num_txt').val()
	var first_name = $('#first_name_txt').val().trim().toUpperCase()
	var middle_name = $('#middle_name_txt').val().trim().toUpperCase()
	var last_name = $('#last_name_txt').val().trim().toUpperCase()
	var nick_name = $('#nick_name_txt').val().trim().toUpperCase()
	var employment_stat = $('#employment_stat_select').val()
	var job_cate = $('#job_cate_select').val()
	var team = $('#team_select').val()
	var job_desc = $('#job_desc_select').val()
	if (id_num.length != 7 || !first_name || !middle_name || !last_name || !nick_name || employment_stat == 1 || job_cate == 1 || job_desc == 1){
		validate_error('Please Review your record!',' ','#err_prompt','Data Successfully Updated!','',1)
		return false
	}
	$.ajax({
		type: 'post',
		url: 'server/add_save.php',
		data: {
			id_num: id_num,
			first_name: first_name,
			middle_name: middle_name,
			last_name: last_name,
			nick_name: nick_name,
			employment_stat: employment_stat,
			job_cate: job_cate,
			team: team,
			job_desc: job_desc
		}
	}).done(function(data){
		validate_error(data,'.input-group','#err_prompt','Data Successfully Updated!','',1)
	}).fail(function(data){
		message('Error','Something went wrong!!!')
	})
})
load()
})

function message(title,message){
	$('.modal-dialog').removeClass('modal-lg');
	$('.modal-dialog').removeClass('modal-sm');
	$('.modal-title').html(title);
	$('.modal-body').html('<h4>' + message + '</h4>');
	$('.modal-footer').html('<button type="button" id="default" class="btn btn-default" data-dismiss="modal">Close</button>');
	$('.modal').modal('show')
}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode < 46 || charCode > 57) {
        return false;
    }
    return true;
}