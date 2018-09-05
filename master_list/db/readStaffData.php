<?php
require_once 'config.php';

$id = $_REQUEST["id"];

try{
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setattribute (PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
	$stmt = $pdo->prepare(
		"SELECT s.idNum, s.firstName, s.middleName, s.lastName, s.nickName, s.birthDate, s.hiredDate, s.email, s.phoneNumber, e.statDesc, j.jobName, t.teamName, s.img
		FROM staff s
		JOIN empstatus e
		ON s.statId	= e.statId
		JOIN jobdesc j
		ON s.jobId = j.jobId
		JOIN team t
		ON s.teamId = t.teamId
		WHERE s.staffId = 1;
		");
	$stmt->bindValue(':staffId', $id, PDO::PARAM_INT);
	$stmt->execute();
	$staff = $stmt->fetch(PDO::FETCH_ASSOC);
	
}catch( PDOException $e ){
	echo $e->getMessage();
}
$pdo = null; 
?>
<div class="row">
	<div class="col-sm-4">
		<img width="100%" src="../image/masterList/<?php echo $staff["img"] ?>" alt="'s picture"/>
	</div>
	<div class="col-sm-8">
		<table id="staffDetailTable" class="table table-condensed table-striped">
			<tr>
				<td>I.D. No.:</td>
				<td><?php echo $staff["idNum"] ?></td>
			</tr>
			<tr>
				<td>First Name:</td>
				<td><?php echo $staff["firstName"] ?></td>
			</tr>
			<tr>
				<td>Middle Name:</td>
				<td><?php echo $staff["middleName"] ?></td>
			</tr>
			<tr>
				<td>Last Name:</td>
				<td><?php echo $staff["lastName"] ?></td>
			</tr>
			<tr>
				<td>Nick Name:</td>
				<td><?php echo $staff["nickName"] ?></td>
			</tr>
			<tr>
				<td>Birth Date:</td>
				<td><?php echo $staff["birthDate"] ?></td>
			</tr>
			<tr>
				<td>Hired Date:</td>
				<td><?php echo $staff["hiredDate"] ?></td>
			</tr>
			<tr>
				<td>E-mail:</td>
				<td><?php echo $staff["email"] ?></td>
			</tr>
			<tr>
				<td>Phone Number:</td>
				<td><?php echo $staff["phoneNumber"] ?></td>
			</tr>
			<tr>
				<td>Employment Status:</td>
				<td><?php echo $staff["statDesc"] ?></td>
			</tr>
			<tr>
				<td>Job Description:</td>
				<td><?php echo $staff["jobName"] ?></td>
			</tr>
			<tr>
				<td>Team:</td>
				<td><?php echo $staff["teamName"] ?></td>
			</tr>
		</table>
	</div>
</div>