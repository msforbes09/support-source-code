<form id="new-mistake-category-input">
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
	<div class="row">
		<div class="col-lg-4">
			<label for="text-mistake-category">Mistakes Category:</label>
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-mistake-category" class="form-control" placeholder="Example: &quot;A&quot;" maxlength="1" required>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<label for="text-mistake-description">Mistakes Description:</label>
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-mistake-description" class="form-control" placeholder="Example: &quot;Not followed instruction&quot;" required>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<label for="text-category-point">Coefficient:</label>
		</div>
		<div class="col-lg-8">
			<input type="number" id="text-category-point" class="form-control" placeholder="Example: &quot;0.5&quot;" min="0" max="10" step="0.1" required>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-lg-6">
			<input type="submit" class="btn btn-danger btn-block" value="Save">
		</div>
		<div class="col-lg-6">
			<input type="button" class="btn btn-default btn-block" data-dismiss="modal" value="Close">
		</div>
	</div>
</form>