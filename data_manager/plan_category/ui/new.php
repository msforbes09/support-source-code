<form id="new-plan-category-input">
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
			<label for="text-plan-category">Plan Category:</label>
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-plan-category" class="form-control" placeholder="ex: &quot;Basic A&quot;, &quot;Revision D&quot;" required>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<label for="text-plan-category">Category Description:</label>
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-category-description" class="form-control" placeholder="ex: &quot;Basic EP & DP&quot;" required>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<label for="text-category-point">Coefficient:</label>
		</div>
		<div class="col-lg-8">
			<input type="number" id="text-category-point" class="form-control" placeholder="ex: &quot;1&quot;, &quot;8&quot;" min="0" max="10" required>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-lg-6">
			<button type="submit" class="btn btn-success btn-block">Save</button>
		</div>
		<div class="col-lg-6">
			<input type="button" class="btn btn-default btn-block" data-dismiss="modal" value="Close">
		</div>
	</div>
</form>