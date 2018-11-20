<?php
require_once '../../config.php';
$user = $_REQUEST;

try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare(
		"SELECT staffId
		FROM staff
		WHERE idNum = :idNumber AND passCode = :passCode;"
	);
	$stmt->bindValue(':idNumber', $user["idNumber"], PDO::PARAM_STR);
	$stmt->bindValue(':passCode', md5($user["password"]), PDO::PARAM_STR);
	$stmt->execute();
	echo $stmt->rowCount();

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>