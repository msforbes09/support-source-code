<form id="new-plan-category-input">
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
			<label for="text-plan-category">Plan Category:</label>
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-plan-category" class="form-control" placeholder="type category description here..." required>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<label for="text-category-point">Coefficient:</label>
		</div>
		<div class="col-lg-8">
			<input type="number" id="text-category-point" class="form-control" placeholder="type category point here..." min="0" max="10" required>
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