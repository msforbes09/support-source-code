<?php
require_once 'config.php';
$statList  = '';
$jobList  = '';
$teamList  = '';

try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare("SELECT statId, statDesc FROM empstatus;");
	$stmt->execute();
	while( $row = $stmt->fetch(PDO::FETCH_ASSOC) ){ $statList .= '<option value="'. $row["statId"] .'">'. $row["statDesc"] .'</option>'; }

	$stmt = $pdo->prepare("SELECT jobId, jobName FROM jobdesc;");		
	$stmt->execute();
	while( $row = $stmt->fetch(PDO::FETCH_ASSOC) ){ $jobList .= '<option value="'. $row["jobId"] .'">'. $row["jobName"] .'</option>'; }

	$stmt = $pdo->prepare("SELECT teamId, teamName FROM team;");
	$stmt->execute();
	while( $row = $stmt->fetch(PDO::FETCH_ASSOC) ){ $teamList .= '<option value="'. $row["teamId"] .'">'. $row["teamName"] .'</option>'; }

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
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
			<select id="empStatText" class="form-control input-sm">
				<?php echo $statList ?>
			</select>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="">Job Description: </label>
		</div>
		<div class="col-sm-8">
			<select id="" class="form-control input-sm" required>
				<?php echo $jobList ?>
			</select>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="">Team: </label>
		</div>
		<div class="col-sm-8">
			<select id="" class="form-control input-sm" required>
				<?php echo $teamList ?>
			</select>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<label for="genderText">Gender: </label>
		</div>
		<div class="col-sm-8">
			<select id="genderText" class="form-control input-sm" required>
				<option value="m">Male</option>
				<option value="f">Female</option>
			</select>
		</div>
	</div>
	<hr>
	<input type="submit" class="btn btn-sm btn-primary" value="Save">
	<input type="button" class="btn btn-sm btn-default" data-dismiss="modal" value="Close">
</form>
