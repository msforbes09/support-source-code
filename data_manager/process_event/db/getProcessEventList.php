<?php
require_once '../../tools/config.php';

try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare(
		"SELECT e.eventId, d.deptName, e.eventName
		FROM process_event e
		JOIN department d
		ON d.deptId = e.deptId
		ORDER BY e.eventId;"
	);
	$stmt->execute();
	$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
	print json_encode($data);

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>