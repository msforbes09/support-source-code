<form id="new-process-event-input">
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
			<label for="text-process-event">Process Event:</label>
		</div>
		<div class="col-lg-8">
			<input type="text" id="text-process-event" class="form-control" placeholder="type new event here... (ex: &quot;start&quot;, &quot;finish&quot;)" required>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-lg-6">
			<input type="submit" class="btn btn-info btn-block" value="Save">
		</div>
		<div class="col-lg-6">
			<input type="button" class="btn btn-default btn-block" data-dismiss="modal" value="Close">
		</div>
	</div>
</form>