<?php
require_once '../../tools/config.php';
$planCategory = $_REQUEST;
try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		
	$stmt = $pdo->prepare(
		"INSERT INTO plan_category(deptId, categoryDesc, categoryPoint)
		VALUES(:dept, :categoryDesc, :categoryPoint);"
	);
	$stmt->bindValue(':dept', $planCategory["dept"], PDO::PARAM_INT);
	$stmt->bindValue(':categoryDesc', $planCategory["categoryDesc"], PDO::PARAM_STR);
	$stmt->bindValue(':categoryPoint', $planCategory["categoryPoint"], PDO::PARAM_INT);
	$stmt->execute();

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>