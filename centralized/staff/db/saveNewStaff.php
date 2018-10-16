<?php
require_once '../../tools/config.php';
$staff = $_REQUEST;
try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare(
		"INSERT INTO staff(idNum, firstName, middleName, lastName, nickName)
		VALUES (:idNum, :firstName, :middleName, :lastName, :nickName);"
	);
	$stmt->bindValue(':idNum', $staff["idNum"], PDO::PARAM_STR);
	$stmt->bindValue(':firstName', $staff["firstName"], PDO::PARAM_STR);
	$stmt->bindValue(':middleName', $staff["middleName"], PDO::PARAM_STR);
	$stmt->bindValue(':lastName', $staff["lastName"], PDO::PARAM_STR);
	$stmt->bindValue(':nickName', $staff["nickName"], PDO::PARAM_STR);
	$stmt->execute();

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>