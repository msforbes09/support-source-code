<?php
require_once '../../tools/config.php';
$processEvent = $_REQUEST;
try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare(
		"INSERT INTO process_event(deptId, eventName)
		VALUES(:dept ,:processEvent);"
	);
	$stmt->bindValue(':dept', $processEvent["dept"], PDO::PARAM_INT);
	$stmt->bindValue(':processEvent', $processEvent["processEvent"], PDO::PARAM_STR);
	$stmt->execute();

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>