<?php
require_once '../../tools/config.php';

try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare(
		"SELECT c.categoryId, d.deptName, c.categoryDesc, c.categoryPoint
		FROM plan_category c
		JOIN department d
		ON d.deptId = c.deptId
		ORDER BY c.categoryId;"
	);
	$stmt->execute();
	$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
	print json_encode($data);

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>