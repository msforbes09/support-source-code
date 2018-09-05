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
		<img width="150px" src="../image/masterList/<?php echo $staff["img"] ?>" alt="'s picture"/>
	</div>
	<div class="col-sm-8">
		<table id="staffDetailTable" class="table table-condensed table-striped">
			<tr>
				<td>I.d. No. :</td>
				<td></td>
			</tr>
		</table>
	</div>
</div>