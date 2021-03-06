<?php
require_once '../../tools/config.php';

try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare(
		"SELECT s.staffId, s.idNum, concat(s.firstName, ' ', s.lastName) AS fullName, s.nickName, d.deptName 
		FROM staff s
		JOIN department d
		ON d.deptId = s.deptId
		ORDER BY s.staffId;"
	);
	$stmt->execute();
	$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
	print json_encode($data);

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>