<?php
require_once '../../tools/config.php';
$dept = $_REQUEST;
try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare(
		"INSERT INTO department(deptName)
		VALUES (:deptName);"
	);
	$stmt->bindValue(':deptName', $dept["dept"], PDO::PARAM_STR);
	$stmt->execute();

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>