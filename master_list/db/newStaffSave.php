<?php
require_once 'config.php';

$staff = $_REQUEST;

try{
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setattribute (PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
	$stmt = $pdo->prepare(
		"INSERT INTO staff
		(idNum, firstName, middleName, lastName, nickName, birthDate, hiredDate, email, phoneNumber, statId, jobId, teamId, passCode, img)
		VALUES
		(:idNum, :firstName, :middleName, :lastName, :nickName, :birthDate, :hiredDate, :email, :phoneNumber, :statId, :jobId, :teamId, :passCode, :img);");
	$stmt->bindValue(':idNum', $staff["idNum"], PDO::PARAM_STR);
	$stmt->bindValue(':firstName', $staff["firstName"], PDO::PARAM_STR);
	$stmt->bindValue(':middleName', $staff["middleName"], PDO::PARAM_STR);
	$stmt->bindValue(':lastName', $staff["lastName"], PDO::PARAM_STR);
	$stmt->bindValue(':nickName', $staff["nickName"], PDO::PARAM_STR);
	$stmt->bindValue(':birthDate', $staff["birthDate"], PDO::PARAM_STR);
	$stmt->bindValue(':hiredDate', $staff["hiredDate"], PDO::PARAM_STR);
	$stmt->bindValue(':email', $staff["email"], PDO::PARAM_STR);
	$stmt->bindValue(':phoneNumber', $staff["phoneNumber"], PDO::PARAM_STR);
	$stmt->bindValue(':statId', $staff["statId"], PDO::PARAM_INT);
	$stmt->bindValue(':jobId', $staff["jobId"], PDO::PARAM_INT);
	$stmt->bindValue(':teamId', $staff["teamId"], PDO::PARAM_INT);
	$stmt->bindValue(':passCode', md5($staff["idNum"]), PDO::PARAM_STR);
	$stmt->bindValue(':img', 'user_'. $staff["gender"] .'.png', PDO::PARAM_STR);
	$stmt->execute();
	
}catch( PDOException $e ){
	echo $e->getMessage();
}
$pdo = null; 
?>