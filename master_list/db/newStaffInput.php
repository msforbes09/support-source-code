<?php
//require_once 'function.php';
?>
<form>
	<div class="row">
		<div class="col-sm-4">
			<label for="idText">I.D. Number: </label>
		</div>
		<div class="col-sm-8">
			<input id="idText" type="text" class="form-control input-sm" placeholder="type id number here..." maxlength="10" required/>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="firstNameText">First Name: </label>
		</div>
		<div class="col-sm-8">
			<input id="firstNameText" type="text" class="form-control input-sm" placeholder="type first name here..." maxlength="30" required/>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="middleNameText">Middle Name: </label>
		</div>
		<div class="col-sm-8">
			<input id="middleNameText" type="text" class="form-control input-sm" placeholder="type middle name here..." maxlength="30" required/>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="lastNameText">Last Name: </label>
		</div>
		<div class="col-sm-8">
			<input id="lastNameText" type="text" class="form-control input-sm" placeholder="type last name here..." maxlength="30" required/>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="nickNameText">Nick Name: </label>
		</div>
		<div class="col-sm-8">
			<input id="nickNameText" type="text" class="form-control input-sm" placeholder="type nick name here..." maxlength="30" required/>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="birthDateText">Birth Date: </label>
		</div>
		<div class="col-sm-8">
			<input id="birthDateText" type="date" class="form-control input-sm" required/>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="hiredDateText">Hired Date: </label>
		</div>
		<div class="col-sm-8">
			<input id="hiredDateText" type="date" class="form-control input-sm" required/>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="emailText">E-mail: </label>
		</div>
		<div class="col-sm-8">
			<input id="emailText" type="email" class="form-control input-sm" placeholder="type email here..." maxlength="30" required/>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="cpText">Cellphone Number: </label>
		</div>
		<div class="col-sm-8">
			<input id="cpText" type="text" class="form-control input-sm" placeholder="09xxxxxxxxx" maxlength="11" required/>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="empStatText">Employment Status: </label>
		</div>
		<div class="col-sm-8">
			<select id="empStatText" class="form-control input-sm" required="">
				
			</select>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="">Job Description: </label>
		</div>
		<div class="col-sm-8">
			<select id="" class="form-control input-sm" required="">
				
			</select>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="">Team: </label>
		</div>
		<div class="col-sm-8">
			<select id="" class="form-control input-sm" required="">
				
			</select>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="genderText">Gender: </label>
		</div>
		<div class="col-sm-8">
			<select id="genderText" class="form-control input-sm" required="">
				<option></option>
				<option value="m">Male</option>
				<option value="f">Female</option>
			</select>
		</div>
	</div>
	<input type="submit" class="btn btn-sm btn-primary" value="Save">
</form>
