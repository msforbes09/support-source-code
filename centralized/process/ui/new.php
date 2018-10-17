<form id="new-process-input">
	<div class="row">
		<div class="col-lg-4">
			<label for="select-dept">Department:</label>
		</div>
		<div class="col-lg-8">
			<select id="select-dept" class="form-control" required>
				<option disabled selected hidden value="">select your option...</option>
				<?php require_once '../db/getDeptList.php' ?>
			</select>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<label for="text-process">Process:</label>
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-process" class="form-control" placeholder="type new process here..." required>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-lg-6">
			<input type="submit" class="btn btn-primary btn-block" value="Save">
		</div>
		<div class="col-lg-6">
			<input type="button" class="btn btn-default btn-block" data-dismiss="modal" value="Close">
		</div>
	</div>
</form>