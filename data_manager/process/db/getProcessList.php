<?php
require_once '../../tools/config.php';

try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare(
		"SELECT p.procName AS procName, d.deptName AS deptName 
		FROM process p
		JOIN department d
		ON d.deptId = p.deptId
		ORDER BY p.procId;"
	);
	$stmt->execute();
	$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
	print json_encode($data);

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>