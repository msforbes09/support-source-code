<?php
require_once '../../config.php';

try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare(
		"SELECT staffId, idNum, concat(firstName, ' ', lastName) as fullName, nickName
		FROM staff ORDER BY staffId;"
	);
	$stmt->execute();
	$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
	print json_encode($data);

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>