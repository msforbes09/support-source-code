<form id="new-staff-input">
	<div class="row">
		<div class="col-lg-4">
			<label for="text-id">I.D. #:</label>		
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-id" class="form-control" placeholder="ex: &quot;FIT 0000&quot;" required>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<label for="text-first-name">First Name:</label>		
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-first-name" class="form-control" placeholder="ex: &quot;Juan&quot;" required>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<label for="text-middle-name">Middle Name:</label>		
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-middle-name" class="form-control" placeholder="ex: &quot;Manuel&quot;" required>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<label for="text-last-name">Last Name:</label>		
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-last-name" class="form-control" placeholder="ex: &quot;dela Cruz&quot;" required>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<label for="text-nick-name">Nick Name:</label>		
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-nick-name" class="form-control" placeholder="ex: &quot;Juan&quot;" required>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<label for="select-dept">Department:</label>
		</div>
		<div class="col-lg-8">
			<select id="select-dept" class="form-control" required>
				<option disabled selected hidden value="">select department here...</option>
				<?php require_once '../../tools/globalDb/getDeptOption.php' ?>
			</select>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-lg-6">
			<input type="submit" class="btn btn-warning btn-block" value="Save">
		</div>
		<div class="col-lg-6">
			<input type="button" class="btn btn-default btn-block" data-dismiss="modal" value="Close">
		</div>
	</div>
</form>