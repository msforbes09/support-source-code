<?php
require_once '../../tools/config.php';
$process = $_REQUEST;
try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare(
		"INSERT INTO process(deptId, procName)
		VALUES (:dept, :process);"
	);
	$stmt->bindValue(':dept', $process["dept"], PDO::PARAM_INT);
	$stmt->bindValue(':process', $process["process"], PDO::PARAM_STR);
	$stmt->execute();

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>